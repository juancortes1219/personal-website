<template>
  <div
    ref="lazyContainer"
    :style="{ backgroundImage: `url(${currentImage})` }"
    class="contact-container bg-image bg-lazy"
    title="Beach and big hill in the background in Izmir, Türkiye."
  >
    <div class="mask" style="background: var(--bottom-fade)">
      <div class="contact d-flex justify-content-center align-items-center flex-column">
        <h1 class="mt-3" style="color: var(--accent-one)">Contact Me</h1>
        <ContactForm />
      </div>
    </div>
  </div>
  <SectionDivider />
</template>

<script setup lang="ts">
/* Lazy loading */
import { ref, onMounted } from 'vue'

const lazyContainer = ref<HTMLElement | null>(null)

const placeholderImage = '/images/beach-placeholder.jpg'
const loadedImage =
  'https://lh3.googleusercontent.com/pw/ABLVV86LrHCzE-2Ez_hAd_vFqibJzUA_9sPrge0jW0fzFss5sOVlEZBchM314-9JKpMN84uy-RVJfdKCahcaSsJ-M48tdOh5qg_bT_bwP6fTgxNJL5e20i0=w2400'

const currentImage = ref(placeholderImage)

onMounted(() => {
  // Sets a delay for the placeholder image
  setTimeout(() => {
    currentImage.value = loadedImage
  }, 1000)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect() // Disconnects the observer after loading the image
        }
      })
    },
    { threshold: 0 }
  )

  observer.observe(lazyContainer.value!)
})
/* Lazy loading */
</script>

<style scoped>
.contact-container {
  height: calc(100vh - 50px);
  background-attachment: scroll;
}
.contact {
  height: calc(100vh - 50px);
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Lazy loading */
.bg-lazy {
  transition: background-image 500ms ease-in-out;
}
/* Lazy loading */

@media (min-width: 992px) {
  .contact-container {
    background-attachment: fixed;
  }
}
</style>
