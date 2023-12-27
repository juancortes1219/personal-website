<template>
  <div ref="aboutElement" class="about-section container-fluid">
    <div class="container pt-3">
      <!-- Section About -->
      <section class="section pt-2">
        <span id="about"></span>
        <!--Section heading-->
        <h1
          class="text-center text-uppercase font-weight-bold mt-5 mb-3 mt-4"
          style="color: var(--accent-two)"
          v-motion-slide-visible-once-bottom
        >
          About Me
        </h1>
        <!-- First row -->
        <div class="row mt-4 pt-4">
          <!--First column-->
          <div class="col-lg-5 col-md-12 mb-4">
            <!--Image-->
            <div class="d-flex justify-content-center align-items-center">
              <img
                src="https://lh3.googleusercontent.com/pw/ABLVV85ua0sFLTmqhxyhfzWFhjMaS0JKXwKihM3VTcEZRpUfJnUB980fkBJwPteDBK5OaAs79rf4yenZwp-Lg5f1wrw-uknbCjes7XqWPwAjh40UiWkopaQ=w2400"
                class="img-fluid rounded-circle w-75"
                loading="lazy"
                alt="My portrait"
                v-motion-slide-visible-once-left
              />
            </div>
          </div>
          <!--/First column-->
          <!--Second column-->
          <div class="about-p col-lg-6 offset-lg-1 col-md-12">
            <!--Description-->
            <p align="justify" v-motion-slide-visible-once-right>
              I am a {{ currentAge }} year old in love with Programming, Photography, and Jesus.
              From a taking a basic programming class and my general interest in technology, my love
              for Programming was sparked during my sophomore year in high school. That said, I
              decided to attend Georgia State University and major in Computer Science. I didn't get
              interested in Photography until the summer of 2016. That summer I got the oppurtunity
              to go on a mission trip with my church to Costa Rica where I took a lot of photos.
              From then on, my love for Photography grew, and I decided to get a minor in Art
              (Photography). Moving foward, I graduated from Georgia State University in May of
              2020.
            </p>
          </div>
          <!--/Second column-->
        </div>
        <!-- /.First row -->
      </section>
      <!-- /.Section About -->
    </div>
  </div>
</template>

<script setup lang="ts">
/* Calculates my current age */
function getAge(dateString: string) {
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

const dateString = '1996/12/19'
const currentAge = getAge(dateString)
/* Calculates my current age */
</script>

<style scoped>
/* Styling for About section */
.about-section {
  height: 100vh;
}

.container-fluid {
  margin-bottom: 2rem;
}
/* Styling for Image section */

@media (min-width: 992px) {
  /* Styling for Image section */
  .about-p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* Styling for Image section */
}
</style>
