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
import axios from 'axios'
import errorMsg from '@/components/Common/CommonVuelidate.vue';
import httpService from '@/services/services/Services.js';

Vue.prototype.$axios = httpService;
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.component('el-errorMsg', errorMsg);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('login/SET_USER_DATA', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('login/logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount("#app");
