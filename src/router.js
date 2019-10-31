import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Overview from "@/views/OverviewPage/Overview.vue"
import InventoryReport from "@/views/InventoryReportPage/InventoryReport.vue"
import DynamicQuery from "@/views/DynamicQuery/DynamicQuery.vue"
import PermissionSetting from "@/views/SystemManagement/PermissionSetting.vue"
import RemindSetting from "@/views/SystemManagement/RemindSetting.vue"
import Login from '@/views/Login.vue';
import RaiseAppeal from "@/views/RaiseAppeal/RaiseAppeal.vue"
import DynamicReport from "@/views/SystemManagement/DynamicReport.vue"
import AppealReasonSetting from "@/views/SystemManagement/AppealReasonSetting.vue"
import OperationLog from "@/views/SystemManagement/OperationLog.vue"
import WindowPeriodSetting from "@/views/SystemManagement/WindowPeriodSetting.vue"
import UpLoad from "@/views/UpLoadFile/UpLoad.vue"
import ContactProveFile from "@/views/ContactProveFile/ContactProveFile.vue"
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
      path: '/RaiseAppeal:id',
      name: 'RaiseAppeal',
      component: RaiseAppeal,
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
    },{
      path: '/OperationLog',
      name: 'OperationLog',
      component: OperationLog,
      props: true
    },{
      path: '/WindowPeriodSetting',
      name: 'WindowPeriodSetting',
      component: WindowPeriodSetting,
      props: true
    },{
      path: '/UpLoad',
      name: 'UpLoad',
      component: UpLoad,
      props: true
    },{
      path: '/ContactProveFile',
      name: 'ContactProveFile',
      component: ContactProveFile,
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
