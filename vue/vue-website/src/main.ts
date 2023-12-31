import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueTyper from 'vue3-typer' // Import for vue3-typer
import 'vue3-typer/dist/vue-typer.css' // Import for vue3-typer
import 'mdb-vue-ui-kit/css/mdb.min.css' // Import for mdb-vue-ui-kit
import { MotionPlugin } from '@vueuse/motion' // Import for @vueuse/motion
import { library } from '@fortawesome/fontawesome-svg-core' /* Import for @fortawesome */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' /* Import for @fortawesome */
import { fab } from '@fortawesome/free-brands-svg-icons' /* Import for @fortawesome */
import { fas } from '@fortawesome/free-solid-svg-icons' /* Import for @fortawesome */
import { store } from './stores/preloader' // Import for vuex@next
import { install } from 'vue3-recaptcha-v2' // import for vue3-recaptcha-v2
import { register } from 'swiper/element/bundle' // import for swiper
register() // register swiper

// Adds fontawesome icons to the library
library.add(fab)
library.add(fas)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueTyper) // Registering vue3-typer
app.use(MotionPlugin) // Registering motion
app.use(store) // Registering preloader
app.use(install, {
  sitekey: '6LeCMDwpAAAAAF8FdDfy2TqG2FpOknFueyPp2sNd',
  cnDomains: false
}) // Registering vue3-recaptcha-v2

app.component('font-awesome-icon', FontAwesomeIcon) // Needed for @fortawesome

app.mount('#app')
