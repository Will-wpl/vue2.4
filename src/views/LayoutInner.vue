<template>
  <div>
    <el-container id="header">
      <el-header>
        <img id="RocheMark" src="../assets/RoucheBrandMark.png" />
        <span class="TitleWords">渠道数据管理平台</span>
      </el-header>
    </el-container>

    <div>
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span>首页</span>
            </el-menu-item>
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
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span>动态查询</span>
            </el-menu-item>
          </el-menu>
        </el-col>

        <el-col id="Overview" :span="20">
            <div >
                <img src="../assets/DataMgtBackgroupPic.png" />
                <AppealOverview /></div>

          
          
        </el-col>
      </el-row>
    </div>
  </div>
</template>



<script>
import AppealOverview from "@/views/OverviewPage/Overview.vue";

export default {
  name: "Overview",
  components: {
    AppealOverview
  }
};
</script>

<style>
#Overview{
    background-image: url("../assets/DataMgtBackgroupPic.png");
    height: auto;
}

#header {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

#RocheMark {
  width: 95px;
  height: 60px;
  margin-left: 0px;
  float: left;
}

.TitleWords {
  height: 37px;
  font-size: 28px;
  font-family: "PingFang SC";
  font-weight: bold;
  line-height: 32px;
  color: rgba(0, 102, 204, 1);
  opacity: 1;
  float: left;
  margin-top: 15px;
  margin-left: 10px;
}
</style>