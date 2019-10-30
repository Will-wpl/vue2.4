<template>
  <el-main>
      <div class="container-fluid">
        <div class="row">
            <div class="col-sm col-md col-lg-12 detail-title">{{event.name}}</div>
            <div class="col-sm col-md col-lg-12 detail-box">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item v-for="(item,index) in event.formlist" :key="index" :title="item.title" :name="index">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
  </el-main>
</template>
<script>
import { conditionConfig, tableData } from "../../assets/mockdata/mockdata";
export default {
  name: "InventoryReportAppealDetail",
  props: {
      event:Object
  },
  components: {
  },
  methods: {
    handleChange(val) {
        console.log(val);
      }
  },
  data() {
    return {
        activeNames: [0]
    };
  },
  mounted() {
    this.pageId = this.$route.params.id;
  },
  watch: {
    $route(path) {
      this.pageId = path.params.id;
    }
  }
};
</script>
<style>
.el-drawer__header {
  margin-bottom: 15px !important;
}
.el-table td,
.el-table th {
  padding: 5px 0px !important;
  font-size: 13px;
}
.el-collapse-item__header,.el-collapse-item__content{ padding: 0px 15px;}
</style>
<style scoped>
.el-main {
  padding: 0 15px;
}
.container-fluid {
  padding: 0;
}
.detail-box {
  margin-top: 10px;
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
.appeal-left {
  background: #f8f9fd; padding: 0;
}
.appeal-left-search {
  margin: 15px;
}
.appeal-left-menu{
  width: 100%;
}
.el-collapse-item{margin-bottom: 10px; border:1px solid #C8C4C5;}
.line{ height: 2px; background: #e4e5e6}
.borderR {
  border-right: 8px solid #ddedfa;
}
.mb {
  margin-bottom: 10px;
}
.filterbox {
  border-bottom: 1px solid #d6d6d6;
  padding: 10px;
  margin: 0;
}
.posBtn {
  position: absolute;
  bottom: 0px;
  width: 100%;
  text-align: right;
  padding: 15px;
  background: #fff;
  box-shadow: 0px 0px 8px #ccc;
}
h4 {
  text-align: left;
  color: #297fd5;
}
h4 span {
  color: #a2a0a2;
  font-size: 14px;
}
.white_bg {
  background: #fff;
  padding: 10px 0px;
}
.total {
  color: #a2a0a2;
  font-size: 15px;
  margin: 0;
}
.total span {
  color: #297fd5;
}
.report-title {
  font-size: 12px;
  color: #a2a0a2;
}
.textR {
  text-align: right;
}
.mt20 {
  margin-top: 20px;
}
.el-main {
  background: #eef2f6;
}
.el-select,
.el-input {
  width: 100% !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.formulas {
  font-size: 14px;
}

.formulas span {
  color: #297fd5;
  margin-left: 15px;
}

.formulas span font {
  color: #a2a0a2;
}
</style>