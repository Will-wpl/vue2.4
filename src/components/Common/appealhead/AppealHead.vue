<template>
  <div class="row align-items-start">
          <div class="col-sm col-md col-lg">
            <h4 class="appeal-title">
              <div class="title">申诉单号 {{ headData.appealNumber }}</div>
              <div class="row content">
                <div class="col-sm col-md col-lg-4 borderR">
                  申诉日期
                  <span>{{ headData.appealTime }}</span>
                </div>
                <div class="col-sm col-md col-lg-4">
                  申请人
                  <span>{{ headData.appealName }}</span>
                </div>
              </div>
            </h4>
          </div>
          <div class="col-sm col-md col-lg padO">
            <Step />
          </div>
        </div>
</template>
<script>
import Step from "@/components/InventReportComponents/Step.vue";
export default {
  name: "AppealHead",
  components: {
    Step
  },
  methods: {

  },
  props:["headData"],
  data() {
    return {
      
    }
  },
  mounted() {
    //this.pageId = this.$route.params.id;
  },
  watch: {
    $route(path) {
      //this.pageId = path.params.id;
    }
  }
};
</script>
<style scoped>
.el-main {
  padding: 0 15px;
}
.borderR {
  border-right: 8px solid #ddedfa;
}
.container-fluid {
  padding: 0;
}
.align-items-start {
  background: #f8f9fd;
  padding: 10px 0px;
}
.appeal-title {
  font-size: 24px;
  color: #a2a0a2;
  border-left: 4px solid #007ac3;
  padding-left: 15px;
  margin: 0;
}
.appeal-title .title {
  color: #000;
  margin-bottom: 10px;
}
.appeal-title .content {
  color: #707070;
  font-size: 16px;
}
.appeal-title .content span {
  color: #007ac3;
}
.padO{padding: 0;}
</style>