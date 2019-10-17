import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';
import errorMsg from '@/components/Common/CommonVuelidate.vue';
import axios from 'axios'


Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(axios);
Vue.component('el-errorMsg',errorMsg);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
