<script setup lang="ts">
// No custom logic needed for static content
</script>

<template>
  <div class="contact-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
          <h1 class="display-5 fw-bold mb-4">Get in Touch</h1>
          <p class="lead text-muted mb-5">
            Whether for job opportunities, collaboration, or to discuss technology 
            and public policy — feel free to connect.
          </p>
          
          <div class="d-flex flex-column gap-3 mb-5">
            <a href="mailto:dchisholm125@gmail.com" class="btn btn-dark btn-lg px-5 py-3">
              <span class="me-2">📧</span>dchisholm125@gmail.com
            </a>
            <a href="tel:+17204468559" class="btn btn-outline-dark btn-lg px-5 py-3">
              <span class="me-2">📞</span>+1 (720) 446-8559
            </a>
          </div>

          <hr class="my-5">

          <div class="d-flex justify-content-center gap-3">
            <a href="https://www.linkedin.com/in/dchisholm125/" target="_blank" class="btn btn-outline-secondary px-4">
              <span class="me-2">💼</span>LinkedIn
            </a>
            <a href="https://github.com/dchisholm125" target="_blank" class="btn btn-outline-secondary px-4">
              <span class="me-2">💻</span>GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-outline-secondary {
  border-color: #dee2e6;
  color: #495057;
}

.btn-outline-secondary:hover {
  background-color: #f8f9fa;
  border-color: #dee2e6;
  color: #212529;
}
</style>
