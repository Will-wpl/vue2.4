<template>
  <div v-show="isPopupSideNav">
    <i
      @click="hideSideNav"
      style="float: right; margin-right:3px; margin-top: 3px;"
      class="el-icon-s-fold"
    ></i>
    <el-aside width="200px">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <router-link class="event-link" :to="{ name: 'Overview' }">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span>首页</span>
          </el-menu-item>
        </router-link>
        <router-link class="event-link" :to="{ name: 'InventoryReport', params: { id: 1 }}">
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span>进销存报告</span>
          </el-menu-item>
        </router-link>

        <!-- <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>进销存报告</span>
          </template>
          <el-menu-item-group title>
            <router-link class="event-link" :to="{ name: 'InventoryReport', params: { id: 1 }}">
              <el-menu-item index="2-1">item one</el-menu-item>
            </router-link>
            <router-link class="event-link" :to="{ name: 'InventoryReport', params: { id: 2 }}">
              <el-menu-item index="2-2">item one</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>-->
        <router-link class="event-link" :to="{ name: 'DynamicQuery'}">
          <el-menu-item index="3">
            <i class="el-icon-search"></i>
            <span>动态查询</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item-group title>
            <router-link class="event-link" :to="{ name: 'PermissionSetting' }">
              <el-menu-item index="4-1">用户权限设置</el-menu-item>
            </router-link>
            <router-link class="event-link" :to="{ name: 'InventoryReport', params: { id: 2 }}">
              <el-menu-item index="4-2">申诉窗口期设置</el-menu-item>
            </router-link>
            <router-link class="event-link" :to="{ name: 'DynamicReport'}">
              <el-menu-item index="4-3">申诉报表</el-menu-item>
            </router-link>
            <router-link class="event-link" :to="{ name: 'InventoryReport', params: { id: 3 }}">
              <el-menu-item index="4-4">操作日志记录</el-menu-item>
            </router-link>
            <router-link class="event-link" :to="{ name: 'RemindSetting'}">
              <el-menu-item index="4-5">提醒设置</el-menu-item>
            </router-link>
            <router-link class="event-link" :to="{ name: 'AppealReasonSetting'}">
              <el-menu-item index="4-6">申诉理由设置</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
    isPopupSideNav: Boolean
  },
  data() {
    return {
      isSideNavShow: true
    };
  },
  methods: {
    hideSideNav() {
      this.isSideNavShow = false;
      this.$emit("clicked", "this.isSideNavShow");
    }
  }
};
</script>

<style scoped>
.event-link {
  color: #ffffff;
  text-decoration: none;
}
</style>