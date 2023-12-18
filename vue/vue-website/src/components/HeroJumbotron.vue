<template>
    <!-- Background image -->
    <div
      id="jumbotron"
      class="text-center bg-image bg-fixed"
      style="background-image: url('https://lh3.googleusercontent.com/pw/ABLVV87uzGO5XzPVDniIT89M62daYGxe6ZPrSbWtllGSy1Uvtal0vxZcebNdo_JhTgFlZ6oktoT56LeaDwyT12897xQ0N2gY12BJH-RQuZxWsBj07XHVAa0RAUluGAA7RFHgYC3cXIIXRXr29BsJj55w5eXJuLx_KOfH6iqIk5uL_tGvPAt-UH4TDxSZrNQILImjQsaea12ZZRSU0f7J0lYkUAah3-P0SCxnwaS2Vp9Kp7CbH1FQppSXCcDCdymLV7GfJk1XRoBryy2NL3iOTqMkz1Va2B4UQOE4yyAWH41jiAZvHvWNwY0gxB_CJQJJOUQuEQrpn9E_5m9U3KDW6MQ5_mjFR35EdjqeZTuirjuUrS4YzAGThvtwoCDe11mKZmGtSVzkTbDCpj_uAgZc82NHiF-7x-IJhgInF7g3-IjmJxE4lSYLRWpLM-DrmHW2umCeK-7TjkP2OlLt2B3vMp9zEzcx9m0NTt6YoiQPdfnFq17-uviG9l2DpBoJKfC796vWvawGHe_djZ-eBIkXpIPs5p4g3JKV29L7uulXbtafIFnykfqkmrGVjt-rXQBg0ZWLhySeu6ho7Ir1Bkg0WEb6FrOUUP5qrhurVAdXMZIcCxqGXhZEmSCVXbLa0lV8OLW13Baikhxl59Zbo-AqbTCT6JEeDlWV2J3YFIpfm0MinaW8CXnqr65ekSwS0xo5Xl5PcnaccUHhhtmzGTLP6-5S7QDDpLjFael3nfgG0aQsL2rRZMuTCziKzb3US6xYxPn_bY2MtHLJSchDtCHYnAqmQjryFe40R1JvfKtFJVgMt8_4YI_9m0ldwHOMHT7N512VvvBP9gVk5T5wwtWh_wkmdV1dpi5Y4Wn8AduIQnjiyFLDyloOp9Q9G5bOH0xPAfehnw=w2400');"
    >
    <!-- style="background-color: rgba(0, 0, 0, 0.7);" -->
      <div class="mask" style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5))">
        <div class="jumbotron-text d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h3 class="mb-0">Hello, I'm</h3>
            <!-- <div class="d-flex justify-content-center align-items-center h-100"> -->
              <h1 class="mb-3">Juan Cortes</h1>
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
#jumbotron {
  height: calc(100vh - 50px);
}
.vue-typer {
  --char-typed-color: white;
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