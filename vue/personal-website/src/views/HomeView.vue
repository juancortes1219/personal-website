<script setup lang="ts">
import HeroJumbotron from '../components/HeroJumbotron.vue'
import TempCards from '../components/TempCards.vue'
</script>

<template>
  <section class="hero-section">
    <HeroJumbotron />
  </section>
  <section class="cards-section">
    <TempCards />
  </section>
</template>

<style scoped>
.hero-section {
  /* padding-top: 6rem; */
  /* height: 100vh; */
  /* background-color: lightgray; */
}

.cards-section {
  /* padding: 6rem; */
  /* height: 100vh; */
  /* background-color: lightblue; */
}
</style>