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

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

/* Imports for fontawesome */
// fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Font Awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Specific icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
/* Imports for fontawesome */

// Adds fontawesome icons to the library
library.add(fab)
library.add(fas)

// import vuex from 'vuex@next';
import { store } from './stores/preloader';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueTyper)   // Registering vue3-typer
app.use(MotionPlugin)   // Registering motion
app.use(store); // Registering preloader

app.component('font-awesome-icon', FontAwesomeIcon) // Needed for fontawesome

app.mount('#app')
