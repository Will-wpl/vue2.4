<template>
  <div>
      <el-container id="header">
        <el-header>
          <img id="RocheMark" src="../assets/RoucheBrandMark.png" />
          <span class="TitleWords">渠道数据管理平台</span>
        </el-header>
      </el-container>
      <el-container>
      <el-row class="tac">
        <el-col :span="4">

        </el-col>

        <el-col id="Overview" :span="20">
          <div>
            <!-- <img src="../assets/DataMgtBackgroupPic.png" /> -->
            <AppealOverview />
          </div>
        </el-col>
      </el-row>
    </el-container>
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
#Overview {
  background-image: url("../assets/DataMgtBackgroupPic.png");
  /* height: auto;  */
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