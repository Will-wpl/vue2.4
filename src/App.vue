<template>
  <div id="app">
    <div v-if="loggedIn" class="wholeH">
      <!-- <el-container id="header"> -->
      <el-row>
        <el-col :span="10">
          <div class="grid-content">
            <Header />
          </div>
        </el-col>
        <el-col :span="3" :offset="11">
          <div class="logout">
            <el-dropdown>
              <span class="el-dropdown-link">
                Mr. Justin
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>手册</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
      <!-- </el-container> -->
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
    <Login v-if="!loggedIn" @go="showMainPage" />
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
      this.isNavUnfoldShow = false;
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.el-dropdown-link {
  cursor: pointer;
  color: rgba(0, 102, 204, 1);
}

.logout {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:25px;
}
.el-icon-arrow-down {
  font-size: 15px;
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