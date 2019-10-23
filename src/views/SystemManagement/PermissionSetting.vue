<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg-3">
            <h4>权限设置</h4>
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
            <el-input clearable v-model="userName" placeholder="用户名/姓名关键字搜索"></el-input>
          </div>
          <div class="col-sm col-md col-lg-2">
            <el-select clearable v-model="userRole" placeholder="选择用户角色">
              <el-option
                v-for="item in rolelist"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div v-show="ifFilterShow" class="col-sm col-md col-lg textR">
            <el-button @click="clearFilters" round>取消</el-button>
            <el-button round @click="doFilters">筛选</el-button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm col-md col-lg w100 mt20">
            <div class="systembox">
              <h4 class="system-title">
                操作人员
                <span>2019/07/02 00:21 最后更新</span>
              </h4>
              <PermissionTable :tableData="tableData" />
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
  PermissionTableData
} from "../../assets/mockdata/mockdata";
import PermissionTable from "@/components/SystemComponents/PermissionTable.vue";
export default {
  name: "PermissionSetting",
  components: {
    PermissionTable
  },
  methods: {
    doFilters(){
      let userRole = this.userRole;
      let userName = this.userName;
      this.tableData = JSON.parse(this.tableStorge).filter(item=>{
        return item.role.includes(userRole) && item.userName.includes(userName)
      })
      console.log(this.tableData);
    },
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
      this.userName = "";
      this.userRole = "";
    }
  },
  data() {
    return {
      ifFilterShow: true,
      procode: "",
      activeName: "first",
      userName: "",
      userRole: "",
      condition: conditionConfig,
      tableData: PermissionTableData,
      tableStorge:JSON.stringify(PermissionTableData),
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      rolelist:[
        {
          value: "MCA代表",
          label: "MCA代表"
        },
        {
          value: "MCA区域数据运维",
          label: "MCA区域数据运维"
        },
        {
          value: "大区管理",
          label: "大区管理"
        },
        {
          value: "MCA经理",
          label: "MCA经理"
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style scoped>
.systembox {
  width: 100%;
  border: 1px solid #ddd;
  padding: 15px;
  background: #fff;
}
.system-title {
  color: #a2a0a2;
  font-size: 15px;
  margin: 0;
  border-bottom: 1px solid #dcdfe6;
  padding-bottom: 15px;
}
.w100 {
  width: 100%;
}
.align-self-end {
  text-align: right;
}
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
</style>