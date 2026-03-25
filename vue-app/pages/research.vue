<template>
  <div class="research-page">
    <div class="container py-5">
      <h1 class="display-4 fw-bold mb-5">Research</h1>
      <div class="row g-4">
        <div class="col-md-8">
          <h2 class="h3 fw-bold">Active Investigations</h2>
          <hr>
          <div class="mb-5">
            <h3 class="h4 fw-bold">Emergent Cognition in Weighted Graphs</h3>
            <p class="text-muted">Exploring whether semantic structure and worldviews can emerge from temporal co-occurrence alone, bypassing the transformer architecture entirely.</p>
            <NuxtLink to="/blog/1-what-the-graph-wanted" class="btn btn-sm btn-dark">View latest findings</NuxtLink>
          </div>
          
          <div class="mb-5">
            <h3 class="h4 fw-bold">Semantic Reasoning Membrane (SRM)</h3>
            <p class="text-muted">Probing the hidden concept layers of small language models to map universal semantic primitives.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-muted {
  color: #6c757d !important;
}
</style>
