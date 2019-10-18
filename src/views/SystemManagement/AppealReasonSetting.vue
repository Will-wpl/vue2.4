<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg-3">
            <h4>申诉理由设置 <span>以下是您提交的申诉</span></h4>
          </div>
        </div>
        <!-- Filter Section -->
        <div class="row">
          <div class="col-sm col-md col-lg w100 mt20">
            <div class="systembox">
              <h4 class="system-title row">
                  <div class="col-sm col-md col-lg pad0">申诉理由 <span>(26)</span></div>
                  <div class="col-1 align-self-end">
                    <i style="color:#007AC3" class="el-icon-download OpIcons">下载</i>
                    <i @click="showFilter" style="color:#007AC3; margin-left: 10px;" class="el-icon-plus OpIcons">新增</i>
                  </div>
              </h4>
              <AppealReasonTable :tableData="tableData" />
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
    <el-dialog title="申诉理由" :visible.sync="ifFilterShow">
        <el-form :model="form" label-position="top">
          <el-form-item label="理由" :label-width="formLabelWidth">
            <el-input v-model="form.reason" autocomplete="off" placeholder="理由"></el-input>
          </el-form-item>
          <el-form-item label="类型" :label-width="formLabelWidth">
            <el-select v-model="form.type" placeholder="类型" >
              <el-option label="自动提醒邮件1" value="shanghai"></el-option>
              <el-option label="自动提醒邮件2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="关联申诉表单" :label-width="formLabelWidth">
            <el-select v-model="form.relation" placeholder="关联申诉表单"  multiple>
              <el-option label="自动提醒邮件1" value="shanghai"></el-option>
              <el-option label="自动提醒邮件2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" round @click="dialogFormVisible = false">确 认</el-button>
          <el-button @click="dialogFormVisible = false" round>取 消</el-button>
        </div>
      </el-dialog>
  </el-main>
</template> 

<script>
import {
  conditionConfig,
  AppealReasonTableData
} from "../../assets/mockdata/mockdata";
import AppealReasonTable from "@/components/SystemComponents/AppealReasonTable.vue";
export default {
  name: "PermissionSetting",
  components: {
    AppealReasonTable
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
      ifFilterShow: false,
      procode: "",
      activeName: "first",
      form:{
          reason:"",
          relation:"",
          type:""
      },
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
      tableData: AppealReasonTableData,
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