<template>
  <div class="gog-page">
    <header class="gog-hero">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-8">
            <div class="section-label hero-label">Repo Intelligence / Mutation Safety</div>
            <h1 class="display-3 fw-bold mb-4">Graph-Oriented Generation</h1>
            <p class="gog-hero-subtitle mb-4">
              Repository reasoning should not be paid for in LLM tokens.
            </p>
            <p class="gog-hero-copy mb-5">
              GOG is a repo-resident context layer for coding assistants. It onboards a
              codebase into graph/cartography artifacts, discovers structural regions of
              the repo, serves task-specific context, and exposes safe mutation surfaces
              so the coding model can focus on the smallest necessary generation step.
            </p>
            <div class="hero-actions">
              <a
                href="https://github.com/dchisholm125/graph-oriented-generation"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-light btn-lg px-4"
              >
                View GOG Lite repo
              </a>
              <a href="mailto:dchisholm125@gmail.com?subject=GOG%20technical%20walkthrough" class="btn btn-outline-light btn-lg px-4">
                Technical walkthrough
              </a>
              <a href="#benchmarks" class="btn btn-outline-light btn-lg px-4">
                Orca benchmark
              </a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="boundary-card">
              <div class="boundary-title">Product boundary</div>
              <p>
                GOG is not trying to replace coding assistants. It is a repo-intelligence
                and mutation-safety layer for them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="gog-section pipeline-section">
        <div class="container">
          <div class="pipeline-card">
            <div class="pipeline">
              <div class="pipeline-step">
                <span>01</span>
                <strong>Repo Cartography</strong>
              </div>
              <div class="pipeline-arrow" aria-hidden="true">-></div>
              <div class="pipeline-step">
                <span>02</span>
                <strong>Stratum-Aware Context</strong>
              </div>
              <div class="pipeline-arrow" aria-hidden="true">-></div>
              <div class="pipeline-step">
                <span>03</span>
                <strong>Surgical Mutation Contract</strong>
              </div>
            </div>
            <p class="pipeline-note">
              The coding assistant still writes code. GOG removes repo-discovery work
              before the prompt and verifies mutation surfaces after the model responds.
            </p>
          </div>
        </div>
      </section>

      <section class="gog-section">
        <div class="container">
          <div class="section-heading">
            <div class="section-label">Public vs Professional</div>
            <h2>Two surfaces, one thesis.</h2>
          </div>
          <div class="surface-grid">
            <article class="surface-card">
              <div class="surface-kicker">Public</div>
              <h3>GOG Lite</h3>
              <ul>
                <li>Public reference implementation</li>
                <li>Demonstrates the core graph-routed context thesis</li>
                <li>Useful for transparency, research, and reproducibility</li>
              </ul>
            </article>
            <article class="surface-card surface-card-strong">
              <div class="surface-kicker">Private</div>
              <h3>GOG Professional</h3>
              <ul>
                <li>Private production research engine</li>
                <li>Repo strata discovery</li>
                <li>Compact surgical context</li>
                <li>Structural anchors</li>
                <li>Verified symbol capabilities</li>
                <li>Safe mutation contracts</li>
                <li>Assistant integration path</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="benchmarks" class="gog-section benchmark-section">
        <div class="container">
          <div class="benchmark-header">
            <div>
              <div class="section-label">Benchmark Evidence</div>
              <h2>Real-world benchmark: Orca Whirlpools Rust SDK</h2>
            </div>
            <a
              href="https://github.com/dchisholm125/graph-oriented-generation"
              target="_blank"
              rel="noopener noreferrer"
              class="repo-link"
            >
              Public methodology repo
            </a>
          </div>

          <div class="benchmark-claim">
            On this real-world SDK task, GOG Professional selected cleaner context, stayed
            in the correct repo stratum, and reached a validated patch with fewer context
            tokens than RAG baselines.
          </div>

          <div class="benchmark-table-wrap">
            <table class="benchmark-table">
              <thead>
                <tr>
                  <th>Mode</th>
                  <th>Pass?</th>
                  <th>Prompt tokens</th>
                  <th>Precision</th>
                  <th>Recall</th>
                  <th>Noise</th>
                  <th>Dominant package</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in benchmarkRows" :key="row.mode" :class="{ 'highlight-row': row.mode === 'GOG Professional' }">
                  <td>{{ row.mode }}</td>
                  <td>{{ row.pass }}</td>
                  <td>{{ row.tokens }}</td>
                  <td>{{ row.precision }}</td>
                  <td>{{ row.recall }}</td>
                  <td>{{ row.noise }}</td>
                  <td><code>{{ row.package }}</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="evidence-grid">
            <div class="evidence-card">
              <div class="evidence-label">Task</div>
              <p>Add a <code>contains_tick_index</code> helper and tests to the real Orca Whirlpools Rust SDK.</p>
            </div>
            <div class="evidence-card">
              <div class="evidence-label">Validation</div>
              <p><code>cargo test</code> passed with 38 tests.</p>
            </div>
            <div class="evidence-card evidence-card-wide">
              <div class="evidence-label">Interpretation</div>
              <p>
                GOG selected the correct repo stratum, kept context focused, and used
                compact surgical operations with verified symbol capabilities. RAG could
                pass at high budgets, but with substantially more noise and wrong-stratum drift.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="gog-section why-section">
        <div class="container">
          <div class="section-heading">
            <div class="section-label">Why It Matters</div>
            <h2>Cleaner repository work before generation.</h2>
          </div>
          <div class="why-grid">
            <div v-for="item in whyItems" :key="item" class="why-item">{{ item }}</div>
          </div>
        </div>
      </section>

      <section class="gog-section status-section">
        <div class="container">
          <div class="status-card">
            <div>
              <div class="section-label">Current Status</div>
              <h2>Public reference, private production engine.</h2>
            </div>
            <p>
              GOG Lite is public. GOG Professional is private and actively being
              benchmarked against RAG and coding-assistant workflows. I am looking for
              technical reviewers, collaborators, and pilot integrations.
            </p>
          </div>
        </div>
      </section>

      <section class="gog-section cta-section">
        <div class="container">
          <div class="cta-card">
            <div>
              <div class="section-label">Collaborate</div>
              <h2>Technical walkthroughs, pilot integrations, and collaborators.</h2>
            </div>
            <div class="cta-links">
              <a
                href="https://github.com/dchisholm125/graph-oriented-generation"
                target="_blank"
                rel="noopener noreferrer"
              >
                View public GOG Lite repo
              </a>
              <a href="mailto:dchisholm125@gmail.com?subject=GOG%20technical%20walkthrough">
                Contact me / technical walkthrough
              </a>
              <a href="#benchmarks">Read benchmark summary</a>
              <NuxtLink to="/">Portfolio home</NuxtLink>
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
    mode: 'GOG Professional',
    pass: '✅',
    tokens: '2,406',
    precision: '0.833',
    recall: '1.0',
    noise: '0.167',
    package: 'rust-sdk/core',
  },
  {
    mode: 'RAG 1k',
    pass: '❌',
    tokens: '578',
    precision: '0.0',
    recall: '0.0',
    noise: '1.0',
    package: 'programs/whirlpool',
  },
  {
    mode: 'RAG 4k',
    pass: '❌',
    tokens: '578',
    precision: '0.0',
    recall: '0.0',
    noise: '1.0',
    package: 'programs/whirlpool',
  },
  {
    mode: 'RAG 16k',
    pass: '✅',
    tokens: '2,494',
    precision: '0.143',
    recall: '0.2',
    noise: '0.857',
    package: 'programs/whirlpool',
  },
  {
    mode: 'RAG 64k',
    pass: '✅',
    tokens: '4,831',
    precision: '0.2',
    recall: '0.6',
    noise: '0.8',
    package: 'programs/whirlpool',
  },
]

const whyItems = [
  'Lower context waste',
  'Better repo grounding',
  'Fewer hallucinated edit surfaces',
  'Safer mutation contracts',
  'Lower cost per validated patch',
  'Designed to integrate with existing coding assistants',
]
</script>

<style scoped>
.gog-page {
  color: #17191c;
  background: #f5f6f8;
}

.gog-hero {
  color: #ffffff;
  padding: 7rem 0 5.5rem;
  background:
    linear-gradient(135deg, rgba(12, 14, 17, 0.98), rgba(30, 34, 39, 0.96)),
    radial-gradient(circle at 78% 18%, rgba(111, 152, 255, 0.2), transparent 26%),
    #0c0e11;
  border-bottom: 1px solid #252a31;
}

.section-label,
.surface-kicker,
.evidence-label,
.boundary-title {
  color: #6f7782;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.hero-label {
  color: #aeb6c2;
  margin-bottom: 1rem;
}

.gog-hero-subtitle {
  max-width: 830px;
  color: #ffffff;
  font-size: clamp(1.45rem, 3vw, 2.2rem);
  font-weight: 700;
  line-height: 1.25;
}

.gog-hero-copy {
  max-width: 850px;
  color: #c0c7d0;
  font-size: 1.08rem;
  line-height: 1.8;
}

.hero-actions,
.cta-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.boundary-card,
.pipeline-card,
.surface-card,
.evidence-card,
.status-card,
.cta-card {
  border: 1px solid #dfe4ea;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 18px 44px rgba(19, 28, 39, 0.07);
}

.boundary-card {
  color: #dce2ea;
  padding: 1.5rem;
  background: #15181d;
  border-color: #303741;
  box-shadow: none;
}

.boundary-title {
  color: #aeb6c2;
  margin-bottom: 0.8rem;
}

.boundary-card p {
  margin: 0;
  color: #dce2ea;
  font-size: 1rem;
  line-height: 1.7;
}

.gog-section {
  padding: 5rem 0;
}

.pipeline-section {
  padding: 3rem 0;
  background: #ffffff;
  border-bottom: 1px solid #e8edf2;
}

.pipeline-card {
  padding: 1.5rem;
}

.pipeline {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: stretch;
  gap: 0.9rem;
}

.pipeline-step {
  min-height: 112px;
  padding: 1.15rem;
  border: 1px solid #dfe4ea;
  border-radius: 8px;
  background: #f7f9fb;
}

.pipeline-step span {
  display: block;
  margin-bottom: 1.2rem;
  color: #7b8490;
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

.pipeline-step strong {
  display: block;
  color: #111418;
  font-size: 1.05rem;
  line-height: 1.35;
}

.pipeline-arrow {
  display: flex;
  align-items: center;
  color: #69727e;
  font-family: var(--font-mono);
  font-weight: 700;
}

.pipeline-note {
  max-width: 900px;
  margin: 1.25rem 0 0;
  color: #3d4650;
  font-size: 1.08rem;
  line-height: 1.75;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 2rem;
}

.section-heading h2,
.benchmark-header h2,
.status-card h2,
.cta-card h2 {
  margin: 0.55rem 0 0;
  color: #111418;
  font-weight: 800;
}

.surface-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.surface-card {
  padding: 2rem;
}

.surface-card-strong {
  border-color: #b7c1cd;
}

.surface-card h3 {
  margin: 0.5rem 0 1.2rem;
  font-size: 1.7rem;
  font-weight: 800;
}

.surface-card ul {
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding-left: 1.15rem;
  color: #424b56;
  line-height: 1.6;
}

.benchmark-section {
  color: #dce2ea;
  background: #101317;
  border-top: 1px solid #252a31;
  border-bottom: 1px solid #252a31;
}

.benchmark-section .section-label {
  color: #aab2be;
}

.benchmark-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.benchmark-header h2 {
  color: #ffffff;
}

.repo-link {
  color: #ffffff;
  font-weight: 800;
  text-decoration: none;
}

.repo-link:hover {
  color: #cbd3dd;
}

.benchmark-claim {
  max-width: 1000px;
  margin-bottom: 1.25rem;
  padding: 1.2rem 1.35rem;
  border: 1px solid #38404a;
  border-radius: 8px;
  color: #ffffff;
  background: #1b2026;
  font-size: 1.08rem;
  line-height: 1.75;
}

.benchmark-table-wrap {
  overflow-x: auto;
  border: 1px solid #343b45;
  border-radius: 8px;
  background: #15191e;
}

.benchmark-table {
  width: 100%;
  min-width: 880px;
  border-collapse: collapse;
}

.benchmark-table th,
.benchmark-table td {
  padding: 1rem;
  border-bottom: 1px solid #2c333c;
  vertical-align: middle;
}

.benchmark-table th {
  color: #aab2be;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-align: left;
  text-transform: uppercase;
  white-space: nowrap;
}

.benchmark-table td {
  color: #dce2ea;
}

.benchmark-table td:first-child {
  color: #ffffff;
  font-weight: 800;
}

.benchmark-table tr:last-child td {
  border-bottom: 0;
}

.highlight-row {
  background: #20262d;
}

code {
  color: inherit;
  background: rgba(127, 139, 153, 0.16);
  border-radius: 4px;
  padding: 0.12rem 0.28rem;
}

.evidence-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}

.evidence-card {
  padding: 1.25rem;
  color: #dce2ea;
  background: #161b21;
  border-color: #343b45;
  box-shadow: none;
}

.evidence-card-wide {
  grid-column: 1 / -1;
}

.evidence-label {
  color: #aab2be;
  margin-bottom: 0.7rem;
}

.evidence-card p {
  margin: 0;
  color: #c4ccd6;
  line-height: 1.75;
}

.why-section {
  background: #ffffff;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
}

.why-item {
  padding: 1rem 1.1rem;
  border: 1px solid #dfe4ea;
  border-radius: 8px;
  color: #28313b;
  background: #f7f9fb;
  font-weight: 700;
}

.status-section {
  background: #f5f6f8;
}

.status-card {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 2rem;
  padding: 2rem;
}

.status-card p {
  margin: 0;
  color: #424b56;
  font-size: 1.07rem;
  line-height: 1.8;
}

.cta-section {
  padding-top: 0;
}

.cta-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2rem;
}

.cta-links a {
  color: #111418;
  font-weight: 800;
  text-decoration: none;
}

.cta-links a:hover {
  color: #4e5966;
}

@media (max-width: 991.98px) {
  .pipeline,
  .surface-grid,
  .why-grid,
  .status-card {
    grid-template-columns: 1fr;
  }

  .pipeline-arrow {
    justify-content: center;
    transform: rotate(90deg);
  }

  .benchmark-header,
  .cta-card {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 767.98px) {
  .gog-hero {
    padding: 4.5rem 0 3.5rem;
  }

  .gog-section {
    padding: 3rem 0;
  }

  .pipeline-card,
  .surface-card,
  .status-card,
  .cta-card {
    padding: 1.35rem;
  }

  .evidence-grid {
    grid-template-columns: 1fr;
  }
}
</style>
