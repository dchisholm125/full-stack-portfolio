<script setup lang="ts">
// No custom logic needed
</script>

<template>
  <div class="projects-page">
    <div class="container py-5">
      <h1 class="display-4 fw-bold mb-5">Projects</h1>
      
      <div class="row g-4">
        <!-- Harvester - Read Only -->
        <div class="col-md-6">
          <div class="card h-100 p-4 border-0 shadow-sm bg-light">
            <div class="d-flex align-items-center mb-3">
              <h3 class="h4 fw-bold mb-0">Harvester</h3>
              <span class="badge bg-secondary ms-2 font-mono">Private</span>
            </div>
            <p class="text-muted mb-4">
              A production-grade Meteora DLMM market-making bot on Solana with 
              aggressive quantitative strategies. Deployed and operational.
            </p>
            <div class="text-muted small">
              <span class="me-3">⚠️ Repository is private</span>
            </div>
          </div>
        </div>

        <!-- GOG - Links to GitHub -->
        <div class="col-md-6">
          <a 
            href="https://github.com/dchisholm125/graph-oriented-generation" 
            target="_blank"
            class="text-decoration-none d-block h-100"
          >
            <div class="card h-100 p-4 border-0 shadow-sm bg-dark text-white card-hover">
              <div class="d-flex align-items-center mb-3">
                <h3 class="h4 fw-bold mb-0 text-white">GOG</h3>
                <span class="badge bg-light text-dark ms-2 font-mono">Open Source</span>
              </div>
              <p class="text-light mb-4">
                Graph Organism Generator — the core engine for the Digital Organism 
                experiments. Pure Python, Hebbian learning, weighted graphs.
              </p>
              <div class="text-light fw-bold">
                View on GitHub →
              </div>
            </div>
          </a>
        </div>

        <!-- Talk2Code - Public Repo -->
        <div class="col-md-6">
          <a 
            href="https://github.com/dchisholm125/Talk2Code" 
            target="_blank"
            class="text-decoration-none d-block h-100"
          >
            <div class="card h-100 p-4 border-0 shadow-sm bg-dark text-white card-hover">
              <div class="d-flex align-items-center mb-3">
                <h3 class="h4 fw-bold mb-0 text-white">Talk2Code</h3>
                <span class="badge bg-light text-dark ms-2 font-mono">Open Source</span>
              </div>
              <p class="text-light mb-4">
                Neuro-symbolic bridge between Telegram and your local dev environment. 
                Leveraging the SRM (Symbolic Reasoning Model) to decouple planning 
                from syntax generation for autonomous, hallucination-free coding.
              </p>
              <div class="text-light fw-bold">
                View on GitHub →
              </div>
            </div>
          </a>
        </div>

        <!-- Vox - Private -->
        <div class="col-md-6">
          <div class="card h-100 p-4 border-0 shadow-sm bg-light">
            <div class="d-flex align-items-center mb-3">
              <h3 class="h4 fw-bold mb-0">Vox</h3>
              <span class="badge bg-secondary ms-2 font-mono">Private</span>
            </div>
            <p class="text-muted mb-4">
              Emergent artificial intelligence built with 100% interpretable nodes.
              Built to solve interpretability using English words and graphs.
            </p>
            <div class="text-muted small">
              <span class="me-3">🔒 Private project</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
}

.font-mono {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.7rem;
}

.text-muted {
  color: #6c757d !important;
}
</style>
