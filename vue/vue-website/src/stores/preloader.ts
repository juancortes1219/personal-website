import { createStore } from 'vuex';

interface AppState {
  isLoading: boolean;
}

export const store = createStore({
  state: {
    isLoading: true,
  } as AppState,
  mutations: {
    setLoading(state, isLoading: boolean) {
      state.isLoading = isLoading;
    },
  },
});
