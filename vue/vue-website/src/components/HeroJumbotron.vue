<template>
  <!-- Background image -->
  <div
    ref="lazyContainer"
    :style="{ backgroundImage: `url(${currentImage})` }"
    class="jumbotron text-center bg-image bg-lazy"
    title="Beachside buildings in Izmir, Türkiye."
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

<script setup lang="ts">
/* Lazy loading */
import { ref, onMounted } from 'vue'

const lazyContainer = ref<HTMLElement | null>(null)

const placeholderImage = '/images/beachside-buildings-placeholder.jpg'
const loadedImage =
  'https://lh3.googleusercontent.com/pw/ABLVV86ydRNTnsjo82r6l7FWvXH3nFUZerx6DouLP7dmDrkzsxy_6dQ1Ri82YvM_2HwChRh0ne9n8TUtzImxg37aBPiO97H8yUA4AuR85ycOCU2KzvuwlhE=w2400'

const currentImage = ref(placeholderImage)

onMounted(() => {
  // Sets a delay for the placeholder image
  // setTimeout(() => {
  //   currentImage.value = loadedImage
  // }, 4000)
  currentImage.value = placeholderImage

  const image = new Image()
  image.src = loadedImage

  image.onload = () => {
    currentImage.value = loadedImage

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
  }
})
/* Lazy loading */
</script>

<style scoped>
/* Styling for Jumbotron section */
.jumbotron {
  height: calc(100vh - 50px);
  background-attachment: scroll;
}

.jumbotron-text {
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
/* Styling for Jumbotron section */

/* Lazy loading */
.bg-lazy {
  transition: background-image 500ms ease-in-out;
}
/* Lazy loading */

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
