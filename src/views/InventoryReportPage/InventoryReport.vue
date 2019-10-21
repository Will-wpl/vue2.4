<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg">
            <h4>
              进销存报告({{ pageId }})
              <span>2019/07/02 00：21 最后更新</span>
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
            <i @click="drawer = true" style="color:#007AC3" class="el-icon-s-operation OpIcons">筛选</i>
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
          <InventReportTable :tableData="tableData" :filter="filter" :height="tableHeight" />
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
        <div class="row mt20">
          <router-link
            class="event-link"
            :to="{ name: 'InventoryReportAppeal', params: { id: pageId } }"
          >
            <el-button icon="el-icon-search" round>申请明细调整</el-button>
          </router-link>
          <el-button icon="el-icon-search" round>导出进销存报告</el-button>
        </div>
      </div>
    </div>
    <el-drawer
      title="设置表格显示内容"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <div class="row filterbox">
        <div class="col-sm col-md col-lg">
          <el-checkbox v-model="checked" @change="checkAll">全部</el-checkbox>
        </div>
      </div>
      <div class="row filterbox">
        <div class="col-sm col-md col-lg-12 mb">商业信息</div>
        <div v-for="(item,index) in configForInventoryReport" :key="index">
          <div class="col-sm col-md col-lg-4" v-if="item.type=='business_information'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="row filterbox">
        <div class="col-sm col-md col-lg-12 mb">产品信息</div>
        <div v-for="(item,index) in configForInventoryReport" :key="index">
          <div class="col-sm col-md col-lg-4" v-if="item.type=='product_information'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="row filterbox">
        <div class="col-sm col-md col-lg-12 mb">数据信息</div>
        <div v-for="(item,index) in configForInventoryReport" :key="index">
          <div class="col-sm col-md col-lg-4" v-if="item.type=='data_information'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="row filterbox">
        <div class="col-sm col-md col-lg-12 mb">历史数据</div>
        <div v-for="(item,index) in configForInventoryReport" :key="index">
          <div class="col-sm col-md col-lg-4" v-if="item.type=='history_information'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="row filterbox">
        <div v-for="(item,index) in configForInventoryReport" :key="index">
          <div class="col-sm col-md col-lg-4" v-if="item.type=='application_status'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="posBtn">
        <el-button round>恢复默认显示</el-button>
        <el-button type="primary" @click="doTable" round>生效</el-button>
      </div>
    </el-drawer>
  </el-main>
</template>
<script>
import {
  conditionConfig,
  tableData,
  configForInventoryReport
} from "../../assets/mockdata/mockdata";
import InventReportTable from "@/components/InventReportComponents/InventReportTable.vue";
import Step from "@/components/InventReportComponents/Step.vue";
export default {
  name: "InventoryReport",
  components: {
    InventReportTable,
    Step
  },
  methods: {
    checkAll(val){
      if(val){
        this.configForInventoryReport.map(item=>{
          item.checked = true;
        })
      }else{
        this.configForInventoryReport.map(item=>{
          item.checked = false;
        })
      }
    },
    doTable() {
      this.tableHeight = 500;
      this.filter = this.configForInventoryReport.filter(item => {
        return item.checked === true;
      });
      this.drawer = false;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClose(done) {
      done();
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
    }
  },
  data() {
    return {
      tableHeight:500,
      drawer: false,
      direction: "rtl",
      checked: false,
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
      pageId: "",
      configForInventoryReport: configForInventoryReport,
      filter: []
    };
  },
  mounted() {
    this.pageId = this.$route.params.id;
    this.doTable();
    // configForInventoryReport.map(item=>{
    //   if(item.type == "business_information"){
    //     this.business_information.push(item)
    //   }
    // })
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
</style>
<style scoped>
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