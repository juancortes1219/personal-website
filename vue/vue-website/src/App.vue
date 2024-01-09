<template>
  <PageLoader v-if="isLoading" />
  <OrientationWarning v-else-if="isLandscape" />
  <main v-else>
    <header>
      <MDBNavbar expand="lg" position="top" container class="nav-bar">
        <MDBNavbarBrand href="/"><strong>juan cortes</strong></MDBNavbarBrand>
        <MDBNavbarToggler
          @click="collapse1 = !collapse1"
          target="#navbarSupportedContent"
        ></MDBNavbarToggler>
        <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
          <MDBNavbarNav right class="mb-2 mb-lg-0">
            <MDBNavbarItem to="/"> Home </MDBNavbarItem>
            <MDBNavbarItem to="about"> About </MDBNavbarItem>
            <MDBNavbarItem to="projects"> Projects </MDBNavbarItem>
            <MDBNavbarItem to="photos"> Photos </MDBNavbarItem>
            <MDBNavbarItem to="contact"> Contact Me </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>

    <RouterView />

    <MDBFooter
      class="footer-section bg-image"
      text="center"
      style="
        background-image: url('https://lh3.googleusercontent.com/pw/ABLVV86n6hjG103QTtajZQzjrIBu_UJ_CX_1sxj4I_flxmuBjLWDdFnPUvDfeIkaDOOmjrjaYdLl_y24Ij3Z0IyFbJnchnkD6cP0Vnu0uN32Y9bi-A6Gy74=w2400');
      "
      title="Guys at the beach in Izmir, Türkiye."
    >
      <!-- Grid container -->
      <MDBContainer class="contact-icons" v-motion-slide-visible-bottom>
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Instagram -->
          <a
            class="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://www.instagram.com/its.juancortes/"
            role="button"
            target="_blank"
            v-mdb-ripple="{ color: 'dark' }"
            ><MDBIcon iconStyle="fab" icon="instagram"></MDBIcon
          ></a>
          <!-- Linkedin -->
          <a
            class="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://www.linkedin.com/in/juan-cortes1219/"
            role="button"
            target="_blank"
            v-mdb-ripple="{ color: 'dark' }"
            ><MDBIcon iconStyle="fab" icon="linkedin"></MDBIcon
          ></a>
          <!-- Github -->
          <a
            class="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://github.com/juancortes1219"
            role="button"
            target="_blank"
            v-mdb-ripple="{ color: 'dark' }"
            ><MDBIcon iconStyle="fab" icon="github"></MDBIcon
          ></a>
        </section>
        <!-- Section: Social media -->
      </MDBContainer>
      <!-- Grid container -->
      <!-- Copyright -->
      <div
        v-motion-roll-visible-bottom
        id="copyright"
        class="text-center text-white p-3"
        style="font-size: 1.5rem"
      >
        © {{ currentYear }} by
        <a class="footer-name text-white" href="/">Juan Cortes</a>
      </div>
      <!-- Copyright -->
      <div class="top-mask"></div>
    </MDBFooter>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

/* Needed for PageLoader */
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import PageLoader from './components/PageLoader.vue'
import OrientationWarning from './components/OrientationWarning.vue'

const store = useStore()
const isLoading = computed(() => store.state.isLoading)
const isLandscape = ref(false)

// Use onMounted to run code after the component is mounted
onMounted(() => {
  // Simulate an asynchronous action (e.g., fetching data)
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 3000),
    // Check initial orientation
    checkOrientation()

  // Listen for orientation changes
  window.addEventListener('orientationchange', checkOrientation)
})
/* Needed for PageLoader */

const checkOrientation = () => {
  // Update isLandscape based on the current orientation
  isLandscape.value = window.orientation === 90 || window.orientation === -90
}

// Imports for MDBootstrap
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBFooter,
  MDBContainer,
  MDBIcon,
  mdbRipple as vMdbRipple
} from 'mdb-vue-ui-kit'
import { ref } from 'vue'

const collapse1 = ref(false)
// Imports for MDBootstrap

// Dynamic year for the 'Footer'
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Bottom border for Navbar */
.nav-bar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
/* Bottom border for Navbar */

/* Styling for Footer icons */
.contact-icons {
  padding-bottom: 30%;
}

.btn-lg,
.btn-group-lg > .btn {
  --mdb-btn-font-size: 2rem !important;
}

a:hover.btn-lg,
.btn-group-lg > .btn {
  color: var(--accent-three) !important;
}

.btn-link {
  --mdb-btn-hover-bg: none !important;
}
/* Styling for Footer icons */

/* Styling for Footer */
.footer-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 60vh !important;
}

.top-mask {
  position: relative;
  bottom: 60vh;
  margin-bottom: -20vh;
  width: 100%;
  height: 20vh;
  overflow: hidden;
  background-attachment: fixed;
  background: var(--top-fade);
}

.footer-name:hover {
  color: var(--accent-three) !important;
}
/* Styling for Footer */

@media (min-width: 992px) {
  .footer-section {
    background-position-y: -450px;
  }

  .contact-icons {
    padding-bottom: 4%;
  }
}
</style>
