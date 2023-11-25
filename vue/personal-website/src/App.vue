<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <BNavbar class="nav-bar" variant="primary" v-b-color-mode="'dark'">
      <BNavbarBrand href="/">NavBar</BNavbarBrand>
      <BNav>
        <BNavItem href="/">Home</BNavItem>
        <BNavItem href="/about">About</BNavItem>
        <BNavItem href="/contact">Contact Me</BNavItem>
      </BNav>
    </BNavbar>
  </header>

  <RouterView />

  <div class="container footer">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </footer>
  </div>

  <!-- <footer class="footer mt-auto py-3 bg-body-tertiary">
    <div class="container">
      <span class="text-body-secondary">Place sticky footer content here.</span>
    </div>
  </footer> -->
</template>

<style scoped>
.nav-bar {
  position: fixed;
  width: 100%;
  z-index: 999;
}

.footer {
  margin-left: 0;
  margin-right: 0;
  max-width: 100%;
  background-color: gray;
}
</style>
