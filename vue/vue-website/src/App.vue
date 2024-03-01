<template>
  <PageLoader v-if="isLoading" />
  <OrientationWarning v-else-if="isLandscape" />
  <main v-else>
    <header>
      <MDBNavbar expand="lg" position="top" container class="nav-bar">
        <MDBNavbarBrand href="/"><strong>juan cortes</strong></MDBNavbarBrand>
        <MDBNavbarToggler
          @click="collapseNav = !collapseNav"
          target="#my-navbar"
        ></MDBNavbarToggler>
        <MDBCollapse v-model="collapseNav" id="my-navbar">
          <MDBNavbarNav right class="mb-2 mb-lg-0">
            <MDBNavbarItem to="/" @click="closeNav()"> Home </MDBNavbarItem>
            <MDBNavbarItem to="about" @click="closeNav()"> About </MDBNavbarItem>
            <MDBNavbarItem to="projects" @click="closeNav()"> Projects </MDBNavbarItem>
            <MDBNavbarItem to="photos" @click="closeNav()"> Photos </MDBNavbarItem>
            <MDBNavbarItem to="contact" @click="closeNav()"> Contact Me </MDBNavbarItem>
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
      <div class="top-mask"></div>
      <!-- Grid container -->
      <MDBContainer v-motion-slide-visible-bottom>
        <!-- Section: Social media -->
        <section>
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
    </MDBFooter>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
import PageLoader from './components/PageLoader.vue'
import OrientationWarning from './components/OrientationWarning.vue'

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

const globalStore = useStore()
const isLoading = computed(() => globalStore.state.preloader.isLoading)
const isLandscape = ref(false)
const collapseNav = ref(false)

onMounted(() => {
  // Simulates an asynchronous action (e.g., fetching data)
  setTimeout(() => {
    globalStore.commit('preloader/setLoading', false, { root: true })
  }, 3000),
    // Checks initial orientation
    checkOrientation()

  // Listens for orientation changes
  window.addEventListener('orientationchange', checkOrientation)
})
/* Needed for PageLoader */

const checkOrientation = () => {
  // Update isLandscape based on the current orientation
  isLandscape.value = window.orientation === 90 || window.orientation === -90
}

const closeNav = () => {
  if (window.innerWidth < 992) {
    collapseNav.value = !collapseNav.value
  }
}

// Dynamic year for the 'Footer'
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.navbar-brand:hover {
  color: var(--accent-three);
}

/* Bottom border for Navbar */
.nav-bar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
/* Bottom border for Navbar */

/* Styling for Footer icons */
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
  justify-content: center;
  align-items: center;
  height: 300px;
  /* margin-top: 137px; */
  /* z-index: 9; */
}

.top-mask {
  position: relative;
  bottom: 14px;
  /* margin-bottom: -150px; */
  width: 100%;
  height: 150px;
  overflow: hidden;
  background-attachment: fixed;
  background: var(--top-fade);
}

.footer-name:hover {
  color: var(--accent-three) !important;
}
/* Styling for Footer */

@media (min-width: 540px) {
  .footer-section {
    background-position-y: -50px;
  }
}

@media (min-width: 768px) {
  .footer-section {
    background-position-y: -175px;
  }
}

@media (min-width: 992px) {
  .footer-section {
    background-position-y: -275px;
  }
}

@media (min-width: 1024px) {
  .footer-section {
    background-position-y: -375px;
  }
}

@media (min-width: 1200px) {
  .footer-section {
    background-position-y: -475px;
  }
}

@media (min-width: 1440px) {
  .footer-section {
    background-position-y: -525px;
  }
}

@media (min-width: 2560px) {
  .footer-section {
    background-position-y: -950px;
  }
}
</style>
