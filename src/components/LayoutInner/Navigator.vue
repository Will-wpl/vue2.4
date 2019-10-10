<template>
  <el-aside width="200px" >
          <el-menu
            router
            :default-active="$route.path"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span>首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>进销存报告</span>
              </template>
              <el-menu-item-group title>
                <el-menu-item index="/InventoryReport/item one">item one</el-menu-item>
                <el-menu-item index="/InventoryReport/item two">item two</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/DynamicSearch/1">
              <i class="el-icon-setting"></i>
              <span>动态查询</span>
            </el-menu-item>
          </el-menu>
          </el-aside>


</template>

<script>
export default {

}
</script>

<style>

</style>