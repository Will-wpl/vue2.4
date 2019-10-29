<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg">
            <h4 class="appeal-title">
              <div class="title">申诉单号 AESS0001</div>
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
          <div class="uploadfile">
              <h4></h4>
              <el-upload
                  v-if="original"
                  class="uploadBox"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">拖拽或点击,上传证明文件</div>
                  <div class="el-upload__tip" slot="tip">上传文档格式限制pdf ，jpg,png图片，最大不超过5MB<br/>可在提交申诉单后，补传证明文件 </div>
                </el-upload>
                <div class="original" v-else>
                  本申诉原因均为非原始数据错误，无需提供证明文件
                </div>
          </div>
        </div>

        <div class="row mt20">
          <div class="col">
            <div class="buttonPostion">
              <table class="buttonGrp" style="width:100%">
                <tr>
                  <th>
                    <el-button round plain>上一步</el-button>
                  </th>
                  <th>
                    <el-button round :disabled="!original">保存</el-button>
                  </th>
                  <th>
                    <el-button type="primary" @click="visible = true" round>提交申诉</el-button>
                  </th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Diglog title="证明文件提交"
    width="40%" 
    @hideDiglog="visible = false" 
    :visible="visible" context="本申诉单缺少证明文件，您也可以可以选择提交申诉单后，补传证明文件，但请在规定时间内上传完成所有证明文件"
    :btnList="btnConfig"
    />
  </el-main>
</template>
<script>
import {
  configForInventoryReport
} from "../../assets/mockdata/mockdata";
import Step from "@/components/InventReportComponents/Step.vue";
import Diglog from "@/components/Common/diglog/Diglog.vue";
export default {
  name: "UpLoad",
  components: {
    Step,
    Diglog
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    aa(v){
      alert(v);
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
  data() {
    return {
      visible:false,
      btnConfig:[
        {btnName:"上传证明文件",callbackFn:this.aa.bind(this,1),type:"primary"},
        {btnName:"暂无法提供全部证明文件，待补全",callbackFn:this.aa.bind(this,2),type:""},
        {btnName:"无法提供证明文件",callbackFn:this.aa.bind(this,3),type:""}
      ],
      original:true
    }
  },
  mounted() {
    //this.pageId = this.$route.params.id;
  },
  watch: {
    $route(path) {
      //this.pageId = path.params.id;
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

.uploadBtnPos span{
  color:#0078C1;
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
.uploadBox .el-upload-dragger,.uploadBox .el-upload{
   width: 100%;
}
.uploadBox .el-upload-dragger{
  background:rgba(239,245,252,1);
  border:1px solid rgba(165,201,237,1);
  border-radius:4px;
}
.uploadBox .el-upload-dragger .el-upload__text{
  color: #0078C1;
}
.uploadBox .el-upload__tip{ text-align: center; line-height: 32px;}
</style>
<style scoped>
.uploadfile{
  border:1px solid #ccc; border-radius: 10px; background: #fff; 
  margin: 0px 15px;
  width: 100%;
}
.uploadfile h4{ border-bottom: 1px solid #ccc; height:50px;}
.uploadBox{
   margin: 60px auto;
   width: 60%;
}
.original{
  margin: 60px auto;
  width: 60%;
  text-align: center; padding: 60px 0px;
  background:rgba(243,243,243,1);
  border:1px solid rgba(189,195,203,1);
  border-radius:4px;
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