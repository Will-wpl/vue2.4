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
                  <div style="float: right;">
                    <img src="@/assets/upload.png" />
                    <span>下载申诉单</span>
                  </div>
                </div>
                <div style class="col">
                  <div style="float:left">
                    <img src="@/assets/download.png" />
                    <span>上传申诉单</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm col-md col-lg appeal-right">
            <InventoryReportAppealDetail :event="appealObj" />
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
import InventoryReportAppealDetail from "@/views/InventoryReportPage/InventoryReportAppealDetail.vue";
export default {
  name: "InventoryReportAppeal",
  components: {
    InventReportTable,
    Step,
    AppealNav,
    InventoryReportAppealDetail
  },
  methods: {
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
      this.$set(this.appealList[index], "active", true);
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
<style>
.el-drawer__header {
  margin-bottom: 15px !important;
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

.uploadBtnPos img {
  width: 15%;
  height: auto;
}

.el-table td,
.el-table th {
  padding: 5px 0px !important;
  font-size: 13px;
}
</style>
<style scoped>
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