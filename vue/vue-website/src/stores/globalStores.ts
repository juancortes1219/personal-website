import { createStore } from 'vuex'

interface PreloaderState {
  isLoading: boolean
}

const preloaderModule = {
  namespaced: true,
  state: {
    isLoading: true
  } as PreloaderState,
  mutations: {
    setLoading(state, isLoading: boolean) {
      state.isLoading = isLoading
    }
  }
}

// globalStore
export const globalStore = createStore({
  modules: {
    preloader: preloaderModule
  }
})
