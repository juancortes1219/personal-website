<template>
  <div class="text-black mt-5 mb-5 p-4" v-motion-slide-visible-once-bottom>
    <MDBRow :cols="['1', 'md-3']" class="g-4">
      <MDBCol>
        <MDBCard class="h-100">
          <MDBCardImg src="/src/assets/images/homepage.jpg" top alt="Screenshot of homepage." />
          <MDBCardBody>
            <MDBCardTitle>Personal Website</MDBCardTitle>
            <MDBCardText> I rewrote this current website implementing Vue3. </MDBCardText>
            <MDBBtn
              tag="a"
              href="https://github.com/juancortes1219/personal-website"
              target="_blank"
              color="primary"
              >GitHub</MDBBtn
            >
          </MDBCardBody>
          <MDBCardFooter>
            <small class="text-muted">Nov 2023 - Present</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard class="h-100">
          <MDBCardImg
            src="/src/assets/images/iphone-calendar-icon.jpg"
            top
            alt="Image of iPhone calendar icon."
          />
          <MDBCardBody>
            <MDBCardTitle>Calendar App</MDBCardTitle>
            <MDBCardText>
              I'm tinkering with React Native and creating a custom calendar app.
            </MDBCardText>
            <MDBBtn
              tag="a"
              href="https://github.com/juancortes1219/calendar-app"
              target="_blank"
              color="primary"
              >GitHub</MDBBtn
            >
          </MDBCardBody>
          <MDBCardFooter>
            <small class="text-muted">Work in progress</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard class="h-100">
          <MDBCardImg
            src="/src/assets/images/coming-soon.jpg"
            top
            alt="Image that has the text 'Coming Soon'."
          />
          <MDBCardBody>
            <MDBCardTitle>...</MDBCardTitle>
            <MDBCardText> I'll be adding more works and projects here eventually. </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small class="text-muted">Coming soon</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </div>
</template>

<script setup lang="ts">
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBCardFooter,
  MDBBtn
} from 'mdb-vue-ui-kit'
</script>
