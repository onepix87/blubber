import Vue from "vue";
import Vuex from "vuex";

import appManager from "./modules/appManager";
import authManager from "./modules/authManager";
import ideaManager from "./modules/ideaManager";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    appManager,
    authManager,
    ideaManager
  }
});
