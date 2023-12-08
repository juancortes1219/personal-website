<script setup lang="ts">
// Import for AutoScroll extension
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
</script>

<template>
  <div class="splide-carousel" v-motion-fade-visible>
    <Splide
      :options="{ 
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoWidth: true,
        pagination: false,
        arrows: false,
        gap: '3rem',
        autoScroll: {
          speed: 0.25,
          pauseOnHover: false,
        }
      }"
      :extensions="{
        AutoScroll
      }"
      aria-label="My Favorite Images"
    >
      <!-- Splide Items -->
      <SplideSlide>
        <img src="https://picsum.photos/190" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/191" alt="Sample 2">
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/192" alt="Sample 3">
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/193" alt="Sample 4">
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/194" alt="Sample 5">
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/195" alt="Sample 6">
      </SplideSlide>
      <!-- <SplideSlide>
        <img src="https://picsum.photos/196" alt="Sample 7">
      </SplideSlide> -->
      <!-- <SplideSlide>
        <img src="https://picsum.photos/197" alt="Sample 8">
      </SplideSlide> -->
      <!-- <SplideSlide>
        <img src="https://picsum.photos/198" alt="Sample 9">
      </SplideSlide> -->
      <!-- <SplideSlide>
        <img src="https://picsum.photos/199" alt="Sample 10">
      </SplideSlide> -->
      <!-- <SplideSlide>
        <img src="https://picsum.photos/200" alt="Sample 11">
      </SplideSlide> -->
      <!-- Splide Items -->
    </Splide>
  </div>
</template>

<style scoped>
.splide-carousel {
  background-color: red;
}
</style>