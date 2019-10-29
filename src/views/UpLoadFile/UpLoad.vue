<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <AppealHead :headData="appealHead" />
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
import AppealHead from "@/components/Common/appealhead/AppealHead.vue";
export default {
  name: "UpLoad",
  components: {
    Step,
    Diglog,
    AppealHead
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
      original:true,
      appealHead:{
        appealNumber:"AESS0001",
        appealTime:"09/07/2019",
        appealName:"Jessica",
        appealStep:2
      }
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
.textR {
  text-align: right;
}
.mt20 {
  margin-top: 20px;
}
.el-main {
  background: #eef2f6;
  padding: 0 15px;
}
</style>