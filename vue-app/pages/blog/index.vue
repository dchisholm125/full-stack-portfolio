<script setup lang="ts">
import { computed } from 'vue'
import { getBlogPosts } from '../../lib/blog'

const posts = getBlogPosts()

const postsWithPath = computed(() => {
  return posts.map((post) => ({
    ...post,
    resolvedPath: `/blog/${post.slug}`,
  }))
})
</script>

<template>
  <div class="blog-list">
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-lg-8">
          <h1 class="display-4 fw-bold mb-3">Lab Log & Field Notes</h1>
          <p class="text-muted lead">Numbered experiment entries, methodology explained, dead ends documented. Science as the universe reaching equilibrium.</p>
        </div>
      </div>
      
      <div class="row g-4">
        <div v-if="!postsWithPath.length" class="col-12 text-center py-5">
          <p class="text-muted fs-5">No posts yet — the experiment is still running.</p>
        </div>
        
        <div 
          v-for="(post, index) in postsWithPath" 
          :key="post.slug" 
          class="col-md-6 col-lg-4"
        >
          <NuxtLink 
            :to="post.resolvedPath" 
            class="text-decoration-none d-block h-100"
          >
            <article class="card h-100 border-0 shadow-sm overflow-hidden card-hover">
              <div class="card-body p-4 d-flex flex-column">
                <div class="d-flex align-items-center mb-3">
                  <span class="badge bg-dark font-mono me-2">#{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="text-secondary small font-mono" v-if="post.date">
                    {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                  </span>
                </div>
                <h2 class="h4 fw-bold mb-3 text-dark">{{ post.title }}</h2>
                <p class="text-muted small flex-grow-1 mb-0">{{ post.description }}</p>
                <div class="mt-3 text-dark fw-bold read-more">
                  Read entry →
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  background: #f8f9fa;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
  background: #fff;
}

.read-more {
  transition: transform 0.2s ease;
  display: inline-block;
}

.card-hover:hover .read-more {
  transform: translateX(4px);
}

.font-mono {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
}

.text-muted {
  color: #6c757d !important;
}
</style>
