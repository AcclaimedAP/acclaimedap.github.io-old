<script setup>
import { reactive } from 'vue';
import circleShimmer from './components/circleShimmer.vue';
import background from './components/backgroundImage.vue';
import navbar from './components/navbarLandingpage.vue';
import projects from './components/contentProjects.vue';
import contact from './components/contentContact.vue';
import about from './components/contentAbout.vue';

const state = reactive({ content: "" })



function changeContent(cxt) {
  const circle = document.querySelector(".circleShimmer");
  if(state.content != cxt){
    state.content = cxt;
  } else {
    state.content = "";
  }
}
</script>

<template>
  <div class="background">
    <background />
    <navbar @location="changeContent"/>
  <circleShimmer class="circleShimmer" />
    <projects v-if="state.content === 'projects'"/>
    <contact v-if="state.content === 'contact'" />
    <about v-if="state.content === 'about'" />
  </div>
</template>

<style scoped lang="scss">
.background {

  position: fixed;
  height: 100vh;
  width: 100vw;
  margin: 0;
}

</style>
