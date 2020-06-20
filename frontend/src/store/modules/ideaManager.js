import axios from "axios";

export default {
  state: {
    ideaList: null
  },
  getters: {
    getIdeaList(state) {
      return state.ideaList;
    }
  },
  mutations: {
    setIdeaList(state, value) {
      return (state.ideaList = value);
    }
  },
  actions: {
    updateIdeaList({ commit, getters }) {
      const host = getters.getHost;
      fetch(`${host}/api/records/`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          commit("setIdeaList", data);
        });
    },
    saveIdea({ getters }, data) {
      const host = getters.getHost;

      axios.post(`${host}/api/records/`, data).then(response => {
        console.log("response", response);
      });
    },
    likeIdea({ getters, commit }, ideaId) {
      const host = getters.getHost;
      const user = getters.getUser;

      if (!user) {
        commit("setOpenLoginPopup", true);
        return;
      }
      // console.log(userId, ideaId, host)

      axios
        .post(`${host}/api/records/action`, {
          idea_id: ideaId,
          userid: user.id,
          type: 1
        })
        .then(response => {
          console.log("response", response);
        });
    },
    dislikeIdea({ getters, commit }, ideaId) {
      const host = getters.getHost;
      const user = getters.getUser;

      if (!user) {
        commit("setOpenLoginPopup", true);
        return;
      }
      // console.log(userId, ideaId, host)

      axios
        .post(`${host}/api/records/action`, {
          idea_id: ideaId,
          userid: user.id,
          type: 0
        })
        .then(response => {
          console.log("response", response);
        });
    },
    starIdea() {
      console.log("star");
    }
  }
};
