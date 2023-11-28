<template>
    <!-- Background image -->
    <div
      id="intro-example"
      class="p-5 text-center bg-image"
      style="background-image: url('https://mdbootstrap.com/img/new/slides/041.webp');"
    >
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.7);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-4">Hello, I'm Juan Cortes.</h1>
            <h4>
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
            </h4>
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
</template>


<style scoped>
/* Default height for small devices */
#intro-example {
    height: 100vh;
  }

/* Height for devices larger than 992px */
@media (min-width: 992px) {
  #intro-example {
    height: 100vh;
  }
}
.vue-typer {
  /* font-size: 1.9rem; */
  --char-typed-color: white;
}
</style>