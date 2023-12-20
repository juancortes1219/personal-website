<template>
  <!-- Background image -->
  <div
    class="jumbotron text-center bg-image bg-fixed"
    style="background-image: url('https://lh3.googleusercontent.com/pw/ABLVV86ydRNTnsjo82r6l7FWvXH3nFUZerx6DouLP7dmDrkzsxy_6dQ1Ri82YvM_2HwChRh0ne9n8TUtzImxg37aBPiO97H8yUA4AuR85ycOCU2KzvuwlhE=w2400');"
  >
  <!-- style="background-color: rgba(0, 0, 0, 0.7);" -->
    <div class="mask" style="background: var(--bottom-fade)">
      <div class="jumbotron-text d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h3 class="mb-0">Hello, I'm</h3>
          <!-- <div class="d-flex justify-content-center align-items-center h-100"> -->
            <h1 class="mb-3" style="color: var(--accent-one);">Juan Cortes</h1>
          <!-- </div> -->
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
.jumbotron {
  height: calc(100vh - 50px);
}
.vue-typer {
  /* --char-typed-color: white; */
  --char-typed-color: var(--mdb-primary);
  --caret-complete-color: white;
  --caret-idle-color: white;
  --caret-typing-color: white;
  --caret-selecting-color: white;
  --caret-erasing-color: white;
  --caret-complete-color: white;
}

@media (min-width: 756px) {
  h1 {
    font-size: 4rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }
}

@media (min-width: 992px) {
  .jumbotron-text {
    justify-content: left !important;
    text-align: left !important;
    padding-left: 6rem;
  }
  
  h1 {
    font-size: 5rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }
}
</style>