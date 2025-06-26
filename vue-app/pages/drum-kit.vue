<script setup lang="ts">
import { ref, onMounted } from 'vue';

const keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
const sounds: Record<string, string> = {
  w: '/drum-kit/sounds/tom-1.mp3',
  a: '/drum-kit/sounds/tom-2.mp3',
  s: '/drum-kit/sounds/tom-3.mp3',
  d: '/drum-kit/sounds/tom-4.mp3',
  j: '/drum-kit/sounds/snare.mp3',
  k: '/drum-kit/sounds/crash.mp3',
  l: '/drum-kit/sounds/kick-bass.mp3',
};

function playSound(key: string) {
  const audio = new Audio(sounds[key]);
  audio.play();
  animateButton(key);
}

function animateButton(key: string) {
  const btn = document.querySelector('.' + key);
  if (btn) {
    btn.classList.add('pressed');
    setTimeout(() => btn.classList.remove('pressed'), 100);
  }
}

onMounted(() => {
  window.addEventListener('keydown', (event) => {
    if (keys.includes(event.key)) playSound(event.key);
  });
});
</script>

<template>
  <NuxtLink class="navy" to="/">&lt; Back</NuxtLink>
  <h1 id="title">Drum 🥁 Kit</h1>
  <div class="set">
    <button v-for="key in keys" :key="key" :class="[key, 'drum']" @click="playSound(key)">{{ key }}</button>
  </div>
  <footer>Rockin' it ♫ in Amesbury.</footer>
</template>

<style scoped>
body {
  text-align: center;
  background-color: #283149;
}
h1 {
  font-size: 5rem;
  color: #DBEDF3;
  font-family: "Arvo", cursive;
  text-shadow: 3px 0 #DA0463;
}
footer {
  color: #DBEDF3;
  font-family: sans-serif;
}
.set {
  margin: 10% auto;
}
.drum {
  outline: none;
  border: 10px solid #404B69;
  font-size: 2rem;
  padding: 30px 40px;
  margin: 10px;
  border-radius: 15px;
  background-color: white;
  color: #283149;
  font-family: 'Arvo', cursive;
  box-shadow: 0 6px #DBEDF3;
  transition: 0.1s;
}
.drum.pressed {
  box-shadow: 0 3px #DA0463;
  background-color: #DBEDF3;
}
.navy {
  color: #DBEDF3;
  text-decoration: none;
  margin: 1rem;
  display: inline-block;
}
</style>
