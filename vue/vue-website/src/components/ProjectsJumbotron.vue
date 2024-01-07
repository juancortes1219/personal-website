<template>
  <div
    ref="lazyContainer"
    :style="{ backgroundImage: `url(${currentImage})` }"
    class="project-jumbotron bg-image bg-lazy"
    title="Columns near Apostle Philip's tomb in Hierapolis, Türkiye."
  >
    <div class="mask" style="background: var(--bottom-fade)">
      <div
        class="projects d-flex flex-column justify-content-center align-items-center text-center h-100"
      >
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
/* Lazy loading */
import { ref, onMounted } from 'vue'

const lazyContainer = ref<HTMLElement | null>(null)

const placeholderImage = '/images/columns-placeholder.jpg'
const loadedImage =
  'https://lh3.googleusercontent.com/pw/ABLVV84Y7pKULj9dYF1_1JYnd0UiZPbQTKcEZ1-f9Q05UYiA3lP9WsATOD5JnqHY3TWr9jjQgHnGHJUzFP9J_Cs3cbtOpBwUq4Slsb9t3RGii7mmtX6uxKY=w2400'

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
/* Styling for Jumbotron section */
.project-jumbotron {
  height: calc(100vh - 50px);
  background-attachment: scroll;
  background-position-x: -3rem;
}

.projects {
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
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}
/* Styling for headings */

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
