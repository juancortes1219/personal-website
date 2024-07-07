<template>
  <div class="preloader d-flex justify-content-center align-items-center">
    <!-- preloader content, e.g., loading animation or message -->
    <img
      src="../assets/images/polaroid-snapping-text.gif"
      alt="Animated Polaroid loading screen GIF."
    />
  </div>
</template>

<style scoped>
.preloader {
  height: calc(100vh - 100px);
  background-color: #d4d0be;
  overflow: hidden;
}

@media (min-width: 576px) {
  .preloader {
    height: 100vh;
  }
}
</style>
