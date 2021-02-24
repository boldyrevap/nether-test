import Axios from "axios";

export default {
  state: {
    processing: false,
    error: null,
    packageList: [],
    query: "",
    currentPackage: {},
  },
  mutations: {
    SET_PROCESSING(state, payload) {
      state.processing = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
    SET_PACKAGE_LIST(state, payload) {
      state.packageList = payload;
    },
    SET_QUERY(state, payload) {
      state.query = payload;
    },
    SET_CURRENT_PACKAGE(state, payload) {
      state.currentPackage = payload;
    },
  },
  getters: {
    getProcessing: (state) => state.processing,
    getError: (state) => state.error,
    getPackageList: (state) => state.packageList,
    getCurrentPackage: (state) => state.currentPackage,
  },
  actions: {
    async SEARCH_PACKAGES({ commit, state }, { limit = 10, from = 1 }) {
      await Axios({
        method: "get",
        url: `http://registry.npmjs.com/-/v1/search?text=${state.query}&size=${limit}&from=${from}`,
      })
        .then((response) => {
          commit("SET_PACKAGE_LIST", response.data);
        })
        .catch((error) => {
          return console.log([
            "Ошибка! Не получилось получить список пакетов",
            error.response,
          ]);
        });
    },
    async GET_PACKAGE({ commit, state }, { name }) {
      await Axios({
        method: "get",
        url: `https://data.jsdelivr.com/v1/package/npm/${name}`,
      })
        .then((response) => {
          commit("SET_CURRENT_PACKAGE", response.data);
        })
        .catch((error) => {
          return console.log([
            "Ошибка! Не получилось получить список пакетов",
            error.response,
          ]);
        });
    },
  },
};
