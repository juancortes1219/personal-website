<template>
  <div
    class="contact-container bg-image"
    style="
      background-image: url('https://lh3.googleusercontent.com/pw/ABLVV86LrHCzE-2Ez_hAd_vFqibJzUA_9sPrge0jW0fzFss5sOVlEZBchM314-9JKpMN84uy-RVJfdKCahcaSsJ-M48tdOh5qg_bT_bwP6fTgxNJL5e20i0=w2400');
    "
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
</script>

<style scoped>
.contact-container {
  height: calc(100vh - 50px);
  background-attachment: scroll;
  /* background-color: rgba(255, 0, 0, 0.5); */
}
.contact {
  height: calc(100vh - 50px);
}

@media (min-width: 992px) {
  .contact-container {
    background-attachment: fixed;
  }
}
</style>
