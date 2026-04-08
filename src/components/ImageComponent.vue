<template>
  <div
    class="image-component bg-image"
    style="
      background-image: url('https://lh3.googleusercontent.com/pw/ABLVV878SswofaGs2uitkTuL4ydygePx_89rubyLNm6XV6yh81wW9K-iMhSpwLEiG6FHY9hqJ2kmZOLccjYWMjGRCHBcAHgultJHm5co6vfy3Zu1_lkx3n0=w2400');
    "
    title="Palm tree in the foreground with the beach and hill in the background."
  ></div>
  <div class="top-mask"></div>
  <div class="bottom-mask"></div>
</template>

<style scoped>
/* Styling for Image section */
.image-component {
  height: 100vh;
  background-attachment: scroll;
}

.top-mask {
  position: relative;
  bottom: 100vh;
  margin-bottom: -50vh;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  background-attachment: fixed;
  background: var(--top-fade);
}

.bottom-mask {
  position: relative;
  bottom: 50vh;
  margin-bottom: -50vh;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  background-attachment: fixed;
  background: var(--bottom-fade);
}
/* Styling for Image section */

@media (min-width: 992px) {
  /* Styling for Image section */
  .image-component {
    background-attachment: fixed;
  }
  /* Styling for Image section */
}
</style>
