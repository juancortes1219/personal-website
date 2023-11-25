<template>
    <div class="my-5 hero-jumbotron">
      <div class="p-5 text-center">
        <div class="container py-5">
          <h1 class="display-1 text-body-emphasis">Hello, I'm Juan Cortes.</h1>
          <p class="h2 col-lg-8 mx-auto">
            A
            <VueTyper
              :text='["Programmer","Photographer"]'
              :repeat='Infinity'
              :shuffle='false'
              initial-action='erasing'
              :pre-type-delay='70'
              :type-delay='70'
              :pre-erase-delay='1500'
              :erase-delay='70'
              erase-style='backspace'
              :erase-on-complete='false'
              caret-animation='blink'
            ></VueTyper>
          </p>
        </div>
      </div>
    </div>
</template>


<style scoped>
.hero-jumbotron {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.vue-typer {
  font-weight: bold;
}
</style>