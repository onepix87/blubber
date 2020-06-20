export default {
  state: {
    loading: false,
    currentPage: ["Home"],
    host: "http://51.83.185.40"
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getHost(state) {
      return state.host;
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
