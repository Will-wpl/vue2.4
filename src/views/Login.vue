<template>
  <el-main>
    <div class=".container-fluid">
      <div class="row">
        <div class="col-4">
          <div class=".container-fluid">
            <div class="row">
              <div class="col4">
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
            <div class="row">
              <i class="dms-icon-user"></i>
              <input type="text" class="dms-login-input login-input-usr" placeholder="用户名" />
              <i class="dms-icon-pass"></i>
              <input type="password" class="dms-login-input login-input-pass" placeholder="密码" />
              <div>
                <a class="login-btn">登 录</a>
              </div>
            </div>
          </div>
        </div>
        <div id="leftBg" class="col-8"></div>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {};
</script>

<style scoped>
#leftBg {
  background-image: url("~@/assets/background_login.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
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

.login-btn {
  display: block;
  color: #fff !important;
  width: 250px;
  height: 38px;
  border-radius: 20px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
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
  margin-left: 90px;
  margin-top: 30px;
}

.dms-login-logo-tt {
  color: #007ac3;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 5px;
  position:absolute;
}
</style>