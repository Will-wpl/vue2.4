<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg">
            <h4>
              进销存报告({{ pageId }}) <span>2019/07/02 00：21 最后更新</span>
            </h4>
          </div>
          <div class="col-sm col-md col-lg">
            <Step :step="1" />
          </div>
        </div>
        <div class="row mt20">
          <h5 class="col-sm col-md col-lg total">
            总记录：180
            <span>符合筛选条件记录共（10）条</span>
          </h5>
          <div class="col-1 align-self-end textR">
            <i @click="showFilter" style="color:#007AC3" class="el-icon-s-operation OpIcons">筛选</i>
          </div>
        </div>
        <div class="row mt20">
          <h5 class="col-lg-12 textR formulas">
            <span>
              E逻辑库存
              <font>= A期初逻辑库存 + B逻辑采购 - C销售 + D本月库存调整</font>
            </span>
            <span>
              G库存差异
              <font>= E逻辑库存 - F实际库存</font>
            </span>
          </h5>
        </div>
        <div class="row mt20">
          <InventReportTable :tableData="tableData" />
        </div>
        <div class="row white_bg">
          <div class="block">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage1"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="prev, pager, next, jumper,total,sizes"
              :total="400"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </el-main>
</template>
<script>
import { conditionConfig, tableData } from "../../assets/mockdata/mockdata";
import InventReportTable from "@/components/InventReportComponents/InventReportTable.vue";
import Step from "@/components/InventReportComponents/Step.vue";
export default {
  name: "InventoryReport",
  components: {
    InventReportTable,
    Step
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    showFilter(){

    }
  },
  data() {
    return {
      procode: "",
      time: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      condition: conditionConfig,
      tableData: tableData,
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      pageId: ""
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

<style scoped>
h4 {
  text-align: left;
  color: #297fd5;
}
h4 span{ color: #a2a0a2; font-size: 14px;}
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