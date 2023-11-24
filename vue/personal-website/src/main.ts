// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Imports for BootstrapVue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Imports from VueTyper
import VueTyper from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Registering VueTyper
app.use(VueTyper)

app.mount('#app')
