<template>
  <div class="d-flex justify-content-center align-items-center flex-column mt-5">
    <h1>My Photos</h1>
    <h4>
      <VueTyper
        :text="['more coming soon']"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="1000"
        :type-delay="70"
        :pre-erase-delay="1500"
        :erase-delay="70"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="blink"
      ></VueTyper>
    </h4>
  </div>
  <PhotoGallery />
</template>

<script setup lang="ts">
import PhotoGallery from '@/components/PhotoGallery.vue'
</script>

<style scoped>
.vue-typer {
  --char-typed-color: var(--mdb-primary) !important;
}
</style>
