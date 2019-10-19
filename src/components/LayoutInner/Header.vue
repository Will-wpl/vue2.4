<template>
  <el-header>
    <img id="RocheMark" src="@/assets/RoucheBrandMark.png" />
    <span class="TitleWords">渠道数据管理平台</span>
    <div class="posR">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{userName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-switch-button" @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import store from "@/store/store";
export default {
  methods: {
    logout() {
      store.dispatch("login/logout");
    }
  },
  data() {
    return {
      userName: sessionStorage.loginToken ? sessionStorage.loginToken : ""
    };
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
.el-header {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}
.posR {
  position: absolute;
  right: 30px;
  color: #007ac3;
  font-size: 20px;
}
.TitleWords {
  font-size: 28px;
  font-family: "PingFang SC";
  font-weight: bold;
  color: rgba(0, 102, 204, 1);
  margin-left: 10px;
}
</style>