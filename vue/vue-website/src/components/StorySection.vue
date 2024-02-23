<template>
  <div class="story-section container-fluid">
    <div class="container pt-3">
      <!-- Section story -->
      <section class="section pt-2">
        <span id="story"></span>
        <!--Section heading-->
        <h1
          class="text-center text-uppercase font-weight-bold mt-5 mb-3 mt-4"
          style="color: var(--accent-two)"
          v-motion-slide-visible-once-bottom
        >
          My Short Story
        </h1>
        <!-- First row -->
        <div class="row mt-4">
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
          <div class="story-p col-lg-6 offset-lg-1 col-md-12">
            <!--Description-->
            <p align="justify" v-motion-slide-visible-once-right>
              I am {{ currentAge }} years old and in love with <i>programming</i>,
              <i>photography</i>, and <i>Jesus</i>. From taking a basic programming class and my
              general interest in technology, my love for <i>programming</i> was sparked during my
              sophomore year of high school. In 2015, I started attending Georgia State University
              and majored in <i>computer science</i>. I didn't get interested in
              <i>photography</i> until the summer of 2016. That summer, I got the opportunity to go
              on a mission trip with my church to Costa Rica, where I took lots of photos. From then
              on, my love for <i>photography</i> grew, and I decided to get a minor in
              <i>art</i> (<i>photography</i>). I graduated from Georgia State University in May of
              2020.
            </p>
          </div>
          <!--/Second column-->
        </div>
        <!-- /.First row -->
      </section>
      <!-- /.Section story -->
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
/* Styling for Story section */
.story-section {
  height: 850px;
}

.container-fluid {
  margin-bottom: 2rem;
}
/* Styling for Story section */

@media (min-width: 992px) {
  /* Styling for Story section */
  .story-section {
    height: 550px;
  }

  .story-p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
  }
  /* Styling for Story section */
}
</style>
