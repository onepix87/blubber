import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import moment from "moment";

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;

import {
  Button,
  Badge,
  Menu,
  Steps,
  Progress,
  Tooltip,
  Modal,
  FormModel,
  Form,
  Input,
  Icon,
  DatePicker,
  Select,
  Upload,
  Layout,
  PageHeader,
  Avatar,
  Card
} from "ant-design-vue";
const { Step } = Steps;
// Vue.use(require('vue-moment'));
Vue.use(Layout);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Progress);
Vue.use(FormModel);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Tooltip);
Vue.use(PageHeader);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Upload);
Vue.use(Avatar);
Vue.use(Card);
Vue.use(Badge);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
