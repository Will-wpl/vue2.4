import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Layout from "./views/LayoutInner.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL
 });
