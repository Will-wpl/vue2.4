<template>
  <div id="wrapper" class="container-fluid">
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="container-fluid">
          <div class="row">
            <div style class="col-lg-4 col-sm-12 headerIcon">
              <img src="../assets/icon_logo_b.png" />
              <span class="dms-login-logo-tt">CDMS</span>
            </div>
          </div>

          <div class="row mt">
            <div class="dms-login-content-tt">
              <span class="dms-login-content-largett">商业管理系统</span>
              <p>China Dealer Management System</p>
            </div>
          </div>
          <div class="row marginTop">
            <div class="container">
              <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                  <el-errorMsg
                    :error="$v.userName.$error"
                    :msgList="[
                    {
                      show:!$v.userName.required,
                      text:'用户名不能为空'}
                    ]"
                  />
                    <el-input
                      placeholder="用户名"
                      class="formInput"
                      prefix-icon="el-icon-s-custom"
                      v-model="userName"
                    ></el-input>
                  
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row marginTop">
                <div class="col-2"></div>
                <div class="col-8">
                  <el-errorMsg
                    :error="$v.password.$error"
                    :msgList="[
                      {
                        show:!$v.password.required,
                        text:'密码不能为空'}
                      ]"
                  />
                    <el-input
                      type="password"
                      class="formInput"
                      placeholder="密码"
                      prefix-icon="el-icon-key"
                      v-model="password"
                    ></el-input>
                  
                </div>
                <div class="col-2"></div>
              </div>

              <div class="row marginTop">
                <div class="col-2"></div>
                <div class="col-8">
                  <el-button class="login-btn" type="primary" round @click="login">登 录</el-button>
                </div>
                <div class="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="leftBg" class="col-lg-8"></div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import store from "@/store/store";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
      error: null
    };
  },
  methods: {
    login() {
      this.$v.userName.$touch();
      if (!this.$v.userName.required) {
        return;
      }
      this.$v.password.$touch();
      if (!this.$v.password.required) {
        return;
      }
      store
        .dispatch("login/login", {
          userName: this.userName,
          password: this.password
        })
        .then(() => {
          console.log("Suceeded!");
          this.$router.push({ name: "Overview" });
        })
        .catch(err => {
          console.log("Login Outer Failed");
          console.log(err);
          this.error = err.response;
        });
    }
  },
  validations: {
    userName: {
      required
    },
    password: {
      required
    }
  }
};
</script>

<style >
#leftBg {
  background-image: url("~@/assets/background_login.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
}

.marginTop {
  margin-top: 10px;
}

.formInput input {
  border-radius: 100px !important;
  border-color: #bcdbf6 !important;
}
.formInput i {
  color: #5888be !important;
}

.mt {
  margin-top: 50px;
}

.dms-login-content {
  position: relative;
  width: 38%;
  height: 100%;
  background: #fff;
  padding: 20px 50px 100px 20px;
}

.dms-login-logo {
  margin-bottom: 60px;
}

.dms-login-content-tt {
  margin-left: 90px;
  color: #007ac3;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
}

.dms-login-content-tt p {
  font-size: 14px;
  margin-top: 8px;
}
.dms-login-content-largett {
  font-size: 20px;
  letter-spacing: 12px;
  margin-left: 8%;
}

.dms-login-content .dms-icon-user,
.dms-login-content .dms-icon-pass {
  margin-left: 100px;
  position: relative;
  top: 33px;
}

.dms-login-input {
  display: block;
  width: 250px;
  height: 38px;
  line-height: 38px;
  border: 0;
  border: 1px solid #9ac8e7;
  border-radius: 30px;
  background: none;
  outline: none;
  margin-bottom: 10px;
  padding-left: 40px;
  margin-left: 90px;
  font-size: 14px;
  line-height: 34px;
}

html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}

#wrapper {
  height: 100%;
}

#wrapper > div {
  height: 100%;
}

.headerIcon {
  margin-top: 3%;
}

.login-btn {
  width: 100%;
  text-align: center;
}

.dms-login-logo-tt {
  color: #007ac3;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 5px;
  position: absolute;
}
</style>