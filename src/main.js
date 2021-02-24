import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import store from "./store";
import "vuetify/dist/vuetify.min.css";
import vuetify from "./plugins/vuetify";

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
