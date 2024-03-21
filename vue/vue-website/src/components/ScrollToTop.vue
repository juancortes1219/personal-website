<template>
  <div :class="{ 'scroll-to-top-container': true, show: showButton }">
    <font-awesome-icon
      @click="scrollToTop"
      :icon="['fas', 'circle-up']"
      size="2xl"
      style="color: var(--mdb-primary)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.scroll-to-top-container.show {
  opacity: 1;
}

.fa-2xl:hover {
  color: var(--accent-three) !important;
}
</style>
