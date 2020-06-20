export default {
  state: {
    loading: false,
    currentPage: ["Home"]
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    getCurrentPage(state) {
      return state.currentPage;
    }
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setCurrentPage(state, value) {
      state.currentPage = value;
    }
  }
};
