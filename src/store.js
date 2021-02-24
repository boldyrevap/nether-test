import Vue from "vue";
import Vuex from "vuex";
import generalModule from "./store/general";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generalModule,
  },
});
