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
          <InventReportTable id="reportTable" :tableData="tableData" :filter="filter" :height="tableHeight" />
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
            :to="{ name: 'InventoryReportAppeal', params: { id: pageId,filter: filter } }"
          >
            <el-button icon="el-icon-search" round>申请明细调整</el-button>
          </router-link>
          <router-link
            class="event-link ml10"
            :to="{ name: 'InventoryReportAppeal', params: { id: pageId,filter: filter } }"
          >
            <el-button icon="el-icon-search" round>申请商业调整</el-button>
          </router-link>
          <el-button class="ml10" icon="el-icon-search" round @click="exportExcel">导出进销存报告</el-button>
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
        <div class="col-sm col-md col-lg-4" v-for="(item,index) in filterReportConfig('business_information')" :key="index">
          <div v-if="item.type=='business_information'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="row filterbox">
        <div class="col-sm col-md col-lg-12 mb">产品信息</div>
        <div class="col-sm col-md col-lg-4"  v-for="(item,index) in filterReportConfig('product_information')" :key="index">
          <div v-if="item.type=='product_information'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="row filterbox">
        <div class="col-sm col-md col-lg-12 mb">数据信息</div>
        <div class="col-sm col-md col-lg-4" v-for="(item,index) in filterReportConfig('data_information')" :key="index">
          <div v-if="item.type=='data_information'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="row filterbox">
        <div class="col-sm col-md col-lg-12 mb">历史数据</div>
        <div class="col-sm col-md col-lg-4" v-for="(item,index) in filterReportConfig('history_information')" :key="index">
          <div v-if="item.type=='history_information'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="row filterbox">
        <div class="col-sm col-md col-lg-4" v-for="(item,index) in filterReportConfig('application_status')" :key="index">
          <div v-if="item.type=='application_status'">
            <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
          </div>
        </div>
      </div>
      <div class="posBtn">
        <el-button round @click="backDefault">恢复默认显示</el-button>
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
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  name: "InventoryReport",
  components: {
    InventReportTable,
    Step
  },
  methods: {
    checkAll(val){
      if(val){
        this.ReportConfig.map(item=>{
          item.checked = true;
        })
      }else{
        this.ReportConfig.map(item=>{
          item.checked = false;
        })
      }
    },
    backDefault(){
      this.ReportConfig = JSON.parse(this.defaultConfig);
      this.checked = false;
    },
    filterReportConfig(type){
      return this.ReportConfig.filter(item=>{return item.type == type});
    },
    exportExcel () {
         /* generate workbook object from table */
         var wb = XLSX.utils.table_to_book(document.querySelector('#reportTable'))
         /* get binary string as output */
         var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
         try {
             FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'InventoryReport.xlsx')
         } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
         return wbout
     },
    doTable() {
      this.tableHeight = 500;
      this.filter = this.ReportConfig.filter(item => {
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
      condition: conditionConfig,
      tableData: tableData,
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      pageId: "",
      defaultConfig : JSON.stringify(configForInventoryReport),
      ReportConfig: configForInventoryReport,
      filter: []
    };
  },
  mounted() {
    this.pageId = this.$route.params.id;
    this.doTable();
  },
  watch: {
    $route(path) {
      this.pageId = path.params.id;
    }
  }
};
</script>
<style>
.el-drawer__body {
  overflow-y: auto;
}
.el-drawer__header {
  margin-bottom: 15px !important;
}
.el-table td,
.el-table th {
  padding: 5px 0px !important;
  font-size: 13px;
}
.el-button{outline: none;}
</style>
<style scoped>
.ml10{ margin-left: 10px;}
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
  z-index: 10;
  background: #fff;
  box-shadow: 0px 0px 8px #ccc;
}
.posBtn button{
  outline: none;
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