<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg">
            <h4 class="appeal-title">
              <div class="title">申诉单号 AESS0001({{pageId}})</div>
              <div class="row content">
                <div class="col-sm col-md col-lg-4 borderR">
                  申诉日期
                  <span>09/07/2019</span>
                </div>
                <div class="col-sm col-md col-lg-4">
                  申请人
                  <span>09/07/2019</span>
                </div>
              </div>
            </h4>
          </div>
          <div class="col-sm col-md col-lg">
            <Step :step="2" />
          </div>
        </div>
        <div class="row mt20">
          <div class="col-sm col-md col-lg-3 appeal-left">
            <div class="appeal-left-search">
              <el-input placeholder="任意关键字" v-model="input">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
                <i slot="append" class="el-icon-s-unfold"></i>
              </el-input>
            </div>
            <hr />
            <div>
              <span class="recordNum">共5条</span>
              <el-dropdown :hide-on-click="false" @command="handleCommand">
                <el-button type="primary">
                  <i class="el-icon-plus el-icon--left"></i>
                  增加商业
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">
                    <template>
                      <el-input
                        @input="searchInputChange($event)"
                        placeholder="Please input"
                        v-model="buSearchinput"
                        clearable
                      >
                        <i slot="suffix" class="el-input__icon el-icon-search"></i>
                      </el-input>
                    </template>
                  </el-dropdown-item>
                  <el-dropdown-item
                    v-for="(item,index) in buNames"
                    :key="index"
                    :command="item.id"
                  >{{item.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="appeal-left-menu">
              <div
                @click="showAppealDetail($event,item,index)"
                v-for="(item,index) in appealList"
                :event="item"
                :key="index"
              >
                <AppealNav :event="item" :active="item.active" />
              </div>
            </div>
            <div class="uploadBtnPos">
              <div class="row">
                <div style="padding-right:0px;" class="col">
                  <div class="downloadBtnBlock">
                    <img src="@/assets/upload.png" />
                    <span>下载申诉单</span>
                  </div>
                </div>
                <div class="col">
                  <div class="uploadBtnBlock">
                    <img src="@/assets/download.png" />
                    <span>上传申诉单</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm col-md col-lg appeal-right">
            <div>
              <CreateAppeal />
              <AddProduct />

              <AppealDetail :event="appealObj" />
            </div>
          </div>
        </div>

        <div class="row bottomBox">
          <div class="col">
            <div class="buttonPostion">
              <table class="buttonGrp" style="width:100%">
                <tr>
                  <th>
                    <el-button round plain>保存</el-button>
                  </th>
                  <th>
                    <el-button type="primary" round>下一步</el-button>
                  </th>
                  <th>
                    <el-button round>关闭</el-button>
                  </th>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="row mt20">
          <InventReportTable :tableData="tableData" :filter="filter" height="500" />
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
import {
  conditionConfig,
  tableData,
  configForInventoryReport
} from "../../assets/mockdata/mockdata";
import InventReportTable from "@/components/InventReportComponents/InventReportTable.vue";
import Step from "@/components/InventReportComponents/Step.vue";
import AppealNav from "@/components/Common/AppealNav.vue";
import AppealDetail from "@/components/RaiseAppealComponents/AppealDetail.vue";
import CreateAppeal from "@/components/RaiseAppealComponents/CreateAppeal.vue";
import AddProduct from "@/components/RaiseAppealComponents/AddProduct.vue";

export default {
  name: "RaiseAppeal",
  components: {
    InventReportTable,
    Step,
    AppealNav,
    AppealDetail,
    CreateAppeal,
    AddProduct
  },
  methods: {
    searchInputChange(event) {
      this.buNamesResults = _ => {
        return this.buNames.find(item => {
          console.log(item.name);
          item.name.indexOf(this.buSearchinput) > -1;
        });
      };

      this.$message("input changed");
    },
    handleCommand(command) {
      this.$message("click on item " + command);
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
    },
    showAppealDetail(e, item, index) {
      this.appealObj = item;
      this.appealList.map(item => {
        item.active = false;
      });
      this.appealObj = this.appealList[index];
    }
  },
  created() {
    this.appealList.map((item, index) => {
      if (index == 0) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    this.appealObj = this.appealList[0];
  },
  data() {
    return {
      buNamesResults: Object,
      buSearchinput: "",
      drawer: false,
      direction: "rtl",
      appealObj: Object,
      appealList: [
        {
          number: "CO1023312991",
          name: "安庆上药众协大药房有限公司",
          level: "一级经销商",
          id: "appeal1",
          formlist: [
            {
              title:
                "Herceptin Vial 440mg  (locHerceptin Vial 440mg (local repacking)",
              status: "-449"
            },
            { title: "Cellcept Capsule 250mg 40s", status: "-70" }
          ]
        },
        {
          number: "CO1023312991",
          name: "安徽省蚌埠市天辰医药有限责任公司",
          level: "一级经销商",
          id: "appeal2",
          formlist: [
            {
              title:
                "Herceptin Vial 110mg  (locHerceptin Vial 440mg (local repacking)",
              status: "-349"
            },
            { title: "Cellcept Capsule 250mg 40s", status: "-70" }
          ]
        },
        {
          number: "CO1023312991",
          name: "上药控股安庆有限公司",
          level: "一级经销商",
          id: "appeal3",
          formlist: [
            {
              title:
                "Herceptin Vial 240mg  (locHerceptin Vial 440mg (local repacking)",
              status: "-249"
            },
            { title: "Cellcept Capsule 250mg 40s", status: "-70" }
          ]
        }
      ],
      buNames: [
        { id: "1", name: "安庆上药众协大药房有限公司" },
        { id: "2", name: "安徽省蚌埠市天辰医药有限责任公司" },
        { id: "3", name: "上药控股安庆有限公司" },
        { id: "4", name: "上药控股安庆有限公司1" }
      ],
      checked: "",
      input: "",
      condition: conditionConfig,
      ReportConfig: configForInventoryReport,
      tableData: tableData,
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      pageId: "",
      filter: []
    
    };
  },
  mounted() {
    this.pageId = this.$route.params.id;
    this.filter = this.$route.params.filter;
  },
  watch: {
    $route(path) {
      this.pageId = path.params.id;
    }
  }
};
</script>
<style scoped>
.el-dropdown {
  float: right;
  bottom: 8px;
  right: 5%;
}

.el-button-group button {
  background-color: #0066cc;
  border: #0066cc;
}

.el-dropdown button {
  background-color: #0066cc;
  border: #0066cc;
}

.el-dropdown > button > span > i {
  border-right: 1px solid white;
  margin-right: 0px;
  padding-right: 4px;
  position: relative;
}

.el-main {
  padding: 0 15px;
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
.appeal-left {
  background: #f8f9fd;
  padding: 0;
}
.appeal-left-search {
  margin: 15px;
}
.appeal-left-menu {
  width: 100%;
}
.line {
  height: 2px;
  background: #e4e5e6;
}
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
<style>
.el-drawer__header {
  margin-bottom: 15px !important;
}

.recordNum {
  position: relative;
  margin-left: 30px;
}

.bottomBox {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 0 6px rgba(0, 0, 0, 0.12);
  height: 100px;
  position: relative;
}

.buttonPostion {
  position: absolute;
  left: 40%;
  top: 30%;
}

.buttonGrp > tr > th > button {
  margin-left: 5px;
}

.uploadBtnPos {
  margin-bottom: 10px;
  position: relative;
}

.uploadBtnPos span {
  color: #0078c1;
  float: right;
}

.uploadBtnPos img {
  width: 15%;
  height: auto;
  margin-right: -15px;
}

.downloadBtnBlock {
  float: right;
  background-color: #eef2f6;
}

.uploadBtnBlock {
  float: left;
  background-color: #eef2f6;
}

.el-table td,
.el-table th {
  padding: 5px 0px !important;
  font-size: 13px;
}

.el-select.productLineRemove input[type="text"] {
  background-color: inherit;
  outline: none;
  border:none
}

.el-select.productLineRemove .el-input__suffix {
  display: none;
}

.el-select.YMLineRemove input[type="text"] {
  background-color: inherit;
  outline: none;
  border:none
}

.el-select.YMLineRemove .el-input__suffix {
  display: none;
}
</style>
