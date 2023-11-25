<script setup lang="ts">
import HeroJumbotron from '../components/HeroJumbotron.vue'
import CustomCards from '../components/ColumnsIcons.vue'
</script>

<template>
  <section class="hero-section">
    <HeroJumbotron />
  </section>
  <section class="feature-section">
    <CustomCards />
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 6rem;
  height: 100vh;
  background-color: lightgray;
}

.feature-section {
  padding-top: 6rem;
  height: 100%;
  background-color: lightgray;
}
</style>