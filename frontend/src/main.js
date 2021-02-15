import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTypedJs from 'vue-typed-js'
import router from "./router/index";
import VueGraph from "vue-graph";
import "./registerServiceWorker";

Vue.use(VueGraph);
Vue.use(VueTypedJs);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
