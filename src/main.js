import Vue from "vue";
import {
  Navbar,
  Image,
  Button,
  Field,
  Menu,
  Dropdown,
  Sidebar,
  Switch,
  Modal,
  Slider,
  Tag,
  Tooltip,
  Numberinput
} from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import router from "./router";
import VueMeta from "vue-meta";
import VueFriendlyIframe from "vue-friendly-iframe";

Vue.use(VueMeta);
Vue.use(VueFriendlyIframe);

//Buefy Components
Vue.use(Navbar);
Vue.use(Image);
Vue.use(Button);
Vue.use(Field);
Vue.use(Menu);
Vue.use(Dropdown);
Vue.use(Sidebar);
Vue.use(Switch);
Vue.use(Modal);
Vue.use(Slider);
Vue.use(Tag);
Vue.use(Tooltip);
Vue.use(Numberinput);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
