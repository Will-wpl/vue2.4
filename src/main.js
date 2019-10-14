import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';
import errorMsg from '@/components/Common/CommonVuelidate.vue';
// import {get, post, patch, put} from './server/httpServer'
// Vue.prototype.$get = get;
// Vue.prototype.$post = post;
// Vue.prototype.$patch = patch;
// Vue.prototype.$put = put;
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.component('el-errorMsg',errorMsg);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
