<template>
  <div
    ref="lazyElement"
    class="contact-container bg-image"
    style="
      background-image: url('https://lh3.googleusercontent.com/pw/ABLVV86LrHCzE-2Ez_hAd_vFqibJzUA_9sPrge0jW0fzFss5sOVlEZBchM314-9JKpMN84uy-RVJfdKCahcaSsJ-M48tdOh5qg_bT_bwP6fTgxNJL5e20i0=w2400');
    "
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
import ContactForm from '@/components/ContactForm.vue'
import SectionDivider from '@/components/SectionDivider.vue'

/* Lozad.js lazy loading */
import { ref, onMounted } from 'vue'
import lozad from 'lozad'

const lazyElement = ref(null)

onMounted(() => {
  const observer = lozad('.bg-image', {
    loaded: (el: any) => {
      el.classList.add('image-loaded')
    }
  })

  observer.observe()
})
/* Lozad.js lazy loading */
</script>

<style scoped>
.contact-container {
  height: calc(100vh - 50px);
  background-attachment: scroll;
}
.contact {
  height: calc(100vh - 50px);
}

/* Lazy loading */
.bg-image {
  opacity: 0;
  transition: opacity 0.5s;
}

.image-loaded {
  opacity: 1;
}
/* Lazy loading */

@media (min-width: 992px) {
  .contact-container {
    background-attachment: fixed;
  }
}
</style>
