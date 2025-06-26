<script setup lang="ts">
// No custom logic for now, but ready for Composition API
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
    <div class="d-flex justify-content-between w-100">
      <a class="col-6 navbar-brand" href="#">Derek Chisholm <span style="color: #6EC207;">| Full Stack Engineer</span></a>
      <a class="col-2 btn btn-outline-light" href="https://www.derekchisholm.com/open-source">Open Source Portfolio</a>
      <div class="col-2"></div>
      <form class="col-2" role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </nav>

  <div class="d-flex border-top border-bottom border-solid border-secondary">
    <!-- ...existing code for info bars and logos... -->
  </div>

  <main>
    <!-- ...existing code for hero, feature samples, project cards... -->
  </main>

  <div class="container">
    <footer class="py-5">
      <!-- ...existing code for footer... -->
    </footer>
  </div>
</template>

<style scoped>
/* Custom styles can be imported globally, but you can add page-specific tweaks here */
</style>
