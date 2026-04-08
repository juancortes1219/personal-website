<template>
  <div class="warning-container d-flex flex-column justify-content-center align-items-center">
    <font-awesome-icon
      :icon="['fas', 'mobile-screen-button']"
      rotation="270"
      size="2xl"
      style="color: #ffffff"
    />
    <!-- <div class="orientation-warning text-center"> -->
    <h1 class="text-center mt-3 px-3">
      For a <span style="color: var(--mdb-primary)">better</span> experience, please
      <span style="color: var(--accent-three)">rotate</span> your device into
      <span style="color: var(--accent-one)">portrait</span> orientation.
    </h1>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.warning-container {
  height: 100vh;
  background-color: black;
  overflow: hidden;
}

@keyframes rotateIcon {
  0% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.fa-2xl {
  font-size: 2.5rem !important;
  transform-origin: center center; /* Set the rotation origin to the center of the element */
  animation: rotateIcon 2000ms linear infinite; /* Adjust the duration as needed */
}
</style>
