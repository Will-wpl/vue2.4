<template>
  <div id="app">
    <div v-if="loginStatus" class="wholeH">
      <el-container id="header">
        <Header />
      </el-container>
      <el-container class="wholeH">
        <Navigator :isPopupSideNav="!isNavUnfoldShow" />
        <el-container class="pd posR">
          <div :class="['sideNav',isNavUnfoldShow?'bgRight':'']" @click="showSideNav"></div>
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
import store from "@/store/store";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    Navigator,
    Login
  },
  data() {
    return {
      isNavUnfoldShow: false,
      loginStatus: false,
      userName: "",
      password: "",
      error: null
    };
  },
  methods: {
    showSideNav() {
      this.isNavUnfoldShow = !this.isNavUnfoldShow;
    },
    hideSideNav(value) {
      this.isNavUnfoldShow = value;
      console.log(value); // someValue
    },
    showMainPage() {
      this.loginStatus = true;
    },
    logout() {
      store.dispatch("login/logout");
    }
  },
  computed: {
    ...mapState(["login"]),
    ...mapGetters("login", ["loggedIn"])
  }
};
</script>

<style>
.sideNav {
  width: 25px;
  height: 25px;
  position: absolute;
  left: 0px;
  top: 10px;
  text-align: center;
  background: #fff url("~@/assets/nav-left.png") no-repeat center;
  background-size: 15px;
  cursor: pointer;
}
.bgRight{
  background: #fff url("~@/assets/nav-right.png") no-repeat center;
  background-size: 15px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.posR {
  position: relative;
}

/* .el-dropdown-link {
  cursor: pointer;
  color: rgba(0, 102, 204, 1);
} */

/* .logout {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:25px;
} */
/* .el-icon-arrow-down {
  font-size: 15px;
} */
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