<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getBlogPostBySlug } from '../../lib/blog'

const route = useRoute()

const slug = computed(() => {
  const slugParam = route.params.slug
  return Array.isArray(slugParam) ? slugParam.join('/') : String(slugParam ?? '')
})

const post = computed(() => getBlogPostBySlug(slug.value))
</script>

<template>
  <div class="blog-post">
    <div class="container py-5">
      <div class="row justify-content-center">
        <article class="col-lg-8">
          <template v-if="post">
              <header class="mb-5 border-bottom pb-4">
                <div class="text-secondary small font-mono mb-2">
                  {{ new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
                </div>
                <h1 class="display-4 fw-bold mb-3">{{ post.title }}</h1>
                <p class="text-muted fs-5">{{ post.description }}</p>
              </header>

              <div class="content-body fs-5 lh-lg" v-html="post.bodyHtml"></div>

              <footer class="mt-5 pt-5 border-top text-center">
                <NuxtLink to="/blog" class="btn btn-outline-dark">← Back to Lab Log</NuxtLink>
              </footer>
          </template>

          <template v-else>
            <div class="text-center py-5">
              <h1 class="display-1 fw-bold">404</h1>
              <p class="lead">Post not found.</p>
              <NuxtLink to="/blog" class="btn btn-dark">Back to Blog</NuxtLink>
            </div>
          </template>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-post {
  background-color: #fff;
}

.content-body :deep(h1) {
  display: none; /* Hide duplicate H1 from markdown */
}

.content-body :deep(h2) {
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e9ecef;
}

.content-body :deep(h3) {
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.content-body :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.content-body :deep(em) {
  color: #6c757d;
}

.content-body :deep(strong) {
  font-weight: 700;
  color: #1a1a1a;
}

.content-body :deep(hr) {
  margin: 3rem 0;
  border: none;
  border-top: 2px solid #e9ecef;
}

.content-body :deep(a) {
  color: #212529;
  text-decoration: underline;
  text-decoration-color: #adb5bd;
  text-underline-offset: 3px;
}

.content-body :deep(a:hover) {
  text-decoration-color: #212529;
}

.font-mono {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85rem;
}

.text-muted {
  color: #6c757d !important;
}
</style>
