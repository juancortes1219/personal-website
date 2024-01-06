<template>
  <div
    ref="lazyElement"
    class="project-jumbotron bg-image"
    style="
      background-image: url('https://lh3.googleusercontent.com/pw/ABLVV84Y7pKULj9dYF1_1JYnd0UiZPbQTKcEZ1-f9Q05UYiA3lP9WsATOD5JnqHY3TWr9jjQgHnGHJUzFP9J_Cs3cbtOpBwUq4Slsb9t3RGii7mmtX6uxKY=w2400');
    "
    title="Columns near Apostle Philip's tomb in Hierapolis, Türkiye."
  >
    <div class="mask" style="background: var(--bottom-fade)">
      <div class="d-flex flex-column justify-content-center align-items-center text-center h-100">
        <h1>
          Projects
          <VueTyper
            :text="['completed', 'in progress']"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="erasing"
            :pre-type-delay="1000"
            :type-delay="70"
            :pre-erase-delay="1500"
            :erase-delay="70"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="blink"
          ></VueTyper>
        </h1>
        <h3>found below</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
/* Styling for Jumbotron section */
.project-jumbotron {
  height: calc(100vh - 50px);
  background-attachment: scroll;
  background-position-x: -3rem;
}
/* Styling for Jumbotron section */

/* Styling for VueTyper */
.vue-typer {
  --char-typed-color: var(--mdb-primary) !important;
}
/* Styling for VueTyper */

/* Styling for headings */
h1 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}
/* Styling for headings */

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
  /* Styling for Jumbotron section */
  .project-jumbotron {
    background-attachment: fixed;
    background-position: center;
  }
  /* Styling for Jumbotron section */

  /* Styling for headings */
  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }
  /* Styling for headings */
}
</style>
