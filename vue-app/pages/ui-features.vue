<script setup lang="ts">
import { ref } from 'vue';
const faqs = ref([
  { q: 'What is Vue?', a: 'A progressive JavaScript framework.' },
  { q: 'What is Nuxt?', a: 'A meta-framework for Vue.' },
  { q: 'What is the Composition API?', a: 'A new way to write logic in Vue 3.' },
]);
const open = ref(Array(faqs.value.length).fill(false));
function toggle(i: number) {
  open.value[i] = !open.value[i];
}
</script>

<template>
  <div class="container py-5">
    <h1>UI Features Demo</h1>
    <div v-for="(faq, i) in faqs" :key="i" class="mb-3">
      <button class="accordion" :class="{ active: open[i] }" @click="toggle(i)">{{ faq.q }}</button>
      <div class="panel" v-show="open[i]">
        <p>{{ faq.a }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  background-color: hsl(283, 100%, 88%);
  color: hsl(284, 83%, 19%);
  border-radius: 18px;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  margin-bottom: 5px;
}
.active, .accordion:hover {
  background-color: hsl(283, 100%, 83%);
}
.panel {
  padding: 15px 25px;
  background-color: hsl(283, 100%, 94%);
  border-radius: 8px;
  margin: 15px 0;
  color: hsl(284, 83%, 19%);
}
</style>
