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
                Case Study Metrics
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
      <section class="gog-section case-study-section">
        <div class="container">
          <div class="case-study-card">
            <div class="row g-4 align-items-start">
              <div class="col-lg-5">
                <div class="section-label font-mono">Private Case Study / May 15, 2026</div>
                <h2 class="h2 fw-bold mb-4">Orca Whirlpools: cleaner context at full recall.</h2>
                <p>
                  A paired benchmark tested GOG Membrane against vector, keyword, and
                  hybrid RAG on the same pinned Orca Whirlpools commit, using the same
                  task prompt, model, output schema, patch applier, validation command,
                  attempts, and clean worktree setup.
                </p>
                <p>
                  The task was intentionally concrete: add unit coverage proving
                  <code>WhirlpoolDeployment::default()</code> matches
                  <code>WhirlpoolDeployment::mainnet()</code> for both program id and
                  config account, without changing the public API.
                </p>
                <p class="mb-0">
                  The finding is not that RAG cannot solve this task. Strong keyword and
                  hybrid baselines solved it once they surfaced the target file. The
                  finding is that GOG reached full recall with cleaner package-scoped
                  context, fewer files, lower noise, and fewer total tokens than the
                  full-recall hybrid baseline.
                </p>
              </div>
              <div class="col-lg-7">
                <div class="case-metric-grid">
                  <div class="case-metric primary">
                    <span class="case-metric-label">GOG tokens</span>
                    <strong>4,965</strong>
                    <span>16.5% fewer than Hybrid RAG 4000</span>
                  </div>
                  <div class="case-metric">
                    <span class="case-metric-label">Context recall</span>
                    <strong>1.0</strong>
                    <span>Full recall, same as fair hybrid</span>
                  </div>
                  <div class="case-metric">
                    <span class="case-metric-label">Retrieved files</span>
                    <strong>6</strong>
                    <span>vs 14 for Hybrid RAG 4000</span>
                  </div>
                  <div class="case-metric">
                    <span class="case-metric-label">Noise ratio</span>
                    <strong>0.333</strong>
                    <span>vs 0.714 for Hybrid RAG 4000</span>
                  </div>
                </div>

                <div class="case-callout mt-4">
                  <div class="section-label font-mono">Strongest Claim</div>
                  <p class="mb-0">
                    GOG does not merely make the prompt smaller. It can preserve full
                    task recall while reducing package noise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gog-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="section-card reference-card mb-4">
                <div class="section-label font-mono">Public Reference Implementation</div>
                <h2 class="h2 fw-bold mb-4">GOG-Lite makes the thesis inspectable.</h2>
                <p>
                  The public Graph-Oriented Generation repository now contains the GOG
                  reference implementation, GOG-Lite, benchmark harnesses, gold-context
                  scoring, failure taxonomy, curated results, and methodology docs.
                </p>
                <p>
                  GOG-Lite is designed to make the core thesis inspectable and
                  reproducible: codebases are structured symbolic systems, and coding
                  agents can benefit from graph-routed context instead of flat retrieved
                  text.
                </p>
                <p class="mb-0">
                  The production-grade GOG engine is developed separately. That private
                  implementation includes advanced context membranes, scalable onboarding,
                  graph fusion, commercial integrations, and enterprise-ready workflows.
                </p>
              </div>

              <div class="section-card">
                <div class="section-label font-mono">Core Thesis</div>
                <h2 class="h2 fw-bold mb-4">The problem is context quality, not just context size.</h2>
                <p>
                  Coding assistants often rely on Retrieval-Augmented Generation (RAG):
                  vectorize the repo, retrieve chunks, and ask the model to infer the
                  architecture from a pile of text.
                </p>
                <p>
                  GOG starts from a different assumption: a codebase is already a
                  structured symbolic system. Files, imports, functions, classes, tests,
                  dependencies, and runtime behavior form a graph. GOG uses that graph to
                  build a smaller, more relevant context bundle before the model ever
                  starts reasoning.
                </p>
                <p class="mb-0">
                  The Orca result sharpens the thesis: the goal is not to claim that flat
                  retrieval never works. The goal is to make the model carry less unrelated
                  structure when it already has enough information to solve the task.
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
                  <li>Keyword and hybrid retrieval can solve lexically obvious tasks</li>
                  <li>Full recall can arrive with unrelated package and manifest noise</li>
                  <li>More budget can increase noise without improving semantics</li>
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
                  <li>Codebase graph and package boundary first</li>
                  <li>Target file plus nearby package metadata</li>
                  <li>Full task recall with fewer unrelated files</li>
                  <li>Lower token spend at comparable recall</li>
                </ul>
              </div>
            </div>
          </div>
          <p class="comparison-footer mt-4 mb-0">
            The fair comparison is not "GOG passed and RAG failed." It is "GOG passed with cleaner context."
          </p>
        </div>
      </section>

      <section id="benchmarks" class="gog-section benchmark-section">
        <div class="container">
          <div class="section-label font-mono">Case Study Metrics</div>
          <div class="d-flex align-items-end justify-content-between gap-3 flex-wrap mb-4">
            <h2 class="h2 fw-bold mb-0">Best direct comparison</h2>
            <a
              href="https://github.com/dchisholm125/graph-oriented-generation"
              target="_blank"
              rel="noopener noreferrer"
              class="repo-link"
            >
              View public repo ->
            </a>
          </div>

          <div class="benchmark-table-wrap">
            <table class="benchmark-table">
              <thead>
                <tr>
                  <th>Mode</th>
                  <th>Pass</th>
                  <th>Total tokens</th>
                  <th>Context precision</th>
                  <th>Context recall</th>
                  <th>Noise ratio</th>
                  <th>Retrieved files</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in benchmarkRows" :key="row.mode" :class="{ 'highlight-row': row.mode === 'GOG Membrane' }">
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
                  <td>{{ row.precision }}</td>
                  <td>{{ row.recall }}</td>
                  <td>
                    <div class="metric-cell">
                      <span>{{ row.noise }}</span>
                      <span class="bar-track noise-track">
                        <span class="bar-fill noise-fill" :style="{ width: row.noiseWidth }"></span>
                      </span>
                    </div>
                  </td>
                  <td>{{ row.files }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="benchmark-note mt-4 mb-0">
            Both modes passed. Both reached full context recall. Both edited only
            <code>rust-sdk/client/src/config.rs</code>. GOG Membrane used 4,965 tokens
            against Hybrid RAG 4000's 5,946 tokens, retrieved 6 files instead of 14,
            and reduced the measured noise ratio from 0.7143 to 0.3333.
          </p>

          <div class="fixture-result mt-4">
            <div class="section-label font-mono">Validation</div>
            <p class="mb-0">
              The GOG patch added a localized <code>#[cfg(test)]</code> module using
              existing public methods: <code>WhirlpoolDeployment::default()</code>,
              <code>WhirlpoolDeployment::mainnet()</code>, <code>.id()</code>, and
              <code>.config_address()</code>. The Rust client library validation passed:
              <code>24 passed; 0 failed</code>.
            </p>
          </div>

          <p class="benchmark-note mt-4 mb-0">
            The public repository remains the inspectable GOG-Lite reference. This Orca
            artifact came from the private GOG engine and should be read as a private case
            study, not as a universal benchmark claim.
          </p>
        </div>
      </section>

      <section class="gog-section context-section">
        <div class="container">
          <div class="row g-4 align-items-start">
            <div class="col-lg-5">
              <div class="section-label font-mono">Retrieved Context</div>
              <h2 class="h2 fw-bold mb-4">Package boundary mattered.</h2>
              <p>
                GOG selected the Rust client package boundary and included the target
                config module plus nearby package metadata. Hybrid RAG found the target
                file and the gold context too, but it carried substantially more unrelated
                manifests and neighboring Rust files.
              </p>
              <p class="mb-0">
                That difference is the point of the case study: once recall is sufficient,
                the next question is how much irrelevant structure the model must ignore.
              </p>
            </div>
            <div class="col-lg-7">
              <div class="context-columns">
                <div class="context-list">
                  <div class="section-label font-mono">GOG Membrane / 6 files</div>
                  <ul>
                    <li>rust-sdk/client/Cargo.toml</li>
                    <li>rust-sdk/client/package.json</li>
                    <li>rust-sdk/client/src/config.rs</li>
                    <li>rust-sdk/client/src/core_types/tick_array.rs</li>
                    <li>rust-sdk/client/src/gpa/utils.rs</li>
                    <li>rust-sdk/client/src/lib.rs</li>
                  </ul>
                </div>
                <div class="context-list muted-list">
                  <div class="section-label font-mono">Hybrid RAG 4000 / 14 files</div>
                  <ul>
                    <li>rust-sdk/client/src/config.rs</li>
                    <li>rust-sdk/whirlpool/package.json</li>
                    <li>rust-sdk/client/Cargo.toml</li>
                    <li>docs/rust/package.json</li>
                    <li>rust-sdk/macros/package.json</li>
                    <li>rust-sdk/client/src/pda/whirlpools_config_extension.rs</li>
                    <li>docs/rust/Cargo.toml</li>
                    <li>...plus additional package files</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gog-section failure-section">
        <div class="container">
          <div class="row g-4 align-items-start">
            <div class="col-lg-5">
              <div class="section-label font-mono">Failure And Fairness</div>
              <h2 class="h2 fw-bold mb-4">The result is narrower, and stronger.</h2>
              <p>
                Vector-only RAG failed across every tested budget. Keyword and hybrid RAG
                passed when retrieval surfaced the target file. That makes the result more
                useful, not less: it compares context quality after the easy objection has
                been removed.
              </p>
              <p>
                Higher vector budgets retrieved more files and more noise, but still
                produced validation failures or semantic misses. The practical warning is
                that more context can make the model less grounded if the context provider
                does not preserve the right structure.
              </p>
            </div>
            <div class="col-lg-7">
              <div class="compact-table-wrap">
                <table class="compact-table">
                  <thead>
                    <tr>
                      <th>Mode</th>
                      <th>Observed outcome</th>
                      <th>Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GOG Membrane</td>
                      <td>Passed with full recall</td>
                      <td>Cleaner package-scoped context</td>
                    </tr>
                    <tr>
                      <td>Keyword RAG</td>
                      <td>Passed when target file surfaced</td>
                      <td>Strong lexical baseline for this task</td>
                    </tr>
                    <tr>
                      <td>Hybrid RAG</td>
                      <td>Passed at full recall</td>
                      <td>More files, more noise, more tokens than GOG</td>
                    </tr>
                    <tr>
                      <td>Vector RAG</td>
                      <td>Failed across all budgets</td>
                      <td>More budget increased noise without fixing semantics</td>
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
                  <div><strong>GOG today</strong>: graph-routed context for existing coding assistants.</div>
                  <div><strong>GOG Professional</strong>: production-grade context infrastructure and integrations.</div>
                  <div><strong>SRM Lab</strong>: long-term research into symbolic reasoning and mutation planning.</div>
                  <div><strong>Long-term architecture</strong>: GOG + SRM + SLM.</div>
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
    mode: 'GOG Membrane',
    pass: 'yes',
    tokens: '4,965',
    precision: '0.6667',
    recall: '1.0',
    noise: '0.3333',
    files: '6',
    tokenWidth: '83%',
    noiseWidth: '47%',
  },
  {
    mode: 'Hybrid RAG 4000',
    pass: 'yes',
    tokens: '5,946',
    precision: '0.2857',
    recall: '1.0',
    noise: '0.7143',
    files: '14',
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
.case-study-card,
.case-callout,
.context-list,
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

.case-study-section {
  background: #111315;
  border-bottom: 1px solid #24272b;
}

.case-study-card {
  padding: 2.25rem;
  color: #d9dde2;
  background:
    linear-gradient(135deg, rgba(25, 28, 32, 0.96), rgba(10, 11, 12, 0.96)),
    #111315;
  border-color: #30343a;
}

.case-study-card .section-label {
  color: #9ca3ad;
}

.case-study-card h2,
.case-callout p {
  color: #ffffff;
}

.case-study-card p {
  color: #aeb6c0;
  font-size: 1.04rem;
  line-height: 1.85;
}

.case-study-card code {
  color: #f8f9fa;
  background: #272b30;
}

.case-metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
}

.case-metric {
  min-height: 136px;
  padding: 1.25rem;
  border: 1px solid #343a40;
  border-radius: 8px;
  background: #191c20;
}

.case-metric.primary {
  border-color: #eef1f5;
  background: #f8f9fa;
}

.case-metric-label {
  display: block;
  margin-bottom: 0.7rem;
  color: #8a929c;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.case-metric strong {
  display: block;
  color: #ffffff;
  font-size: 2.35rem;
  line-height: 1;
}

.case-metric span:last-child {
  display: block;
  margin-top: 0.85rem;
  color: #9ca3ad;
  font-size: 0.92rem;
  line-height: 1.45;
}

.case-metric.primary .case-metric-label,
.case-metric.primary span:last-child {
  color: #59616b;
}

.case-metric.primary strong {
  color: #111315;
}

.case-callout {
  padding: 1.35rem 1.5rem;
  background: #202429;
  border-color: #343a40;
  box-shadow: none;
}

.section-card {
  padding: 2rem;
}

.reference-card {
  border-color: #c8ced6;
}

.section-card p,
.failure-section p,
.benchmark-note,
.fixture-result p,
.context-section p {
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

.fixture-result {
  padding: 1.35rem 1.5rem;
  border: 1px solid #d7dce2;
  border-radius: 8px;
  background: #f8f9fa;
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

.context-section {
  background: #ffffff;
  border-bottom: 1px solid #e9ecef;
}

.context-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.context-list {
  min-height: 100%;
  padding: 1.4rem;
  box-shadow: none;
}

.context-list ul {
  display: grid;
  gap: 0.65rem;
  margin: 1rem 0 0;
  padding-left: 1.1rem;
  color: #343a40;
  font-size: 0.93rem;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.muted-list {
  background: #f8f9fa;
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
  .case-study-card,
  .links-card {
    padding: 1.35rem;
  }

  .case-metric-grid,
  .context-columns {
    grid-template-columns: 1fr;
  }

  .links-card {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
