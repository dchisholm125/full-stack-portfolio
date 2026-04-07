<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from './layouts/default.vue'

const route = useRoute()
const useBareLayout = computed(() => Boolean(route.meta?.bareLayout))
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" v-if="useBareLayout" />
    <DefaultLayout v-else>
      <component :is="Component" />
    </DefaultLayout>
  </RouterView>
</template>
