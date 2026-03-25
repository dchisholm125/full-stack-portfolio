<script setup lang="ts">
// No custom logic for now, but ready for Composition API
</script>

<template>
  <div class="portfolio-site">
    <!-- Hero: Clean, bold, confident -->
    <header class="hero-section">
      <div class="container">
        <div class="row min-vh-75 align-items-center">
          <div class="col-lg-8">
            <div class="mb-2">
              <span class="badge bg-dark text-light px-3 py-2 font-mono">Independent Researcher</span>
            </div>
            <h1 class="display-2 fw-bold mb-4 hero-name">Derek Chisholm</h1>
            <h2 class="h3 text-secondary mb-4 fw-light">AI Researcher & Software Engineer</h2>
            <p class="lead fs-4 mb-4 text-dark fw-medium">
              I build things that think — and then I watch what they actually do.
            </p>
            <p class="fs-5 mb-5 text-muted max-width-600">
              Running a home lab on emergent cognition: pure Python weighted graph 
              organisms that learn through Hebbian co-occurrence. No LLMs, no 
              transformers, no pre-trained weights. Just graphs, statistics, 
              and the occasional accidental aphasia.
            </p>
            <div class="d-flex gap-3 flex-wrap">
              <NuxtLink to="/research" class="btn btn-dark btn-lg px-4">
                <span class="me-2">🔬</span>Read the research
              </NuxtLink>
              <NuxtLink to="/projects" class="btn btn-outline-dark btn-lg px-4">
                <span class="me-2">⚙️</span>See the projects
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Research Snapshots -->
    <section class="research-snapshots py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Graph Organism Lab -->
          <div class="col-md-4">
            <NuxtLink to="/blog" class="text-decoration-none">
              <div class="card h-100 border-0 shadow-sm p-4 bg-white card-hover">
                <div class="card-body">
                  <div class="mb-3">
                    <span class="badge bg-danger">Live Experiment</span>
                  </div>
                  <h3 class="h5 fw-bold mb-3">Graph Organism Lab</h3>
                  <p class="card-text text-muted mb-4">
                    Seven specialized brain regions — hippocampus, amygdala, 
                    prefrontal cortex, and four more — competing through a 
                    critic-mediated selection process. What started as a single 
                    node developed opinions. Some of them are unsettling.
                  </p>
                  <span class="text-dark fw-bold text-decoration-none link-arrow">→ Read the findings</span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- SRM / GOG -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm p-4 bg-white card-hover">
              <div class="card-body">
                <div class="mb-3">
                  <span class="badge bg-secondary">Paper</span>
                </div>
                <h3 class="h5 fw-bold mb-3">Semantic Reasoning Membrane</h3>
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
                  <h3 class="h5 fw-bold mb-3">Lab Notes</h3>
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
.min-vh-75 {
  min-height: 75vh;
}

.hero-name {
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  color: #6c757d !important;
}
</style>
