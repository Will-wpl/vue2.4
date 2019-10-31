import Vue from "vue";
import Vuex from "vuex";
import * as login from '@/store/modules/login.js'
import * as home from '@/store/modules/home.js'
import * as steps from '@/store/modules/steps.js'
import getters from '@/store/getters.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    home,
    steps
  },
  getters
});
