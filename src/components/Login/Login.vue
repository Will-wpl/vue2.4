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
        <errorMsg
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
        </errorMsg>
        <errorMsg
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
        </errorMsg>
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
  mounted(){
    if(sessionStorage.loginToken){
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
  background: #246ccd;
  outline: none;
}
h4 {
  text-align: left;
  color: #014282;
}
.container-fluid {
  height: 100%;
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

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  text-align: center;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  text-align: center;
}

.el-carousel {
  width: 250px;
  align-self: left;
  margin-bottom: 10px;
  border-radius: 25px;
  text-align: center;
}
</style>