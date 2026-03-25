<template>
  <div class="layout-wrapper">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark px-4 py-3 fixed-top">
      <div class="container-fluid d-flex justify-content-between">
        <NuxtLink class="navbar-brand fw-bold" to="/">
          Derek Chisholm <span class="text-muted fw-normal">| Researcher & Engineer</span>
        </NuxtLink>
        <div class="navbar-nav">
          <NuxtLink to="/research" class="nav-link">Research</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/about" class="nav-link btn btn-outline-light ms-3 px-3">About</NuxtLink>
        </div>
      </div>
    </nav>

    <div class="main-content" style="margin-top: 80px;">
      <slot />
    </div>

    <footer class="py-5 bg-dark text-white border-top mt-5">
      <div class="container text-center">
        <p class="mb-0">&copy; 2026 Derek Chisholm. Built with Vue and curiosity.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout-wrapper {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1a1a1a;
  line-height: 1.6;
}

.text-muted {
  color: #6c757d !important;
}

.navbar-brand {
  cursor: pointer;
}
</style>
