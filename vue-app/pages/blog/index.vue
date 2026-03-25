<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBlogPosts, getAllTags } from '../../lib/blog'

const route = useRoute()
const router = useRouter()

const allPosts = getBlogPosts()
const allTags = getAllTags()

const selectedTag = ref<string | null>(null)

// Initialize from query param
onMounted(() => {
  if (route.query.tag) {
    selectedTag.value = String(route.query.tag)
  }
})

// Sync with query param
watch(selectedTag, (newTag) => {
  router.push({
    query: {
      ...route.query,
      tag: newTag || undefined
    }
  })
})

const filteredPosts = computed(() => {
  if (!selectedTag.value) return allPosts
  return allPosts.filter(post => post.tags.includes(selectedTag.value!))
})

const postsWithPath = computed(() => {
  return filteredPosts.value.map((post) => ({
    ...post,
    resolvedPath: `/blog/${post.slug}`,
  }))
})

const selectTag = (tag: string | null) => {
  selectedTag.value = tag
}
</script>

<template>
  <div class="blog-list">
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-lg-8">
          <h1 class="display-4 fw-bold mb-3">Lab Log & Field Notes</h1>
          <p class="text-muted lead mb-4">Numbered experiment entries, methodology explained, dead ends documented. Science as the universe reaching equilibrium.</p>
          
          <!-- Tag Filter Bar -->
          <div class="d-flex flex-wrap gap-2 mb-4">
            <button 
              class="btn btn-sm font-mono"
              :class="!selectedTag ? 'btn-dark' : 'btn-outline-dark'"
              @click="selectTag(null)"
            >
              All Posts
            </button>
            <button 
              v-for="tag in allTags" 
              :key="tag.name"
              class="btn btn-sm font-mono d-flex align-items-center"
              :class="selectedTag === tag.name ? 'btn-dark' : 'btn-outline-dark'"
              @click="selectTag(tag.name)"
            >
              {{ tag.name }}
              <span class="ms-2 opacity-50 small">({{ tag.count }})</span>
            </button>
          </div>
        </div>
      </div>
      
      <div class="row g-4">
        <div v-if="!postsWithPath.length" class="col-12 text-center py-5">
          <p class="text-muted fs-5">No posts found with the tag "{{ selectedTag }}" — the experiment continues elsewhere.</p>
          <button class="btn btn-link text-dark fw-bold" @click="selectTag(null)">View all posts</button>
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
                  <span class="badge bg-dark font-mono me-2">#{{ String(allPosts.length - allPosts.findIndex(p => p.slug === post.slug)).padStart(2, '0') }}</span>
                  <span class="text-secondary small font-mono" v-if="post.date">
                    {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                  </span>
                </div>
                <h2 class="h4 fw-bold mb-2 text-dark">{{ post.title }}</h2>
                
                <!-- Card Tags -->
                <div class="mb-3 d-flex flex-wrap gap-1">
                  <span 
                    v-for="tag in post.tags" 
                    :key="tag" 
                    class="tag-badge"
                  >
                    #{{ tag }}
                  </span>
                </div>

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

.tag-badge {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.65rem;
  color: #6c757d;
  background: rgba(0,0,0,0.05);
  padding: 2px 6px;
  border-radius: 4px;
}

.text-muted {
  color: #6c757d !important;
}

.btn-sm {
  font-size: 0.7rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}
</style>
