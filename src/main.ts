import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhoneAlt,
  faEnvelope,
  faHome,
  faComment,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Element from "element-ui";
// styles
import "element-ui/lib/theme-chalk/index.css";

library.add(faPhoneAlt, faEnvelope, faHome, faComment, faCalendarAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(Element);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
