<template>
  <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <router-link class="event-link" :to="{ name: 'Overview' }">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span>首页</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>进销存报告</span>
        </template>
        <el-menu-item-group title>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item one</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <router-link class="event-link" :to="{ name: 'DynamicQuery' }">
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span>动态查询</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-aside>
</template>

<script>
export default {};
</script>

<style scoped>
.event-link {
  color: #ffffff;
  text-decoration: none;
}
</style>