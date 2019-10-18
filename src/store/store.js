import Vue from "vue";
import Vuex from "vuex";
import * as login from '@/store/modules/login.js'
import * as home from '@/store/modules/home.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    home
  },
  state: {
    
  }
});
