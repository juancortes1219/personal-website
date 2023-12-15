import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// Imports for BootstrapVue
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        // Needed for Swiper
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('swiper-')
        }
      }
    }),
    vueJsx(),
    // Component resolver for Bootstrap-Vue
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Needed for MDBootstrap
  css: {
    devSourcemap: true,
  },
})
