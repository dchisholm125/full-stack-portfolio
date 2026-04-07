<template>
  <div class="layout-wrapper">
    <nav class="navbar navbar-expand-sm navbar-dark site-nav px-4 py-3 fixed-top">
      <div class="container-fluid d-flex justify-content-between">
        <NuxtLink class="navbar-brand fw-bold site-brand" to="/">
          Derek Chisholm <span class="site-brand-muted fw-normal">| Researcher & Engineer</span>
        </NuxtLink>
        <div class="navbar-nav">
          <NuxtLink to="/research" class="nav-link site-nav-link">Research</NuxtLink>
          <NuxtLink to="/projects" class="nav-link site-nav-link">Projects</NuxtLink>
          <NuxtLink to="/blog" class="nav-link site-nav-link">Blog</NuxtLink>
          <NuxtLink to="/about" class="nav-link btn btn-outline-light ms-3 px-3 site-nav-cta">About</NuxtLink>
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

.site-nav {
  background: rgba(13, 13, 13, 0.95) !important;
  border-bottom: 1px solid #2a2a2a;
}

.site-brand {
  color: #ffffff !important;
}

.site-brand-muted {
  color: #555555 !important;
}

.site-nav-link {
  color: #888888 !important;
}

.site-nav-link:hover,
.site-nav-link.router-link-active {
  color: #cccccc !important;
}

.site-nav-cta {
  border-color: #2e2e2e !important;
}

.site-nav-cta:hover {
  border-color: #444444 !important;
  color: #cccccc !important;
}

.text-muted {
  color: #6c757d !important;
}

.navbar-brand {
  cursor: pointer;
}
</style>
