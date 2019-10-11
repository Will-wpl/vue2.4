<template>
  <el-aside width="170px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <router-link class="event-link" :to="{ name: 'Overview' }">
        <el-menu-item>
          <i class="el-icon-menu"></i>
          <span>首页</span>
        </el-menu-item>
      </router-link>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>进销存报告</span>
        </template>
        <el-menu-item-group title>
          <router-link class="event-link" :to="{ name: 'InventoryReport', params: { id: 1 }}">
            <el-menu-item>item one</el-menu-item>
          </router-link>
          <router-link class="event-link" :to="{ name: 'InventoryReport', params: { id: 2 }}">
            <el-menu-item>item one</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <router-link class="event-link" :to="{ name: 'DynamicQuery'}">
        <el-menu-item>
          <i class="el-icon-setting"></i>
          <span>动态查询</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  props: {
    event: Object
  }
};
</script>

<style scoped>
.event-link {
  color: #ffffff;
  text-decoration: none;
}
</style>