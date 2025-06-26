<script setup lang="ts">
// No custom logic needed for static content
</script>

<template>
  <div class="container py-5">
    <h1>Derek Chisholm's Blog</h1>
    <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
          <!-- SVG icon -->
          <strong>Derek Chisholm - Full Stack Engineer</strong>
        </NuxtLink>
        <!-- ...navbar toggler and collapse omitted for brevity... -->
      </div>
    </nav>
    <div class="text-center align-items-center m-1 p-5" id="WIP">
      <h2>Work in Progress!</h2>
      <p>This page contains many placeholders and non-working links, but I will continue updating it regularly.</p>
      <p>You can review the code for this page on my <a href="https://github.com/dchisholm125/full-stack-portfolio/blob/main/philosophy-blog/index.html">Github here</a></p>
    </div>
    <main class="container">
      <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary" id="headline-img">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-8">
            <div class="col-lg-12 px-0">
              <h1 class="display-6 fst-italic px-5" id="headline">"Obstacles and limitations — if responded to properly — create opportunities for beauty and excellence."</h1>
              <h2 class="display-6 fst-italic text-end" id="headline-author"><b>-Cleanthes</b></h2>
            </div>
            <div class="col-lg-12 px-0">
              <p class="lead mt-5 text-center" id="headline-tagline">Adversity is a chance to hold fast to your convictions, <br>therein you will find your own strength.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-sm">
          <div class="col-lg-12 p-3 p-lg-5 pt-lg-1">
            <h3 class="display-5 fst-normal lh-1 text-body-emphasis pb-2">Tech layoffs and stagnation.</h3>
            <p><small>Updated 11/8/2023 by Derek Chisholm</small></p>
            <p class="lead">After a radical shift in the tech industry in 2023, it's back to the drawing board for me. I will be writing more often, updating my developer portfolio, and deepening my understanding of code to stay sharp. For now, I choose to respond properly to this moment, and give myself the opportunity to grow in excellence.</p>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis">Philosophy</strong>
              <h3 class="mb-0">On Ego</h3>
              <div class="mb-1 text-body-secondary">Sept 29</div>
              <p class="card-text mb-auto">In a world where opinion and fact are becoming one and the same, how do we move away from the ego?</p>
              <NuxtLink to="/philosophy-blog/on-ego" class="icon-link gap-1 icon-link-hover stretched-link">Continue reading</NuxtLink>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img class="bd-placeholder-img" width="200" height="250" src="/assets/images/ego.jpg">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-success-emphasis">Philosophy</strong>
              <h3 class="mb-0">On Routine</h3>
              <div class="mb-1 text-body-secondary">Nov 6</div>
              <p class="mb-auto">Hours turn into days, days into weeks, weeks to months, months to years, but you control every moment of the present.</p>
              <NuxtLink to="/philosophy-blog/on-routine" class="icon-link gap-1 icon-link-hover stretched-link">Continue reading</NuxtLink>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img class="bd-placeholder-img" width="200" height="250" src="/assets/images/routine.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <div class="col-md-8">
          <h3 class="pb-4 mb-4 fst-italic border-bottom">The Focal Point</h3>
          <article class="blog-post">
            <h2 class="display-5 link-body-emphasis mb-1">On Ego</h2>
            <p class="blog-post-meta">September 29, 2023 by <a href="#">Derek</a></p>
            <p>A quick definition for ego is “a person's sense of self-importance”, but one sentence is unsatisfactory in defining how it completely focuses our attention on what we perceive as important versus what is truly worthy of our attention.</p>
            <!-- ...rest of blog post content omitted for brevity... -->
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Add blog-specific styles here if needed */
</style>
