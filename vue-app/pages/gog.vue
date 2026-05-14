<template>
  <div class="gog-page">
    <header class="gog-hero">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-8">
            <div class="gog-kicker font-mono mb-3">Research Project</div>
            <h1 class="display-3 fw-bold mb-4">Graph-Oriented Generation</h1>
            <p class="gog-hero-copy mb-4">
              Graph-Oriented Generation is a graph-native context layer for AI coding agents.
            </p>
            <p class="gog-hero-subtitle mb-4">
              Instead of flattening a codebase into retrieved text chunks, GOG maps the
              repository into structured graphs and routes only the task-relevant context
              to the model.
            </p>
            <p class="gog-tagline mb-5">Context is not knowledge. Structure matters.</p>
            <div class="d-flex gap-3 flex-wrap">
              <a
                href="https://github.com/dchisholm125/graph-oriented-generation"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-light btn-lg px-4"
              >
                GitHub Repo ->
              </a>
              <a href="#benchmarks" class="btn btn-outline-light btn-lg px-4">
                Latest Benchmarks
              </a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="gog-hero-panel">
              <div class="graph-stage" aria-hidden="true">
                <span class="graph-node node-a"></span>
                <span class="graph-node node-b"></span>
                <span class="graph-node node-c"></span>
                <span class="graph-node node-d"></span>
                <span class="graph-node node-e"></span>
                <span class="graph-edge edge-ab"></span>
                <span class="graph-edge edge-ac"></span>
                <span class="graph-edge edge-bd"></span>
                <span class="graph-edge edge-ce"></span>
              </div>
              <div class="gog-panel-label font-mono">Graph-routed context</div>
              <p class="mb-0">
                Files, symbols, tests, dependencies, and behavior treated as structure
                before tokens are spent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="gog-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="section-card">
                <div class="section-label font-mono">Core Thesis</div>
                <h2 class="h2 fw-bold mb-4">A codebase is already structured.</h2>
                <p>
                  Coding assistants often rely on Retrieval-Augmented Generation (RAG):
                  vectorize the repo, retrieve chunks, and ask the model to infer the
                  architecture from a pile of text.
                </p>
                <p class="mb-0">
                  GOG starts from a different assumption: a codebase is already a
                  structured symbolic system. Files, imports, functions, classes, tests,
                  dependencies, and runtime behavior form a graph. GOG uses that graph to
                  build a smaller, more relevant context bundle before the model ever
                  starts reasoning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gog-section pt-0">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-6">
              <div class="comparison-card h-100">
                <div class="comparison-heading">
                  <span class="comparison-dot rag-dot"></span>
                  <h2 class="h4 fw-bold mb-0">Traditional RAG</h2>
                </div>
                <ul class="comparison-list">
                  <li>Vector search over chunks</li>
                  <li>Large pile of possibly relevant files</li>
                  <li>Model infers structure</li>
                  <li>Higher token cost / more noise</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="comparison-card comparison-card-strong h-100">
                <div class="comparison-heading">
                  <span class="comparison-dot gog-dot"></span>
                  <h2 class="h4 fw-bold mb-0">Graph-Oriented Generation</h2>
                </div>
                <ul class="comparison-list">
                  <li>Codebase graph</li>
                  <li>Relevant files + symbols + tests</li>
                  <li>Model receives structured context</li>
                  <li>Lower token cost / cleaner reasoning path</li>
                </ul>
              </div>
            </div>
          </div>
          <p class="comparison-footer mt-4 mb-0">RAG brute-forces context. GOG routes context.</p>
        </div>
      </section>

      <section id="benchmarks" class="gog-section benchmark-section">
        <div class="container">
          <div class="section-label font-mono">Benchmark Highlights</div>
          <div class="d-flex align-items-end justify-content-between gap-3 flex-wrap mb-4">
            <h2 class="h2 fw-bold mb-0">Early repeated trials</h2>
            <a
              href="https://github.com/dchisholm125/graph-oriented-generation"
              target="_blank"
              rel="noopener noreferrer"
              class="repo-link"
            >
              View benchmark artifacts ->
            </a>
          </div>

          <div class="benchmark-table-wrap">
            <table class="benchmark-table">
              <thead>
                <tr>
                  <th>Mode</th>
                  <th>Pass@1</th>
                  <th>Tokens spent/pass</th>
                  <th>Relative cost-to-pass</th>
                  <th>Noise ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in benchmarkRows" :key="row.mode" :class="{ 'highlight-row': row.mode === 'GOG' }">
                  <td>{{ row.mode }}</td>
                  <td>{{ row.pass }}</td>
                  <td>
                    <div class="metric-cell">
                      <span>{{ row.tokens }}</span>
                      <span class="bar-track">
                        <span class="bar-fill" :style="{ width: row.tokenWidth }"></span>
                      </span>
                    </div>
                  </td>
                  <td>{{ row.cost }}</td>
                  <td>
                    <div class="metric-cell">
                      <span>{{ row.noise }}</span>
                      <span class="bar-track noise-track">
                        <span class="bar-fill noise-fill" :style="{ width: row.noiseWidth }"></span>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="benchmark-note mt-4 mb-0">
            In repeated early trials, small-budget RAG could sometimes compete. But as
            RAG crossed into high-noise context, cost exploded and reliability became
            unstable. GOG remained competitive with a controlled graph-routed context bundle.
          </p>
        </div>
      </section>

      <section class="gog-section failure-section">
        <div class="container">
          <div class="row g-4 align-items-start">
            <div class="col-lg-5">
              <div class="section-label font-mono">Failure Taxonomy</div>
              <h2 class="h2 fw-bold mb-4">Not all failures are equal.</h2>
              <p>
                The benchmark now separates recoverable renderer/format failures from
                deeper semantic/context failures.
              </p>
              <p>
                In the latest repeated-trial artifact, GOG's observed miss was
                <code>invalid_json</code>: recoverable, low architectural concern. RAG's
                hard-task misses were mostly <code>missing_semantic_behavior</code>:
                unrecoverable, high architectural concern.
              </p>
              <p class="mb-0">
                This distinction matters because a JSON-format miss can often be fixed
                with validation and retry. A missing semantic behavior usually means the
                model did not receive, preserve, or correctly use the structure needed to
                solve the task.
              </p>
            </div>
            <div class="col-lg-7">
              <div class="compact-table-wrap">
                <table class="compact-table">
                  <thead>
                    <tr>
                      <th>Mode</th>
                      <th>Failure class</th>
                      <th>Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GOG</td>
                      <td>invalid_json x1</td>
                      <td>Recoverable renderer-format noise</td>
                    </tr>
                    <tr>
                      <td>RAG 1000</td>
                      <td>missing_semantic_behavior x1</td>
                      <td>Unrecoverable semantic/context miss</td>
                    </tr>
                    <tr>
                      <td>RAG 16000</td>
                      <td>missing_semantic_behavior x2, invalid_json x1</td>
                      <td>High-noise context instability</td>
                    </tr>
                    <tr>
                      <td>RAG 64000</td>
                      <td>missing_semantic_behavior x1</td>
                      <td>More context did not guarantee structural correctness</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gog-section roadmap-section">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-6">
              <div class="section-card h-100">
                <div class="section-label font-mono">Architecture Roadmap</div>
                <h2 class="h2 fw-bold mb-4">GOG today. SRM tomorrow.</h2>
                <p>
                  Today, frontier LLMs act as both the reasoner and the language renderer.
                  GOG is the substrate that gives them better-shaped context.
                </p>
                <p>The longer-term research direction is a new architecture:</p>
                <div class="roadmap-list">
                  <div><strong>GOG</strong> = graph substrate / navigation / context membrane</div>
                  <div><strong>SRM</strong> = symbolic reasoning and mutation planning</div>
                  <div><strong>SLM</strong> = language/code renderer</div>
                </div>
                <p class="mb-0">
                  The practical near-term goal is to make existing coding assistants cheaper
                  and more reliable. The long-term research goal is to separate reasoning
                  from language more explicitly.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="section-card h-100 current-question-card">
                <div class="section-label font-mono">Current Research Focus</div>
                <h2 class="h2 fw-bold mb-4">The real question is failure.</h2>
                <p>The most important question now is not simply "does GOG work?"</p>
                <p>It is:</p>
                <blockquote>"When does GOG fail?"</blockquote>
                <p class="mb-0">
                  That is the current research focus: finding the boundaries of
                  graph-routed context, measuring failure modes honestly, and understanding
                  where flat retrieval still wins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gog-section links-section">
        <div class="container">
          <div class="links-card">
            <div>
              <div class="section-label font-mono">Links</div>
              <h2 class="h3 fw-bold mb-0">Follow the work</h2>
            </div>
            <div class="gog-links">
              <a
                href="https://github.com/dchisholm125/graph-oriented-generation"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <NuxtLink to="/">Homepage</NuxtLink>
              <a href="mailto:dchisholm125@gmail.com">Contact</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const benchmarkRows = [
  {
    mode: 'GOG',
    pass: '8/9',
    tokens: '9,676',
    cost: '1.00x',
    noise: '0.523',
    tokenWidth: '12%',
    noiseWidth: '55%',
  },
  {
    mode: 'RAG 1000',
    pass: '8/9',
    tokens: '7,158',
    cost: '0.74x',
    noise: '0.306',
    tokenWidth: '9%',
    noiseWidth: '32%',
  },
  {
    mode: 'RAG 4000',
    pass: '9/9',
    tokens: '12,764',
    cost: '1.32x',
    noise: '0.556',
    tokenWidth: '15%',
    noiseWidth: '58%',
  },
  {
    mode: 'RAG 16000',
    pass: '6/9',
    tokens: '66,216',
    cost: '6.84x',
    noise: '0.902',
    tokenWidth: '79%',
    noiseWidth: '95%',
  },
  {
    mode: 'RAG 64000',
    pass: '8/9',
    tokens: '83,805',
    cost: '8.66x',
    noise: '0.951',
    tokenWidth: '100%',
    noiseWidth: '100%',
  },
]
</script>

<style scoped>
.gog-page {
  color: #1a1a1a;
  background: #f6f7f8;
}

.gog-hero {
  color: #ffffff;
  padding: 6.5rem 0 5.5rem;
  background:
    linear-gradient(135deg, rgba(13, 13, 13, 0.96), rgba(26, 28, 31, 0.96)),
    radial-gradient(circle at 82% 12%, rgba(110, 137, 255, 0.2), transparent 28%),
    #0d0d0d;
  border-bottom: 1px solid #242424;
}

.gog-kicker,
.section-label {
  color: #6c757d;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.gog-hero-copy {
  max-width: 760px;
  color: #f2f2f2;
  font-size: 1.55rem;
  line-height: 1.35;
}

.gog-hero-subtitle {
  max-width: 780px;
  color: #9a9a9a;
  font-size: 1.12rem;
  line-height: 1.8;
}

.gog-tagline {
  color: #d7d7d7;
  font-size: 1rem;
  font-weight: 700;
}

.gog-hero-panel,
.section-card,
.comparison-card,
.links-card {
  border: 1px solid #e0e3e7;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 20px 45px rgba(22, 28, 36, 0.07);
}

.gog-hero-panel {
  color: #c9c9c9;
  background: #161616;
  border-color: #2b2b2b;
  padding: 1.5rem;
}

.graph-stage {
  position: relative;
  height: 210px;
  margin-bottom: 1.25rem;
  border-radius: 8px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 32px 32px;
}

.graph-node,
.graph-edge {
  position: absolute;
  display: block;
}

.graph-node {
  z-index: 2;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #f8f9fa;
  box-shadow: 0 0 22px rgba(255, 255, 255, 0.38);
}

.node-a { left: 17%; top: 24%; }
.node-b { left: 54%; top: 15%; }
.node-c { left: 37%; top: 49%; }
.node-d { left: 74%; top: 54%; }
.node-e { left: 23%; top: 75%; }

.graph-edge {
  z-index: 1;
  height: 1px;
  background: #626a75;
  transform-origin: left center;
}

.edge-ab { left: 21%; top: 28%; width: 34%; transform: rotate(-13deg); }
.edge-ac { left: 21%; top: 30%; width: 25%; transform: rotate(38deg); }
.edge-bd { left: 58%; top: 20%; width: 32%; transform: rotate(48deg); }
.edge-ce { left: 27%; top: 69%; width: 20%; transform: rotate(-33deg); }

.gog-panel-label {
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.gog-section {
  padding: 5rem 0;
}

.section-card {
  padding: 2rem;
}

.section-card p,
.failure-section p,
.benchmark-note {
  color: #59616b;
  font-size: 1.04rem;
  line-height: 1.85;
}

.comparison-card {
  padding: 2rem;
}

.comparison-card-strong {
  border-color: #bfc7d2;
}

.comparison-heading {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.comparison-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
}

.rag-dot {
  background: #adb5bd;
}

.gog-dot {
  background: #212529;
}

.comparison-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #59616b;
  line-height: 2;
}

.comparison-footer {
  color: #212529;
  font-weight: 700;
  text-align: center;
}

.benchmark-section {
  background: #ffffff;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
}

.repo-link {
  color: #212529;
  font-weight: 700;
  text-decoration: none;
}

.repo-link:hover,
.gog-links a:hover {
  color: #495057;
}

.benchmark-table-wrap,
.compact-table-wrap {
  overflow-x: auto;
  border: 1px solid #e0e3e7;
  border-radius: 8px;
  background: #ffffff;
}

.benchmark-table,
.compact-table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
}

.benchmark-table th,
.benchmark-table td,
.compact-table th,
.compact-table td {
  padding: 1rem;
  border-bottom: 1px solid #edf0f2;
  vertical-align: middle;
}

.benchmark-table th,
.compact-table th {
  color: #6c757d;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.benchmark-table td:first-child,
.compact-table td:first-child {
  font-weight: 700;
}

.benchmark-table tr:last-child td,
.compact-table tr:last-child td {
  border-bottom: 0;
}

.highlight-row {
  background: #f8f9fa;
}

.metric-cell {
  display: grid;
  grid-template-columns: 5.5rem minmax(110px, 1fr);
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.92rem;
}

.bar-track {
  height: 7px;
  border-radius: 999px;
  background: #edf0f2;
  overflow: hidden;
}

.bar-fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: #212529;
}

.noise-fill {
  background: #6c757d;
}

.failure-section {
  background: #f6f7f8;
}

code {
  color: #212529;
  background: #edf0f2;
  border-radius: 4px;
  padding: 0.12rem 0.28rem;
}

.roadmap-section {
  background: #ffffff;
}

.roadmap-list {
  display: grid;
  gap: 0.75rem;
  margin: 1.25rem 0;
  color: #343a40;
}

.roadmap-list div {
  padding: 0.85rem 1rem;
  border: 1px solid #edf0f2;
  border-radius: 8px;
  background: #f8f9fa;
}

.current-question-card blockquote {
  margin: 1.5rem 0;
  padding-left: 1rem;
  border-left: 3px solid #212529;
  color: #212529;
  font-size: 1.45rem;
  font-weight: 700;
}

.links-section {
  padding-top: 0;
}

.links-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2rem;
}

.gog-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.gog-links a {
  color: #212529;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 767.98px) {
  .gog-hero {
    padding: 4.5rem 0 3.5rem;
  }

  .gog-hero-copy {
    font-size: 1.25rem;
  }

  .gog-section {
    padding: 3rem 0;
  }

  .section-card,
  .comparison-card,
  .links-card {
    padding: 1.35rem;
  }

  .links-card {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
