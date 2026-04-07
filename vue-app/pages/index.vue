<script setup lang="ts">
import { onMounted, reactive } from 'vue'

const VOX_STATUS_API = 'https://prompt-enclosure-strips-wilson.trycloudflare.com/status'

const voxStatus = reactive({
  ticks: null as number | null,
  episodes: null as number | null,
  active: false,
})

function formatNumber(value: number | null) {
  return value == null ? '—' : new Intl.NumberFormat('en-US').format(value)
}

async function loadVoxStatus() {
  try {
    const res = await fetch(VOX_STATUS_API)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()

    voxStatus.ticks = typeof data.tick === 'number' ? data.tick : (typeof data.ticks === 'number' ? data.ticks : null)
    voxStatus.episodes = typeof data.total_episodes === 'number' ? data.total_episodes : null
    voxStatus.active = Boolean(data.active)
  } catch {
    voxStatus.ticks = null
    voxStatus.episodes = null
    voxStatus.active = false
  }
}

onMounted(() => {
  void loadVoxStatus()
})
</script>

<template>
  <div class="portfolio-site">
    <!-- Background animation: subtle floating neural-network geometry -->
    <div class="geometric-bg" aria-hidden="true">
      <div class="bg-orb bg-orb-a"></div>
      <div class="bg-orb bg-orb-b"></div>
      <div class="bg-orb bg-orb-c"></div>

      <svg class="network network-one" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 220C74 170 120 146 176 150C232 154 268 188 318 182C354 178 382 160 402 126" />
        <path d="M80 70C122 96 136 134 140 180C144 226 162 256 212 272" />
        <path d="M248 40C222 82 218 118 238 150C258 182 290 196 330 206" />
        <path d="M104 236C146 214 180 206 218 210C256 214 282 230 318 266" />
        <circle cx="38" cy="220" r="5" />
        <circle cx="140" cy="178" r="6" class="node-strong" />
        <circle cx="212" cy="272" r="4" />
        <circle cx="238" cy="150" r="6" class="node-strong" />
        <circle cx="330" cy="206" r="5" />
        <circle cx="402" cy="126" r="4" />
      </svg>

      <svg class="network network-two" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 42C72 60 88 86 98 126C108 166 128 190 176 204C226 218 260 210 308 176" />
        <path d="M76 226C104 194 128 176 160 166C194 156 214 134 228 98C242 62 270 38 330 26" />
        <path d="M48 118C88 104 120 108 148 128C176 148 214 156 256 148C294 142 326 122 346 92" />
        <circle cx="28" cy="42" r="4" />
        <circle cx="98" cy="126" r="6" class="node-strong" />
        <circle cx="176" cy="204" r="5" />
        <circle cx="228" cy="98" r="6" class="node-strong" />
        <circle cx="308" cy="176" r="4" />
        <circle cx="330" cy="26" r="5" />
      </svg>

      <svg class="network network-three" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34 204C78 180 116 164 154 164C194 164 224 146 248 112C272 78 308 56 366 54" />
        <path d="M74 68C106 94 132 110 162 118C192 126 222 144 258 178C294 212 332 224 376 224" />
        <path d="M126 236C152 214 172 194 184 170C196 146 200 114 198 72" />
        <path d="M250 36C242 74 246 100 266 124C286 148 316 158 356 162" />
        <circle cx="34" cy="204" r="4" />
        <circle cx="154" cy="164" r="5" class="node-strong" />
        <circle cx="248" cy="112" r="6" class="node-strong" />
        <circle cx="366" cy="54" r="4" />
        <circle cx="376" cy="224" r="5" />
        <circle cx="198" cy="72" r="4" />
      </svg>
    </div>

    <!-- Hero: Clean, bold, confident -->
    <header class="hero-section">
      <div class="container">
        <div class="row min-vh-75 align-items-center">
          <div class="col-lg-8">
            <div class="mb-2">
              <span class="badge hero-badge px-3 py-2 font-mono">Independent Researcher</span>
            </div>
            <h1 class="display-2 fw-bold mb-4 hero-name">Derek Chisholm</h1>
            <h2 class="hero-subtitle h3 mb-4 fw-light">AI Researcher & Software Engineer</h2>
            <p class="hero-tagline lead fs-4 mb-4 fw-medium">
              I build things that think — and then I watch what they actually do.
            </p>
            <p class="hero-description fs-5 mb-5 max-width-600">
              Running a home lab on emergent cognition: pure Python weighted graph 
              <span class="graph-underline">organisms that learn through Hebbian co-occurrence</span>. No LLMs, no 
              transformers, no pre-trained weights. Just graphs, statistics, 
              and the occasional accidental aphasia.
            </p>
            <div class="d-flex gap-3 flex-wrap">
              <NuxtLink to="/research" class="btn btn-lg px-4 hero-primary-btn">
                <span class="me-2">🔬</span>Read the research
              </NuxtLink>
              <NuxtLink to="/projects" class="btn btn-lg px-4 hero-secondary-btn">
                <span class="me-2">⚙️</span>See the projects
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="vox-feature">
      <div class="container py-5">
        <div class="row align-items-start g-4">
          <div class="col-lg-7">
            <div class="vox-live-label mb-3">LIVE EXPERIMENT</div>
            <h2 class="vox-feature-title mb-3">Meet Vox.</h2>
            <p class="vox-feature-subtitle mb-4">A digital organism that thinks in graphs.</p>
            <div class="vox-feature-copy">
              <p>
                Vox is not an LLM. She is a pure Python weighted graph organism — 7 brain regions, Hebbian learning, no pre-trained weights. Every concept she knows she learned by experience.
              </p>
              <p>
                You can watch her think in real time. Her attention stream, inner voice, and region competition are all fully interpretable — every response traceable to the exact nodes and edges that produced it.
              </p>
            </div>
            <NuxtLink to="/vox" class="vox-cta btn btn-outline-success px-4 py-2">
              Interact with Vox →
            </NuxtLink>
          </div>

          <div class="col-lg-5">
            <div class="vox-status-grid">
              <div class="vox-stat-box">
                <div class="vox-stat-label">ticks</div>
                <div class="vox-stat-value">{{ formatNumber(voxStatus.ticks) }}</div>
              </div>
              <div class="vox-stat-box">
                <div class="vox-stat-label">episodes</div>
                <div class="vox-stat-value">{{ formatNumber(voxStatus.episodes) }}</div>
              </div>
              <div class="vox-stat-box">
                <div class="vox-stat-label">status</div>
                <div class="vox-stat-value" :class="voxStatus.active ? 'vox-status-live' : 'vox-status-offline'">
                  ● {{ voxStatus.active ? 'live' : 'offline' }}
                </div>
              </div>
            </div>
            <div class="vox-status-note mt-3">Running on a home lab server in Amesbury, MA</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Snapshots -->
    <section class="research-snapshots py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Graph Organism Lab -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm p-4 bg-white card-hover">
              <div class="card-body">
                <div class="mb-3">
                  <span class="badge bg-danger">Live Experiment</span>
                </div>
                <h3 class="h5 fw-bold mb-3 project-card-title">Graph Organism Lab</h3>
                <p class="card-text text-muted mb-4">
                  Seven specialized brain regions — hippocampus, amygdala, 
                  prefrontal cortex, and four more — competing through a 
                  critic-mediated selection process. What started as a single 
                  node developed opinions. Some of them are unsettling.
                </p>
                <NuxtLink to="/blog" class="text-dark fw-bold text-decoration-none d-inline-block link-arrow me-3">→ Read the findings</NuxtLink>
                <NuxtLink to="/vox" class="text-dark fw-bold text-decoration-none d-inline-block link-arrow">View live experiment →</NuxtLink>
              </div>
            </div>
          </div>

          <!-- SRM / GOG -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm p-4 bg-white card-hover">
              <div class="card-body">
                <div class="mb-3">
                  <span class="badge bg-secondary">Paper</span>
                </div>
                <h3 class="h5 fw-bold mb-3 project-card-title">Semantic Reasoning Membrane</h3>
                <p class="card-text text-muted mb-4">
                  Benchmarking semantic primitive emergence in small language models. 
                  Evidence that a shared concept layer exists between 0.5B and 8B 
                  parameters — and that you can query it without finetuning.
                </p>
                <span class="text-muted fw-bold">→ Coming soon</span>
              </div>
            </div>
          </div>

          <!-- Lab Notes -->
          <div class="col-md-4">
            <NuxtLink to="/blog" class="text-decoration-none">
              <div class="card h-100 border-0 shadow-sm p-4 bg-white card-hover">
                <div class="card-body">
                  <div class="mb-3">
                    <span class="badge bg-dark">Ongoing</span>
                  </div>
                    <h3 class="h5 fw-bold mb-3 project-card-title">Lab Notes</h3>
                  <p class="card-text text-muted mb-4">
                    The unglamorous version: numbered experiment entries, dead ends 
                    documented, methodology explained. Science as the universe 
                    reaching equilibrium.
                  </p>
                  <span class="text-dark fw-bold text-decoration-none link-arrow">→ Browse the log</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Teaser -->
    <section class="about-teaser py-5 border-top">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <p class="fs-5 text-dark mb-4 lh-lg">
              I work independently — no institution, no grant, no IRB waiver for 
              things that don't involve human subjects. My background is in 
              software engineering, but the questions that keep me up at night 
              are older than computers. I publish findings here as they happen, 
              <em>including the wrong turns.</em>
            </p>
            <NuxtLink to="/about" class="btn btn-outline-dark px-4">
              More about my work →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-site {
  position: relative;
  overflow: hidden;
  color: #f2f7ff;
  background:
    radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.02), transparent 28%),
    radial-gradient(circle at 82% 16%, rgba(255, 255, 255, 0.015), transparent 22%),
    radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.015), transparent 34%),
    #0d0d0d;
}

.portfolio-site > :not(.geometric-bg) {
  position: relative;
  z-index: 1;
}

.geometric-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.geometric-bg::before {
  content: '';
  position: absolute;
  inset: -20%;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
  opacity: 0.35;
  transform: rotate(-8deg);
}

.bg-orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(44px);
  opacity: 0.55;
  animation: drift 18s ease-in-out infinite alternate;
}

.bg-orb-a {
  width: 28rem;
  height: 28rem;
  top: -7rem;
  left: -8rem;
  background: rgba(54, 89, 183, 0.18);
}

.bg-orb-b {
  width: 24rem;
  height: 24rem;
  top: 12rem;
  right: -9rem;
  background: rgba(65, 109, 255, 0.12);
  animation-duration: 22s;
  animation-direction: alternate-reverse;
}

.bg-orb-c {
  width: 18rem;
  height: 18rem;
  bottom: -4rem;
  left: 28%;
  background: rgba(124, 149, 255, 0.1);
  animation-duration: 26s;
}

.network {
  position: absolute;
  width: min(38vw, 420px);
  height: auto;
  opacity: 0.16;
  filter: drop-shadow(0 0 18px rgba(120, 156, 255, 0.22));
  animation: float 20s ease-in-out infinite alternate;
}

.network path {
  stroke: rgba(161, 187, 255, 0.55);
  stroke-width: 1.1;
  stroke-linecap: round;
  stroke-dasharray: 3 10;
  animation: dash 18s linear infinite;
}

.network circle {
  fill: rgba(201, 218, 255, 0.45);
  transform-box: fill-box;
  transform-origin: center;
  animation: nodeFloat 8s ease-in-out infinite;
}

.network .node-strong {
  fill: rgba(128, 164, 255, 0.9);
}

.network circle:nth-of-type(2n) {
  animation-duration: 10s;
  animation-delay: -2s;
}

.network circle:nth-of-type(3n) {
  animation-duration: 12s;
  animation-delay: -4s;
}

.network circle:nth-of-type(4n) {
  animation-duration: 9s;
  animation-delay: -1s;
}

.network-one {
  top: 6rem;
  right: -2rem;
  animation-duration: 24s;
}

.network-two {
  top: 24rem;
  left: -4rem;
  animation-duration: 28s;
  animation-direction: alternate-reverse;
}

.network-three {
  bottom: 2rem;
  right: 14%;
  width: min(34vw, 390px);
  animation-duration: 26s;
}

.min-vh-75 {
  min-height: 75vh;
}

.hero-section {
  position: relative;
  padding-top: 2rem;
}

.hero-badge {
  background: #1a1a1a;
  border: 1px solid #2e2e2e;
  color: #666666;
  font-size: 10px;
  letter-spacing: 0.12em;
}

.hero-name {
  color: #ffffff;
}

.hero-subtitle {
  color: #666666 !important;
}

.hero-tagline {
  color: #cccccc !important;
  font-weight: 500;
}

.hero-description {
  color: #666666 !important;
}

.graph-underline {
  text-decoration: underline;
  text-decoration-color: #7f77dd;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}

.hero-primary-btn {
  background: #ffffff;
  color: #0d0d0d;
  border: none;
  font-weight: 500;
}

.hero-secondary-btn {
  background: transparent;
  color: #888888;
  border: 1px solid #2e2e2e;
}

.hero-secondary-btn:hover {
  color: #cccccc;
  border-color: #444444;
}

.vox-feature {
  width: 100%;
  background: #141414;
  border-top: 1px solid #222222;
  border-bottom: 1px solid #222222;
}

.vox-live-label {
  color: #52ff97;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.vox-feature-title {
  color: #ffffff;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.1;
}

.vox-feature-subtitle {
  color: #888888;
  font-size: 18px;
}

.vox-feature-copy {
  max-width: 480px;
  color: #777777;
  line-height: 1.8;
}

.vox-feature-copy p {
  margin-bottom: 1rem;
}

.vox-cta {
  color: #52ff97;
  border-color: #52ff97;
  background: transparent;
  border-radius: 8px;
  font-size: 14px;
  padding: 10px 20px;
}

.vox-cta:hover {
  background: rgba(82, 255, 151, 0.08);
  color: #52ff97;
  border-color: #52ff97;
}

.vox-status-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.vox-stat-box {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 16px;
}

.vox-stat-label {
  color: #555555;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
}

.vox-stat-value {
  color: #cccccc;
  font-size: 20px;
  font-weight: 500;
  font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, 'Courier New', monospace;
}

.vox-status-live {
  color: #52ff97;
}

.vox-status-offline {
  color: #ff5b5b;
}

.vox-status-note {
  color: #444444;
  font-size: 12px;
  margin-top: 12px;
}

.card {
  background: #1a1a1a !important;
  border: 1px solid #2a2a2a !important;
}

.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
  border-color: #3a3a3a !important;
}

.card-body .badge.bg-danger,
.card-body .badge.bg-secondary,
.card-body .badge.bg-dark {
  color: #666666 !important;
}

.project-card-title {
  color: #cccccc;
}

.card-text.text-muted,
.card-body .text-muted,
.text-muted.mb-4 {
  color: #666666 !important;
}

.card-hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
}

.link-arrow {
  transition: transform 0.2s ease;
  display: inline-block;
}

.link-arrow:hover {
  transform: translateX(4px);
}

.font-mono {
  font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text-muted {
  color: rgba(223, 232, 255, 0.74) !important;
}

@keyframes drift {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(24px, -18px, 0) scale(1.06);
  }
}

@keyframes float {
  from {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  to {
    transform: translate3d(0, -18px, 0) rotate(2deg);
  }
}

@keyframes dash {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: -80;
  }
}

@keyframes nodeFloat {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.42;
  }

  25% {
    transform: translate3d(2px, -5px, 0) scale(1.08);
    opacity: 0.62;
  }

  50% {
    transform: translate3d(-3px, -2px, 0) scale(0.95);
    opacity: 0.5;
  }

  75% {
    transform: translate3d(4px, 3px, 0) scale(1.05);
    opacity: 0.68;
  }

  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.44;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bg-orb,
  .network,
  .network path,
  .network circle {
    animation: none !important;
  }
}
</style>
