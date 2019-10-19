<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg-3">
            <h4>操作日志记录</h4>
          </div>
          <div class="col"></div>
          <div class="col-1 align-self-end">
            <i @click="showFilter" style="color:#007AC3" class="el-icon-s-operation OpIcons"></i>
            <i
              @click="hideFilter"
              style="color:#007AC3; margin-left: 10px;"
              class="el-icon-arrow-up OpIcons"
            ></i>
          </div>
        </div>
        <!-- Filter Section -->
        <div v-show="ifFilterShow" class="row mt20">
          <div class="col-sm col-md col-lg-4">
            <el-input clearable v-model="procode" placeholder="经销商/产品名称编号"></el-input>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-date-picker clearable v-model="time" type="datetime" placeholder="选择申请时间"></el-date-picker>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select clearable v-model="value1" placeholder="选择品牌">
              <el-option
                v-for="item in condition.options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg textR">
            <el-button @click="clearFilters" size="mini" round>取消</el-button>
            <el-button size="mini" round>筛选</el-button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm col-md col-lg w100 mt20">
            <div class="systembox">
              <h4 class="system-title row">
                <div class="col-sm col-md col-lg pad0">
                  操作日志记录
                </div>
                <div class="col-1 align-self-end">
                  <i style="color:#007AC3" class="el-icon-download OpIcons">下载</i>
                </div>
              </h4>
              <OperationLogTable :tableData="tableData" />
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage1"
                :page-size="100"
                layout="prev, pager, next, jumper,total"
                :total="400"
                class="white_bg"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-main>
</template> 

<script>
import {
  conditionConfig,
  OperationLogTableData
} from "../../assets/mockdata/mockdata";
import OperationLogTable from "@/components/SystemComponents/OperationLogTable.vue";
export default {
  name: "OperationLog",
  components: {
    OperationLogTable
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(e) {
      console.log(e);
    },
    showFilter() {
      this.ifFilterShow = true;
    },
    hideFilter() {
      this.ifFilterShow = false;
    },
    clearFilters() {
      this.procode = "";
      this.time = "";
      this.value1 = "";
      this.value2 = "";
      this.value3 = "";
      this.value4 = "";
      this.value5 = "";
      this.value6 = "";
      this.value7 = "";
      this.value8 = "";
      this.value9 = "";
    }
  },
  data() {
    return {
      ifFilterShow: true,
      procode: "",
      activeName: "first",
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
      tableData: OperationLogTableData,
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4
    };
  },
  mounted() {}
};
</script>

<style scoped>
.systembox{ width: 100%; border:1px solid #ddd; padding: 15px; background: #fff;}
.system-title{ color: #a2a0a2; font-size: 15px; margin: 0; border-bottom: 1px solid #DCDFE6; padding-bottom: 15px;}
.w100 {
  width: 100%;
}
.pad0{padding: 0;}
.align-self-end {
  text-align: right;
}
h4 {
  text-align: left;
  color: #297fd5;
}
h4 span{ color: #a2a0a2; font-size: 16px;}
.white_bg {
  background: #fff;
  padding: 10px 0px;
}
.total {
  color: #a2a0a2;
  font-size: 15px;
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
</style>