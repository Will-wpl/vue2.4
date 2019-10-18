<template>
  <el-header>
    <img id="RocheMark" src="@/assets/RoucheBrandMark.png" />
    <span class="TitleWords">渠道数据管理平台</span>

    <i @click="logout" class="el-icon-document">Log Out</i>
  </el-header>
  
</template>

<script>
import store from "@/store/store";
export default {
  methods: {
    logout () {
      store.dispatch('login/logout')
    }
  }
};
</script>

<style scoped>
#RocheMark {
  width: 90px;
}

#header {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-header{
  display: flex; align-items: center; 
}
.TitleWords {
  font-size: 28px;
  font-family: "PingFang SC";
  font-weight: bold;
  color: rgba(0, 102, 204, 1);
  margin-left: 10px;
}
</style>