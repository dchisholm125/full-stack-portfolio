<script setup lang="ts">
import * as d3 from 'd3'
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'

const API_BASE = "https://lunch-said-latter-pages.trycloudflare.com"

const POLL_STATUS_MS = 5000
const POLL_THOUGHTS_MS = 3000
const POLL_GRAPH_MS = 4000
const MAX_THOUGHTS = 28
const PROMPT_COOLDOWN_SECONDS = 10

interface Thought {
  timestamp: string
  content: string
  type: string
}

interface Candidate {
  response?: string
  bias?: string
  region?: string
  name?: string
}

interface GraphNode extends d3.SimulationNodeDatum {
  id: string
  label?: string
  region?: string
  activation?: number
}

interface GraphEdge extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode
  target: string | GraphNode
  weight?: number
}

interface GraphPayload {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

const GRAPH_CONFIG = {
  fontFamily: 'JetBrains Mono',
  alphaDecay: 0.02,
  minRadius: 6,
  maxRadius: 22,
  labelFontSize: 9,
  labelMinActivation: 0.3,
  regionColors: {
    hippocampus: '#6ea8ff',
    amygdala: '#ff9a4a',
    prefrontal: '#b180ff',
    motor: '#52ff97',
    wernicke: '#ff6b9d',
    broca: '#ffd166',
    occipital: '#a8daff',
    default: '#888888',
  },
}

const state = reactive({
  online: false,
  tick: null as number | null,
  mood: 0.5,
  thoughts: [] as Thought[],
  thoughtKeys: new Set<string>(),
  cooldownUntil: 0,
  loadingPrompt: false,
  lastCandidates: [] as Candidate[],
  winnerText: '',
})

const promptText = ref('')
const promptStatus = ref('')
const cooldownLeft = ref(0)
const graphOffline = ref(false)

const graphSvgRef = ref<SVGSVGElement | null>(null)
const graphContainerRef = ref<HTMLElement | null>(null)

let graphSvgSelection: d3.Selection<SVGSVGElement, unknown, null, undefined> | null = null
let graphSimulation: d3.Simulation<GraphNode, undefined> | null = null
let cooldownTimer: number | null = null
const pollingTimers: number[] = []

function clamp01(n: unknown) {
  return Math.max(0, Math.min(1, Number(n) || 0))
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function moodColor(mood: number) {
  const m = clamp01(mood)
  const r = Math.round(lerp(255, 82, m))
  const g = Math.round(lerp(91, 255, m))
  const b = Math.round(lerp(91, 151, m))
  return `rgb(${r}, ${g}, ${b})`
}

function truncate(text: unknown, len = 60) {
  const t = String(text || '').trim()
  return t.length <= len ? t : `${t.slice(0, len - 1)}…`
}

function candidateRegion(candidate: Candidate) {
  return String(candidate.bias || candidate.region || candidate.name || 'unknown').toLowerCase()
}

async function apiGet(path: string) {
  const res = await fetch(`${API_BASE}${path}`, { method: 'GET' })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const errMsg = data && data.error ? data.error : `HTTP ${res.status}`
    throw new Error(errMsg)
  }
  return data
}

async function apiPost(path: string, payload: Record<string, unknown>) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const errMsg = data && data.error ? data.error : `HTTP ${res.status}`
    throw new Error(errMsg)
  }
  return data
}

function setOnline(isOnline: boolean) {
  state.online = Boolean(isOnline)
}

function mergeThoughts(newThoughts: unknown) {
  if (!Array.isArray(newThoughts)) return

  for (const rawThought of newThoughts) {
    if (!rawThought || typeof rawThought !== 'object') continue

    const thought = rawThought as Record<string, unknown>
    const key = `${thought.timestamp || ''}|${thought.type || ''}|${thought.content || ''}`
    if (state.thoughtKeys.has(key)) continue

    state.thoughtKeys.add(key)
    state.thoughts.unshift({
      timestamp: String(thought.timestamp || '—'),
      content: String(thought.content || ''),
      type: String(thought.type || 'idle'),
    })
  }

  if (state.thoughts.length > MAX_THOUGHTS) {
    const trimmed = state.thoughts.slice(0, MAX_THOUGHTS)
    state.thoughtKeys = new Set(trimmed.map((t) => `${t.timestamp}|${t.type}|${t.content}`))
    state.thoughts = trimmed
  }
}

async function refreshStatus() {
  try {
    const [health, status, vitals] = await Promise.all([
      apiGet('/health'),
      apiGet('/status'),
      apiGet('/vitals'),
    ])

    setOnline(Boolean(health.vox))
    state.tick = status.tick ?? state.tick
    state.mood = vitals.mood ?? status.mood ?? state.mood
  } catch {
    setOnline(false)
  }

  if (!state.online) {
    state.winnerText = ''
    state.lastCandidates = []
  }
}

async function refreshThoughts() {
  try {
    const payload = await apiGet('/thoughts')
    mergeThoughts(payload.thoughts || [])
  } catch {
    if (!state.online) {
      state.thoughts = []
      state.thoughtKeys.clear()
    }
  }
}

async function refreshCompetition() {
  try {
    const payload = await apiGet('/competition')
    const candidates = Array.isArray(payload.candidates) ? payload.candidates : []
    if (candidates.length) {
      state.lastCandidates = candidates
      const winner = payload.winner || {}
      state.winnerText = String(winner.response || '')
    }
  } catch {
    if (!state.online) {
      state.winnerText = ''
      state.lastCandidates = []
    }
  }
}

function setPromptLoading(loading: boolean) {
  state.loadingPrompt = Boolean(loading)
  if (state.loadingPrompt) {
    promptStatus.value = 'sending signal to Vox...'
  }
}

function clearCooldownTimer() {
  if (cooldownTimer != null) {
    window.clearInterval(cooldownTimer)
    cooldownTimer = null
  }
}

function startCooldown(seconds: number) {
  state.cooldownUntil = Date.now() + seconds * 1000
  clearCooldownTimer()

  const tickCooldown = () => {
    const left = Math.max(0, Math.ceil((state.cooldownUntil - Date.now()) / 1000))
    cooldownLeft.value = left

    if (left > 0) {
      promptStatus.value = `next prompt in ${left}s`
      return
    }

    clearCooldownTimer()
    promptStatus.value = state.online ? 'ready' : 'Vox is sleeping'
  }

  tickCooldown()
  cooldownTimer = window.setInterval(tickCooldown, 250)
}

async function submitPrompt() {
  const text = promptText.value.trim()
  if (!text) return
  if (cooldownLeft.value > 0 || state.loadingPrompt) return

  setPromptLoading(true)
  startCooldown(PROMPT_COOLDOWN_SECONDS)

  try {
    const payload = await apiPost('/prompt', { text })
    setOnline(true)

    state.winnerText = String(payload.response || '')
    state.lastCandidates = Array.isArray(payload.candidates) ? payload.candidates : []

    if (payload.tick != null) {
      state.tick = Number(payload.tick)
    }

    await refreshGraph()
    promptText.value = ''
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Vox is sleeping'
    if (/sleeping/i.test(msg) || /failed|network|http 503/i.test(msg.toLowerCase())) {
      setOnline(false)
      state.winnerText = ''
      state.lastCandidates = []
      promptStatus.value = 'Vox is sleeping'
    } else {
      promptStatus.value = msg
    }
  } finally {
    setPromptLoading(false)
  }
}

function edgeNodeId(node: string | GraphNode) {
  return typeof node === 'string' ? node : node.id
}

function nodeRadius(node: GraphNode) {
  const activation = node.activation || 0
  return GRAPH_CONFIG.minRadius + (GRAPH_CONFIG.maxRadius - GRAPH_CONFIG.minRadius) * activation
}

function getRegionColor(region?: string) {
  const r = String(region || 'default').toLowerCase() as keyof typeof GRAPH_CONFIG.regionColors
  return GRAPH_CONFIG.regionColors[r] || GRAPH_CONFIG.regionColors.default
}

function initializeGraph() {
  if (graphSvgSelection || !graphSvgRef.value || !graphContainerRef.value) return

  const width = graphContainerRef.value.clientWidth || 420
  const height = graphContainerRef.value.clientHeight || 320

  graphSvgSelection = d3
    .select(graphSvgRef.value)
    .attr('width', width)
    .attr('height', height)

  graphSimulation = d3
    .forceSimulation<GraphNode>()
    .force('link', d3.forceLink<GraphNode, GraphEdge>().id((d) => d.id).distance(90))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('collision', d3.forceCollide<GraphNode>().radius((d) => nodeRadius(d) + 18))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .alphaDecay(GRAPH_CONFIG.alphaDecay)

  graphSvgSelection.append('g').attr('class', 'edges')
  graphSvgSelection.append('g').attr('class', 'nodes')
}

function updateGraph(newData: GraphPayload) {
  if (!graphSvgSelection || !graphSimulation) return

  const nodes = Array.isArray(newData.nodes) ? newData.nodes : []
  const edges = Array.isArray(newData.edges) ? newData.edges : []

  graphSimulation.nodes(nodes)
  const forceLink = graphSimulation.force('link') as d3.ForceLink<GraphNode, GraphEdge>
  forceLink.links(edges)
  graphSimulation.alpha(0.5).restart()

  const edgeSelection = graphSvgSelection
    .select<SVGGElement>('.edges')
    .selectAll<SVGLineElement, GraphEdge>('line')
    .data(edges, (d) => `${edgeNodeId(d.source)}-${edgeNodeId(d.target)}`)

  edgeSelection.exit().remove()

  edgeSelection
    .enter()
    .append('line')
    .attr('stroke', '#2a2a2a')
    .merge(edgeSelection)
    .attr('stroke-width', (d) => Math.max(0.5, (d.weight || 0) * 2))
    .attr('opacity', (d) => Math.max(0.2, (d.weight || 0) * 0.8))

  const nodeSelection = graphSvgSelection
    .select<SVGGElement>('.nodes')
    .selectAll<SVGGElement, GraphNode>('g.node')
    .data(nodes, (d) => d.id)

  nodeSelection.exit().remove()

  const nodeEnter = nodeSelection
    .enter()
    .append('g')
    .attr('class', 'node')

  nodeEnter
    .append('circle')
    .attr('opacity', 0.85)

  nodeEnter
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('font-size', `${GRAPH_CONFIG.labelFontSize}px`)
    .attr('font-family', GRAPH_CONFIG.fontFamily)
    .attr('fill', '#aaaaaa')

  const mergedNodes = nodeEnter.merge(nodeSelection)

  mergedNodes
    .select('circle')
    .attr('r', (d) => nodeRadius(d))
    .attr('fill', (d) => getRegionColor(d.region))

  mergedNodes
    .select('text')
    .attr('dy', (d) => nodeRadius(d) + 14)
    .attr('opacity', (d) => (d.activation || 0) > GRAPH_CONFIG.labelMinActivation ? 1 : 0)
    .text((d) => d.label || d.id)

  graphSimulation.on('tick', () => {
    if (!graphSvgSelection) return

    graphSvgSelection
      .selectAll<SVGLineElement, GraphEdge>('.edges line')
      .attr('x1', (d) => (d.source as GraphNode).x || 0)
      .attr('y1', (d) => (d.source as GraphNode).y || 0)
      .attr('x2', (d) => (d.target as GraphNode).x || 0)
      .attr('y2', (d) => (d.target as GraphNode).y || 0)

    graphSvgSelection
      .selectAll<SVGGElement, GraphNode>('.nodes g.node')
      .attr('transform', (d) => `translate(${d.x || 0},${d.y || 0})`)
  })
}

async function refreshGraph() {
  try {
    const payload = await apiGet('/nodes')
    graphOffline.value = false
    updateGraph({
      nodes: Array.isArray(payload.nodes) ? payload.nodes : [],
      edges: Array.isArray(payload.edges) ? payload.edges : [],
    })
  } catch {
    if (!state.online) {
      graphOffline.value = true
    }
  }
}

const liveText = computed(() => (state.online ? 'live' : 'offline'))
const tickText = computed(() => (state.tick == null ? 'tick: —' : `tick: ${state.tick}`))
const moodValue = computed(() => clamp01(state.mood))
const moodLabel = computed(() => `mood ${moodValue.value.toFixed(2)}`)
const moodFillStyle = computed(() => ({
  width: `${Math.round(moodValue.value * 100)}%`,
  background: moodColor(moodValue.value),
}))

const visibleThoughts = computed(() => state.thoughts.slice(0, 16))
const thoughtEmptyText = computed(() => (state.online ? 'waiting for inner voice...' : 'Vox is sleeping.'))

function thoughtOpacity(index: number, count: number) {
  const depth = index / Math.max(1, count - 1)
  return 1 - depth * 0.7
}

const winnerDisplayText = computed(() => {
  if (!state.online) return 'Vox is sleeping.'
  return state.winnerText.trim() ? state.winnerText : 'waiting for a prompt...'
})

const winnerIsSleeping = computed(() => !state.online)

const promptDisabled = computed(() => state.loadingPrompt || cooldownLeft.value > 0)
const sendButtonText = computed(() => (state.loadingPrompt ? 'sending...' : 'send'))

watch(
  () => state.online,
  (online) => {
    if (!state.loadingPrompt && cooldownLeft.value === 0) {
      promptStatus.value = online ? 'ready' : 'Vox is sleeping'
    }
  },
  { immediate: true },
)

onMounted(async () => {
  initializeGraph()

  await refreshStatus()
  await refreshThoughts()
  await refreshCompetition()
  await refreshGraph()

  pollingTimers.push(window.setInterval(refreshStatus, POLL_STATUS_MS))
  pollingTimers.push(window.setInterval(refreshThoughts, POLL_THOUGHTS_MS))
  pollingTimers.push(window.setInterval(refreshCompetition, POLL_STATUS_MS))
  pollingTimers.push(window.setInterval(refreshGraph, POLL_GRAPH_MS))
})

onUnmounted(() => {
  pollingTimers.forEach((timerId) => window.clearInterval(timerId))
  clearCooldownTimer()
  graphSimulation?.stop()
})
</script>

<template>
  <main class="app">
    <section class="card header">
      <div class="header-left">
        <div class="vox-title">VOX</div>
        <div class="live-chip">
          <span :class="['dot', { live: state.online }]" />
          <span>{{ liveText }}</span>
        </div>
      </div>
      <div class="header-center">
        <div class="tick">{{ tickText }}</div>
      </div>
      <div class="header-right">
        <div class="mood-wrap">
          <div class="mood-fill" :style="moodFillStyle" />
        </div>
        <div class="mood-label">{{ moodLabel }}</div>
      </div>
    </section>

    <section class="card prompt-box">
      <input
        v-model="promptText"
        class="prompt-input"
        type="text"
        placeholder="whisper something to Vox..."
        autocomplete="off"
        :disabled="promptDisabled"
        @keydown.enter.prevent="submitPrompt"
      >
      <button class="send-btn" type="button" :disabled="promptDisabled" @click="submitPrompt">{{ sendButtonText }}</button>
      <div class="prompt-status">{{ promptStatus }}</div>
    </section>

    <section class="columns">
      <article class="card panel">
        <h2 class="panel-title">inner voice</h2>
        <div class="thoughts-wrap">
          <div class="thought-feed">
            <template v-if="visibleThoughts.length">
              <article
                v-for="(thought, idx) in visibleThoughts"
                :key="`${thought.timestamp}-${thought.type}-${idx}`"
                class="thought-item"
                :style="{ opacity: String(thoughtOpacity(idx, visibleThoughts.length)) }"
              >
                <p class="thought-text">{{ thought.content || '...' }}</p>
                <div class="thought-meta">
                  <span class="badge">{{ thought.type.toLowerCase() }}</span>
                  <span class="stamp">{{ thought.timestamp || '—' }}</span>
                </div>
              </article>
            </template>
            <div v-else class="sleeping">{{ thoughtEmptyText }}</div>
          </div>
          <div class="fade-mask" />
        </div>
      </article>

      <article class="card panel">
        <h2 class="panel-title">concept graph</h2>
        <div ref="graphContainerRef" class="graph-container">
          <svg ref="graphSvgRef" />
          <div v-if="graphOffline" class="graph-offline-text">concept graph offline</div>
        </div>
      </article>

      <article class="card panel">
        <h2 class="panel-title">last prompt</h2>
        <p :class="['response-main', { sleeping: winnerIsSleeping }]">{{ winnerDisplayText }}</p>
        <div class="candidate-list">
          <template v-if="state.lastCandidates.length">
            <div
              v-for="(candidate, idx) in state.lastCandidates"
              :key="`${candidateRegion(candidate)}-${idx}`"
              class="candidate"
            >
              <div :class="['candidate-region', `region-${candidateRegion(candidate)}`]">
                {{ candidateRegion(candidate) }}
              </div>
              <div class="candidate-text">{{ truncate(candidate.response || '', 120) }}</div>
            </div>
          </template>
          <div v-else class="sleeping">{{ state.online ? 'no recent candidates yet' : 'Vox is sleeping.' }}</div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
:root {
  --bg: #0d0d0d;
  --panel: #131313;
  --panel-2: #171717;
  --line: #242424;
  --text: #dddddd;
  --muted: #9a9a9a;
  --bright: #f3f3f3;
  --green: #52ff97;
  --red: #ff5b5b;
  --orange: #ff9a4a;
  --blue: #6ea8ff;
  --purple: #b180ff;
}

* {
  box-sizing: border-box;
}

.app {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 18px;
  min-height: calc(100vh - 40px);
  color: var(--text);
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

.card {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, var(--panel-2), var(--panel));
  border-radius: 12px;
}

.header {
  padding: 12px 16px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 10px;
}

.header-left,
.header-center,
.header-right {
  display: flex;
  align-items: center;
  min-width: 0;
}

.header-left {
  gap: 10px;
}

.header-center {
  justify-content: center;
}

.header-right {
  justify-content: flex-end;
  gap: 10px;
}

.vox-title {
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  color: #f0f0f0;
  font-variant: small-caps;
  font-weight: 700;
}

.live-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.07em;
  text-transform: lowercase;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 0 0 rgba(255, 91, 91, 0.75);
}

.dot.live {
  background: var(--green);
  animation: pulse 1.6s infinite;
  box-shadow: 0 0 0 0 rgba(82, 255, 151, 0.75);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(82, 255, 151, 0.55);
  }

  70% {
    box-shadow: 0 0 0 12px rgba(82, 255, 151, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(82, 255, 151, 0);
  }
}

.tick {
  color: var(--bright);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
}

.mood-wrap {
  width: 160px;
  height: 10px;
  border-radius: 999px;
  border: 1px solid #2d2d2d;
  background: #101010;
  overflow: hidden;
  position: relative;
}

.mood-fill {
  height: 100%;
  width: 50%;
  transition: width 250ms ease, background 250ms ease;
  background: #999;
}

.mood-label {
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.05em;
  text-transform: lowercase;
  min-width: 62px;
  text-align: right;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1.33fr 1fr;
  gap: 18px;
  min-height: 0;
}

.panel {
  padding: 14px;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.panel-title {
  color: #c3c3c3;
  font-size: 0.8rem;
  letter-spacing: 0.11em;
  text-transform: lowercase;
  margin: 0 0 12px 0;
  font-weight: 600;
}

.thoughts-wrap {
  position: relative;
  flex: 1;
  min-height: 260px;
  overflow: hidden;
}

.thought-feed {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  overflow: hidden;
  padding-right: 4px;
}

.thought-item {
  border: 1px solid #1f1f1f;
  background: #101010;
  border-radius: 10px;
  padding: 10px;
  transition: opacity 300ms ease;
}

.thought-text {
  color: #cfcfcf;
  font-size: 1rem;
  line-height: 1.35;
  margin: 0 0 6px 0;
  word-break: break-word;
}

.thought-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.badge {
  font-size: 0.67rem;
  color: #bcbcbc;
  border: 1px solid #3a3a3a;
  border-radius: 999px;
  padding: 2px 7px;
  text-transform: lowercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.stamp {
  color: #7f7f7f;
  font-size: 0.7rem;
  white-space: nowrap;
}

.fade-mask {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 120px;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 0.65) 50%, rgba(13, 13, 13, 1) 100%);
}

.response-main {
  color: var(--bright);
  font-size: 1.28rem;
  line-height: 1.45;
  min-height: 120px;
  margin: 0 0 10px 0;
  word-break: break-word;
}

.candidate-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
}

.candidate {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  font-size: 0.85rem;
  color: #9a9a9a;
  border-bottom: 1px dashed #262626;
  padding-bottom: 7px;
}

.candidate-region {
  text-transform: lowercase;
  font-weight: 700;
  letter-spacing: 0.04em;
  min-width: 98px;
}

.region-hippocampus {
  color: var(--blue);
}

.region-amygdala {
  color: var(--orange);
}

.region-prefrontal {
  color: var(--purple);
}

.region-motor {
  color: var(--green);
}

.candidate-text {
  color: #a8a8a8;
  white-space: normal;
  overflow: visible;
  word-break: break-word;
}

.sleeping {
  color: #8e8e8e;
  font-size: 0.9rem;
}

.graph-container {
  width: 100%;
  height: 100%;
  min-height: 0;
  position: relative;
}

.graph-container svg {
  width: 100%;
  height: 100%;
  min-height: 280px;
}

.graph-offline-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #7f7f7f;
  font-size: 0.9rem;
  white-space: nowrap;
}

.prompt-box {
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
}

.prompt-input {
  width: 100%;
  background: #101010;
  border: 1px solid #2a2a2a;
  color: #ebebeb;
  border-radius: 9px;
  padding: 12px 14px;
  font-size: 0.95rem;
  outline: none;
}

.prompt-input:focus {
  border-color: #3d3d3d;
}

.prompt-input:disabled {
  color: #8f8f8f;
  background: #0d0d0d;
  cursor: not-allowed;
}

.send-btn {
  background: #1d1d1d;
  border: 1px solid #313131;
  color: #dfdfdf;
  border-radius: 9px;
  padding: 11px 14px;
  font-family: inherit;
  font-size: 0.86rem;
  letter-spacing: 0.04em;
  cursor: pointer;
  min-width: 96px;
}

.send-btn:hover:not(:disabled) {
  border-color: #484848;
  background: #222;
}

.send-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.prompt-status {
  grid-column: 1 / -1;
  color: #8a8a8a;
  font-size: 0.75rem;
  min-height: 1.1em;
}

@media (max-width: 1400px) {
  .columns {
    grid-template-columns: 1fr;
  }

  .header {
    grid-template-columns: 1fr;
    row-gap: 8px;
  }

  .header-center,
  .header-right {
    justify-content: flex-start;
  }

  .mood-wrap {
    width: 100%;
    max-width: 240px;
  }
}
</style>
