<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

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
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  const collapse1 = ref(false);
// 

// Dynamic year for the 'Footer'
const currentYear = new Date().getFullYear();
</script>

<template>
  <header>
    <MDBNavbar expand="lg" light bg="light" position="top" container>
      <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>
      <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
      ></MDBNavbarToggler>
      <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
        <MDBNavbarNav right class="mb-2 mb-lg-0">
          <MDBNavbarItem to="/" active>
            Home
          </MDBNavbarItem>
          <MDBNavbarItem href="/about">
            About
          </MDBNavbarItem>
          <MDBNavbarItem href="/contact">
            Contact Me
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  </header>

  <RouterView />

  <MDBFooter text="center" style="background-color: #f1f1f1">
      <!-- Grid container -->
      <MDBContainer class="pt-4">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Instagram -->
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/its.juancortes/"
            role="button"
            v-mdb-ripple="{ color: 'dark' }"
            ><MDBIcon iconStyle="fab" icon="instagram"></MDBIcon
          ></a>
          <!-- Linkedin -->
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/juan-cortes1219/"
            role="button"
            v-mdb-ripple="{ color: 'dark' }"
            ><MDBIcon iconStyle="fab" icon="linkedin"></MDBIcon
          ></a>
          <!-- Github -->
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/juancortes1219"
            role="button"
            v-mdb-ripple="{ color: 'dark' }"
            ><MDBIcon iconStyle="fab" icon="github"></MDBIcon
          ></a>
        </section>
        <!-- Section: Social media -->
      </MDBContainer>
      <!-- Grid container -->
      <!-- Copyright -->
      <div
        id="copyright"
        class="text-center text-dark p-3"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        © {{ currentYear }} by 
        <a class="text-dark" href="/"
          >Juan Cortes</a
        >.
      </div>
      <!-- Copyright -->
    </MDBFooter>
</template>

<style scoped>

</style>
