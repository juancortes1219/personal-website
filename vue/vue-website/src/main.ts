import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Imports from vue3-typer
import VueTyper from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"

// Import for MDBootstrap
import 'mdb-vue-ui-kit/css/mdb.min.css'

// Import for motion
import { MotionPlugin } from '@vueuse/motion'

// Imports for vue-splide
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueTyper)   // Registering vue3-typer
app.use(MotionPlugin)   // Registering motion
app.use(VueSplide)  // Registering vue-splide

app.mount('#app')
