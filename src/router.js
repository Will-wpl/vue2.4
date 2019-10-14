import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Overview from "@/views/OverviewPage/Overview.vue"
import InventoryReport from "@/views/InventoryReportPage/InventoryReport.vue"
import DynamicQuery from "@/views/DynamicQuery/DynamicQuery.vue"
import Login from '@/views/Login.vue';


Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview,
      props: true
    },
    {
      path: '/InventoryReport/:id',
      name: 'InventoryReport',
      component: InventoryReport,
      props: true
    },
    {
      path: '/DynamicQuery',
      name: 'DynamicQuery',
      component: DynamicQuery,
      props: true
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
});
