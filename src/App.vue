<template>
  <div id="app">
    <div v-if="loginStatus" class="wholeH">
      <el-container id="header">
        <Header />
      </el-container>
      <el-container class="wholeH">
        <i
          @click="showSideNav"
          v-show="isNavUnfoldShow"
          style="float: right; margin-left:3px; margin-top: 3px;"
          class="el-icon-s-unfold"
        ></i>
        <Navigator @clicked="hideSideNav" :isPopupSideNav="!isNavUnfoldShow" />
        <el-container class="pd">
          <router-view />
        </el-container>
      </el-container>
    </div>
    <!-- <Layout /> -->
    <Login v-if="!loginStatus" @go="showMainPage" />
  </div>
</template>

<script>
// import Layout from "@/views/LayoutInner.vue";
import Header from "@/components/LayoutInner/Header.vue";
import Navigator from "@/components/LayoutInner/Navigator.vue";
import Login from "@/views/Login.vue";
export default {
  components: {
    Header,
    Navigator,
    Login
  },
  data() {
    return {
      isNavUnfoldShow: false,
      loginStatus: false
    };
  },
  methods: {
    showSideNav() {
      this.isNavUnfoldShow = false;
    },
    hideSideNav(value) {
      this.isNavUnfoldShow = value;
      console.log(value); // someValue
    },
    showMainPage() {
      this.loginStatus = true;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.pd {
  padding-bottom: 60px;
}
.wholeH {
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* .el-main {
  background-image: url("~@/assets/DataMgtBackgroupPic.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  margin-right: 1%;
} */

body {
  margin: 0;
}
</style>
