<template>
  <!-- Background image -->
  <div
    ref="lazyElement"
    class="jumbotron text-center bg-image"
    style="
      background-image: url('https://lh3.googleusercontent.com/pw/ABLVV86ydRNTnsjo82r6l7FWvXH3nFUZerx6DouLP7dmDrkzsxy_6dQ1Ri82YvM_2HwChRh0ne9n8TUtzImxg37aBPiO97H8yUA4AuR85ycOCU2KzvuwlhE=w2400');
    "
    title="Beachside buildings."
  >
    <div class="mask" style="background: var(--bottom-fade)">
      <div class="jumbotron-text d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h3 class="mb-0">Hello, I'm</h3>
          <h1 class="mb-3" style="color: var(--accent-one)">Juan Cortes</h1>
          <h4>
            A
            <VueTyper
              :text="['Programmer', 'Photographer']"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="erasing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="1500"
              :erase-delay="70"
              erase-style="backspace"
              :erase-on-complete="false"
              caret-animation="blink"
            ></VueTyper>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
</template>

<!-- https://lh3.googleusercontent.com/pw/ABLVV86ydRNTnsjo82r6l7FWvXH3nFUZerx6DouLP7dmDrkzsxy_6dQ1Ri82YvM_2HwChRh0ne9n8TUtzImxg37aBPiO97H8yUA4AuR85ycOCU2KzvuwlhE=w2400 -->
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
.jumbotron {
  height: calc(100vh - 50px);
  background-attachment: scroll;
}
/* Styling for Jumbotron section */

/* Styling for VueTyper */
.vue-typer {
  --char-typed-color: var(--mdb-primary) !important;
}
/* Styling for VueTyper */

/* Styling for headings */
h1 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.75rem;
}
/* Styling for headings */

/* Lazy loading */
.bg-image {
  opacity: 0;
  transition: opacity 0.5s;
}

.image-loaded {
  opacity: 1 !important;
}
/* Lazy loading */

@media (min-width: 992px) {
  /* Styling for Jumbotron section */
  .jumbotron {
    background-attachment: fixed;
  }

  .jumbotron-text {
    justify-content: left !important;
    text-align: left !important;
    padding-left: 6rem;
  }
  /* Styling for Jumbotron section */

  /* Styling for headings */
  h1 {
    font-size: 5rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }
  /* Styling for headings */
}
</style>
