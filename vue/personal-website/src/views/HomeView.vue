<template>
  <div class="home">
    <h1>
      A
      <VueTyper
        :text='["Programmer","Photographer"]'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='erasing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='3000'
        :erase-delay='70'
        erase-style='backspace'
        :erase-on-complete='false'
        caret-animation='blink'
      ></VueTyper>
    </h1>
  </div>
</template>

<style>
.vue-typer {
  font-weight: bold;
}

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>