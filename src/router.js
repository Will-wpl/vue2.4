import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Overview from "@/views/OverviewPage/Overview.vue"
import InventoryReport from "@/views/InventoryReportPage/InventoryReport.vue"
import DynamicQuery from "@/views/DynamicQuery/DynamicQuery.vue"
import PermissionSetting from "@/views/SystemManagement/PermissionSetting.vue"
import RemindSetting from "@/views/SystemManagement/RemindSetting.vue"
import Login from '@/views/Login.vue';
import InventoryReportAppeal from "@/views/InventoryReportPage/InventoryReportAppeal.vue"
import DynamicReport from "@/views/SystemManagement/DynamicReport.vue"
import AppealReasonSetting from "@/views/SystemManagement/AppealReasonSetting.vue"

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
    },
    {
      path: '/PermissionSetting',
      name: 'PermissionSetting',
      component: PermissionSetting,
      props: true
    },
    {
      path: '/RemindSetting',
      name: 'RemindSetting',
      component: RemindSetting,
      props: true
    },{
      path: '/InventoryReportAppeal:id',
      name: 'InventoryReportAppeal',
      component: InventoryReportAppeal,
      props: true
    },{
      path: '/DynamicReport',
      name: 'DynamicReport',
      component: DynamicReport,
      props: true
    },{
      path: '/AppealReasonSetting',
      name: 'AppealReasonSetting',
      component: AppealReasonSetting,
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  }
  next()
})

export default router
