<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg-3">
            <h4>
              进销存报告({{ pageId }})
            </h4>
          </div>
          <div class="col-sm col-md col-lg-2"></div>
          <div class="col-sm col-md col-lg">
            <Step :step="1" />
          </div>
        </div>
        <div class="row mt20">
          <div class="col-sm col-md col-lg-4">
            <el-input v-model="procode" placeholder="请输入内容"></el-input>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-date-picker type="datetime" v-model="time" placeholder="选择日期时间"></el-date-picker>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select v-model="value1" placeholder="选择品牌">
              <el-option
                v-for="item in condition.options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select v-model="value2" placeholder="选择产品">
              <el-option
                v-for="item in condition.options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select v-model="value3" placeholder="集团信息">
              <el-option
                v-for="item in condition.options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="row mt20">
          <div class="col-sm col-md col-lg-2">
            <el-select v-model="value4" placeholder="选择大区">
              <el-option
                v-for="item in condition.options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select v-model="value5" placeholder="选择区域">
              <el-option
                v-for="item in condition.options5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select v-model="value6" placeholder="选择省份">
              <el-option
                v-for="item in condition.options6"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select v-model="value7" placeholder="多渠道准入代表">
              <el-option
                v-for="item in condition.options7"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select v-model="value8" placeholder="商业等级">
              <el-option
                v-for="item in condition.options8"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select v-model="value9" placeholder="集团信息">
              <el-option
                v-for="item in condition.options9"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="row mt20">
          <div class="col-sm col-md col-lg-10"></div>
          <div class="col-sm col-md col-lg-2 textR">
            <el-button size="mini" round>取消</el-button>
            <el-button size="mini" round>筛选</el-button>
          </div>
        </div>
        <div class="row mt20">
          <h5 class="col-lg-12 total">
            总记录：180
            <span>符合筛选条件记录共（10）条</span>
          </h5>
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
        <div class="row mt20 white_bg">
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