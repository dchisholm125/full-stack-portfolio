<script setup lang="ts">
// No custom logic needed for static content
</script>

<template>
  <div class="flexbox">
    <p>This is just a fun front-end recreation of a famous painting using flex + grid box CSS concepts. 
      This original painting is by Piet Mondrian and is called 
      <a href="https://commons.wikimedia.org/wiki/File:Piet_Mondrian_-_Composition_No._III,_with_red,_blue,_yellow_and_black,_1929.jpg"> Composition No. III</a>
      <br>
      <br>
      Right-click on the painting and choose "Inspect" to see the HTML/CSS involved.</p>
  </div>
  <hr>
  <div class="wrapper">
    <div class="container-mondrian">
      <div class="red"></div>
      <div class="white" id="white-top"></div>
      <div class="white"id="white-mid-left"></div>
      <div class="white" id="white-mid"></div>
      <div class="blue"> </div>
      <div class="white" id="white-mid-right"> </div>
      <div class="white"> </div>
      <div class="yellow"> </div>
      <div class="black"> </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.flexbox {
  display: flex;
  justify-content: center;
  font-family: "Lora", sans-serif;
  text-align: center;
}
.container-mondrian {
  display: grid;
  height: 748px;
  width: 748px;
  grid-template-columns: 320px 198px 153px 50px;
  grid-template-rows: 414px 130px 155px 22px;
  background: #232629;
  gap: 9px;
  justify-content: center;
}
.red {
  background: #E72F24;
}
.white {
  background:#F0F1EC;
}
#white-top {
  grid-column: span 3;
}
#white-mid {
  grid-column: span 2;
  grid-row: span 2;
}
#white-mid-left {
  grid-row: span 2;
}
.blue {
  background: #004592;
  border-bottom: 10px solid black;
  border-color: black;
}
#white-mid-right {
  grid-row: span 2;
}
.black {
  background: #232629;
}
.yellow {
  background: #F9D01E;
}
</style>
