<template>
  <div id="app">
    <div>
      <el-container id="header">
        <Header />
      </el-container>
      <el-container>
        <Navigator />

        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
    <!-- <Layout /> -->
  </div>
</template>

<script>
// import Layout from "@/views/LayoutInner.vue";
import Header from "@/components/LayoutInner/Header.vue";
import Navigator from "@/components/LayoutInner/Navigator.vue";

export default {
  components: {
    Header,
    Navigator
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

.el-main {
  background-image: url("./assets/DataMgtBackgroupPic.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
}
</style>
