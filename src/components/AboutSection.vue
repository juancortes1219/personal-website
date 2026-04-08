<template>
  <div class="about-container d-flex justify-content-center align-items-center flex-column">
    <h1 class="mb-4">About Me</h1>
    <div class="about-question">
      <h2>What languages do I speak?</h2>
      <h4>Spanish and English 🗣️</h4>
      <p>I learned a little bit of Russian while I was in Moldova.</p>
    </div>
    <div class="about-question">
      <h2>What countries have I visited?</h2>
      <h4>
        Costa Rica
        <img
          alt="Costa Rica flag"
          src="../assets/icons/costa-rica-flag.png"
          style="height: 1.7rem"
        />, Mexico
        <img alt="Mexico flag" src="../assets/icons/mexico-flag.png" style="height: 1.7rem" />,
        Moldova
        <img alt="Molodova flag" src="../assets/icons/moldova-flag.png" style="height: 1.7rem" />,
        Romania
        <img alt="Romania flag" src="../assets/icons/romania-flag.png" style="height: 1.7rem" />,
        and Türkiye
        <img alt="Türkiye flag" src="../assets/icons/türkiye-flag.png" style="height: 1.7rem" />
      </h4>
    </div>
    <div class="about-question">
      <h2>What countries do I want to visit?</h2>
      <h4>
        Denmark
        <img alt="Denmark flag" src="../assets/icons/denmark-flag.png" style="height: 1.7rem" />,
        Finland
        <img alt="Finland flag" src="../assets/icons/finland-flag.png" style="height: 1.7rem" />,
        Iceland
        <img alt="Iceland flag" src="../assets/icons/iceland-flag.png" style="height: 1.7rem" />,
        Japan <img alt="Japan flag" src="../assets/icons/japan-flag.png" style="height: 1.7rem" />,
        Malta <img alt="Malta flag" src="../assets/icons/malta-flag.png" style="height: 1.7rem" />,
        Norway
        <img alt="Norway flag" src="../assets/icons/norway-flag.png" style="height: 1.7rem" />,
        South Africa
        <img
          alt="South Africa flag"
          src="../assets/icons/south-africa-flag.png"
          style="height: 1.7rem"
        />, South Korea
        <img
          alt="South Korea flag"
          src="../assets/icons/south-korea-flag.png"
          style="height: 1.7rem"
        />, Sweden
        <img alt="Sweden flag" src="../assets/icons/sweden-flag.png" style="height: 1.7rem" />, and
        Switzerland
        <img
          alt="Switzerland flag"
          src="../assets/icons/switzerland-flag.png"
          style="height: 1.7rem"
        />
      </h4>
      <p>These are on top of my list.</p>
    </div>
    <div class="about-question">
      <h2>What are my favorite food cuisines?</h2>
      <h4>
        Mexican
        <img alt="Mexico flag" src="../assets/icons/mexico-flag.png" style="height: 1.7rem" /> and
        Korean
        <img
          alt="South Korea flag"
          src="../assets/icons/south-korea-flag.png"
          style="height: 1.7rem"
        />
      </h4>
    </div>
    <div class="about-question">
      <h2>What is my favorite color?</h2>
      <MDBCard style="width: 18rem">
        <MDBCardHeader style="height: 8rem"><strong>Cerulean</strong></MDBCardHeader>
        <!-- <MDBCardTitle >Cerulean</MDBCardTitle> -->
        <MDBListGroup flush>
          <MDBListGroupItem>Hex: #02a7d4</MDBListGroupItem>
          <MDBListGroupItem>RGB: rgb(2, 164, 211)</MDBListGroupItem>
        </MDBListGroup>
      </MDBCard>
      <p class="mt-3">I usually say all types of blue. If I have to chose one, it's this.</p>
    </div>
    <div class="about-question">
      <h2>What are my hobbies?</h2>
      <h4>Cycling 🚲, Hiking ⛰️, Camping 🏕️, Photography 📷, and Rubik's cubes 🧩</h4>
      <p>The fastest time I solved a Rubik's cube was 32s.</p>
    </div>
    <div class="about-question">
      <h2>What is my favorite video game?</h2>
      <h4>
        Minecraft
        <img
          alt="Minecraft sword"
          src="../assets/icons/minecraft-sword.png"
          style="height: 1.7rem"
        />
      </h4>
      <p>I started playing in 2012.</p>
    </div>
    <div class="about-question">
      <h2>What is my favorite song?</h2>
      <h4>"Strobe" by deadmau5 🎵</h4>
    </div>
    <div class="about-question">
      <h2>Who are my favorite artists?</h2>
      <h4>
        deadmau5, Fleet Foxes, The Beatles, Spangle Call Lilli Line, TWICE, Stray Kids, and NewJeans
        🎧🎶🔥
      </h4>
    </div>
    <div class="about-question">
      <h2>What is my favorite movie?</h2>
      <h4>It's a tie between Interstellar and La La Land. 🎬</h4>
    </div>
    <div class="about-question">
      <h2>What are my favorite TV series?</h2>
      <h4>The Office, Stranger Things, and Avatar: The Last Airbender 📺</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MDBCard, MDBCardHeader, MDBListGroup, MDBListGroupItem } from 'mdb-vue-ui-kit'
</script>

<style scoped>
.about-container {
  padding: 3.5rem;
}

.about-question {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;
}

h2 {
  color: var(--accent-one);
  text-align: left;
}

h4 {
  text-align: left;
}

p {
  font-style: italic;
  text-align: left;
}

.card-header {
  background-color: var(--mdb-primary);
}

.color-item {
  display: flex;
  flex-direction: row;
}

@media (min-width: 576px) {
  .about-container {
    padding: 6rem;
  }

  .about-question {
    justify-content: center;
    align-items: center;
  }

  h2 {
    text-align: center;
  }

  h4 {
    text-align: center;
  }

  p {
    text-align: center;
  }
}
</style>
