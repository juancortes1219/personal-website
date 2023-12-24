<template>
  <div
    class="contact-container bg-image"
    style="background-image: url('https://lh3.googleusercontent.com/pw/ABLVV86ydRNTnsjo82r6l7FWvXH3nFUZerx6DouLP7dmDrkzsxy_6dQ1Ri82YvM_2HwChRh0ne9n8TUtzImxg37aBPiO97H8yUA4AuR85ycOCU2KzvuwlhE=w2400');"
  >
    <div class="mask" style="background: var(--bottom-fade);">
      <div class="contact d-flex justify-content-center align-items-center flex-column">
        <h1 class="mt-3" style="color: var(--accent-one);">Contact Me</h1>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  height: calc(100vh - 50px);
}
.contact {
  height: calc(100vh - 50px);
}

.vue-typer {
  --char-typed-color: var(--mdb-primary) !important;
}
</style>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
</script>
