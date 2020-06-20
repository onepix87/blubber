import axios from "axios";

export default {
  state: {
    commentList: null,
    commentError: null
  },
  getters: {
    getCommentList(state) {
      return state.commentList;
    },
    getCommentError(state) {
      return state.commentError;
    }
  },
  mutations: {
    setCommentList(state, value) {
      state.commentList = value;
    },
    setCommentError(state, value) {
      state.commentError = value;
    }
  },
  actions: {
    sendComment({ commit, getters }, comment) {
      console.log("comment vuex", comment);
      const host = getters.getHost;

      axios.post(`${host}/api/comments/`, comment).catch(error => {
        console.log("Ошибка отправки сообщения", error);
        commit("setCommentError", "Ошибка отправки сообщения");
      });
    }
  }
};
