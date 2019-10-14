<template>
  <el-main>
    <el-col class="loginWhole">
      <h4 class="login-top">
        <img src="@/assets/RoucheBrandMark.png" />渠道数据管理平台
      </h4>
      <el-col class="login-title">
        渠道数据管理平台
        <span>Channel Data Management Platform</span>
      </el-col>
      <el-col class="login-info">
        <el-errorMsg
          :error="$v.userName.$error"
          type
          :msgList="[
          {
            show:!$v.userName.required,
            text:'用户名不能为空'}
          ]"
        >
          <el-input
            placeholder="用户名"
            class="input-inner"
            prefix-icon="el-icon-s-custom"
            v-model="userName"
          ></el-input>
        </el-errorMsg>
        <el-errorMsg
          :error="$v.password.$error"
          type
          :msgList="[
          {
            show:!$v.password.required,
            text:'密码不能为空'}
          ]"
        >
          <el-input
            type="password"
            class="input-inner"
            placeholder="密码"
            prefix-icon="el-icon-key"
            v-model="password"
          ></el-input>
        </el-errorMsg>
        <el-button type="primary" round @click="goPage">登 录</el-button>
      </el-col>
    </el-col>
  </el-main>
</template> 

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  components: {},
  methods: {
    goPage() {
      this.$v.userName.$touch();
      if (!this.$v.userName.required) {
        return;
      }
      this.$v.password.$touch();
      if (!this.$v.password.required) {
        return;
      }
      sessionStorage.loginToken = this.userName;
      this.$emit("go");
    }
  },
  mounted() {
    if (sessionStorage.loginToken) {
      this.$emit("go");
    }
  },
  validations: {
    userName: {
      required
    },
    password: {
      required
    }
  },
  data() {
    return {
      userName: "",
      password: ""
    };
  }
};
</script>
<style>
input.el-input__inner {
  border-radius: 100px;
  border-color: #bcdbf6;
}
i.el-input__icon {
  color: #5888be;
}
</style>
<style scoped>
.loginWhole {
  height: 100%;
  background: #fff;
  width: 35%;
}
.login-top {
  margin: 30px 20px;
}
.login-top img {
  width: 75px;
  margin-right: 10px;
}
.login-title {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin: 60px auto;
  color: #1c5ca3;
}
.login-title span {
  display: block;
  font-size: 15px;
  margin-top: 10px;
}
.login-info {
  width: 46%;
  margin: 70px auto;
  display: block;
  float: none;
}
.login-info button {
  width: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(42, 143, 226),
    rgba(27, 62, 177)
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    rgba(42, 143, 226),
    rgba(27, 62, 177)
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    rgba(42, 143, 226),
    rgba(27, 62, 177)
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #2a8fe2, #1b3eb1);
  outline: none;
}
h4 {
  text-align: left;
  color: #014282;
}
.el-main {
  background-image: url("~@/assets/DataMgtBackgroupPic.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  height: 100%;
  padding: 0;
}
</style>