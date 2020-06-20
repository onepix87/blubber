// import { loginUrl, postDataWithResponse } from "../../utils/fetch-utils";
import axios from "axios";

export default {
  state: {
    user: null,
    openLoginPopup: false,
    authError: null
  },
  getters: {
    isOpenLoginPopup(state) {
      return state.openLoginPopup;
    },
    getUser(state) {
      return state.user;
    },
    getAuthError(state) {
      return state.authError;
    }
  },
  mutations: {
    setOpenLoginPopup(state, value) {
      state.openLoginPopup = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setError(state, value) {
      state.authError = value;
    }
  },
  actions: {
    signUp({ commit, getters }, { login, password }) {
      const formData = new FormData();
      formData.append("username", login);
      formData.append("password", password);
      console.log("login data", login, password);
      // const userJson = await postDataWithResponse(loginUrl, formData);
      const host = getters.getHost;

      axios
        .post(`${host}/profile/login/`, formData)
        .then(response => {
          commit("setUser", response.data);
          commit("setOpenLoginPopup", false);
        })
        .catch(error => {
          console.log("Ошибка авторизации", error);
          commit("setError", "Ошибка авторизации");
        });
      // fetch(`${host}/profile/login/`, {
      //   method: "POST", // *GET, POST, PUT, DELETE, etc.
      //   // mode: "no-cors", // no-cors, *cors, same-origin
      //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: "omit", // include, *same-origin, omit
      //   "Access-Control-Allow-Origin": "*",
      //   headers: {
      //     "Content-Type": "application/json"
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   // body: JSON.stringify(data)
      //   body: JSON.stringify({ username: login, password })
      // })
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(data => {
      //     commit("setUser", data);
      //   });
    }
  }
};
