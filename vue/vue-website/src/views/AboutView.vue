<template>
  <div class="about">
    <h1>
      Learn more <span style="color: var(--accent-one)">about</span> me
      <VueTyper
        :text="['soon']"
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
    </h1>
  </div>
</template>

<style scoped>
.about {
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-typer {
  --char-typed-color: var(--mdb-primary) !important;
}
</style>
