<script setup lang="ts">
import { ref, onMounted } from 'vue';

const dice1 = ref(1);
const dice2 = ref(1);
const result = ref('Refresh Me');

function rollDice() {
  dice1.value = Math.floor(Math.random() * 6) + 1;
  dice2.value = Math.floor(Math.random() * 6) + 1;
  if (dice1.value > dice2.value) {
    result.value = '🚩 Player 1 Wins!';
  } else if (dice1.value < dice2.value) {
    result.value = 'Player 2 Wins! 🚩';
  } else {
    result.value = 'Draw!';
  }
}

onMounted(() => {
  rollDice();
});
</script>

<template>
  <div class="navbar">
    <div class="container">
      <NuxtLink to="/" class="navbar">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
        <strong>Derek Chisholm - Full Stack Engineer</strong>
      </NuxtLink>
    </div>
  </div>
  <div class="container">
    <h1 @click="rollDice">{{ result }}</h1>
    <div class="dice" id="dice1">
      <p>Player 1</p>
      <img class="img" :src="`/dice/images/dice${dice1}.png`" alt="Dice 1" />
    </div>
    <div class="dice" id="dice2">
      <p>Player 2</p>
      <img class="img" :src="`/dice/images/dice${dice2}.png`" alt="Dice 2" />
    </div>
  </div>
  <footer>
    dchisholm125 🎲 github 🎲 io / dice-game
  </footer>
</template>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
}

.navbar {
  background: black;
  text-decoration: none;
  color: white;
}

.dice {
  text-align: center;
  display: inline-block;
}

body {
  background-color: #393E46;
}

h1 {
  margin: 30px;
  font-family: 'Lobster', cursive;
  text-shadow: 5px 0 #232931;
  font-size: 8rem;
  color: #4ECCA3;
  cursor: pointer;
}

p {
  font-size: 2rem;
  color: #4ECCA3;
  font-family: 'Indie Flower', cursive;
}

img {
  width: 80%;
}

footer {
  margin-top: 5%;
  color: #EEEEEE;
  text-align: center;
  font-family: 'Indie Flower', cursive;
}
</style>
