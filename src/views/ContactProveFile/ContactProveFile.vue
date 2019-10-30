<template>
  <el-main>
      <div class="container-fluid">
        <AppealHead :headData="appealHead" />
        <div class="row pad0 flex1">
          <div class="col-sm col-md col-lg-8">
            <div class="proverFile mt20">
              <h4 class="al-center">
                <div class="col-sm col-md col-lg-2"><el-checkbox v-model="checked" @change="checkAll($event)">全选</el-checkbox></div>
                <div class="col-sm col-md col-lg al-center">
                  <el-input placeholder="任意关键字" size="mini" v-model="input">
                      <i slot="suffix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                  <el-dropdown>
                      <i class="el-icon-s-unfold"></i>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>时间顺序</el-dropdown-item>
                          <el-dropdown-item>时间倒序</el-dropdown-item>
                          <el-dropdown-item>名称顺序</el-dropdown-item>
                          <el-dropdown-item>名称倒序</el-dropdown-item>
                        </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div class="col-sm col-md col-lg textR">
                  <el-button size="mini" plain>关联明细</el-button>
                  <el-button size="mini" type="danger" plain>删除证明</el-button>
                  <el-button size="mini" type="primary" @click="pageToUpLoad">上传证明</el-button>
                </div>
              </h4>
              <div class="row fileboxlist mg0">
                <div class="col-sm col-md col-lg-4 pad25" v-for="(item,index) in fileboxlist" :key="index">
                  <ProverFileBox :fileData="item" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm col-md col-lg-4 pad0 posR">
            <div class="contactFile">
              <h4>
                <b>关联证明文件与申诉明细</b>
              </h4>
              <div class="contactFileSearch">
                <el-input placeholder="任意关键字" v-model="filterText">
                  <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </div>
              <div class="contactTree">
                <el-tree
                  class="filter-tree"
                  :data="data"
                  :props="defaultProps"
                  show-checkbox
                  default-expand-all
                  :filter-node-method="filterNode"
                  ref="tree"
                ></el-tree>
              </div>
            </div>
          </div>
        </div>
      </div>
  </el-main>
</template>
<script>
import { configForInventoryReport } from "../../assets/mockdata/mockdata";
import Step from "@/components/InventReportComponents/Step.vue";
import AppealHead from "@/components/Common/appealhead/AppealHead.vue";
import ProverFileBox from "@/components/Common/proverfilebox/ProverFileBox.vue";
export default {
  name: "ContactProveFile",
  components: {
    Step,
    AppealHead,
    ProverFileBox
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    pageToUpLoad(){
      this.$router.push('/UpLoad')
    },
    checkAll(val){
      if(val){
        this.fileboxlist.map(item=>{item.checked=true});
      }else{
        this.fileboxlist.map(item=>{item.checked=false});
      }
    }
  },
  data() {
    return {
      checked:false,
      filterText: "",
      input:"",
      fileboxlist:[
        { 
          id:1,
          checked:true,
          imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          fileName:"证明文件1.png",
          updateTime:"2019/07/02  00:21",
          updateUser:"Bruce Bu 最后更新",
          fileContact:"上游经销商销售数据错误"
        },
        { 
          id:2,
          checked:false,
          imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          fileName:"证明文件1.png",
          updateTime:"2019/07/02  00:21",
          updateUser:"Bruce Bu 最后更新",
          fileContact:"上游经销商销售数据错误"
        },
        { 
          id:3,
          checked:true,
          imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          fileName:"证明文件1.png",
          updateTime:"2019/07/02  00:21",
          updateUser:"Bruce Bu 最后更新",
          fileContact:"上游经销商销售数据错误"
        },
        { 
          id:4,
          checked:false,
          imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          fileName:"证明文件1.png",
          updateTime:"2019/07/02  00:21",
          updateUser:"Bruce Bu 最后更新",
          fileContact:"上游经销商销售数据错误"
        },
        { 
          id:5,
          checked:true,
          imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          fileName:"证明文件1.png",
          updateTime:"2019/07/02  00:21",
          updateUser:"Bruce Bu 最后更新",
          fileContact:"上游经销商销售数据错误"
        },
        { 
          id:6,
          checked:false,
          imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          fileName:"证明文件1.png",
          updateTime:"2019/07/02  00:21",
          updateUser:"Bruce Bu 最后更新",
          fileContact:"上游经销商销售数据错误"
        }
      ],
      appealHead: {
        appealNumber: "AESS0001",
        appealTime: "09/07/2019",
        appealName: "Jessica",
        appealStep: 2
      },
      data: [
        {
          id: 0,
          label: "全部",
          children: [
            {
              id: 1,
              label: "一级 1",
              children: [
                {
                  id: 4,
                  label: "二级 1-1",
                  children: [
                    {
                      id: 9,
                      label: "三级 1-1-1"
                    },
                    {
                      id: 10,
                      label: "三级 1-1-2"
                    }
                  ]
                }
              ]
            },
            {
              id: 2,
              label: "一级 2",
              children: [
                {
                  id: 5,
                  label: "二级 2-1"
                },
                {
                  id: 6,
                  label: "二级 2-2"
                }
              ]
            },
            {
              id: 3,
              label: "一级 3",
              children: [
                {
                  id: 7,
                  label: "二级 3-1"
                },
                {
                  id: 8,
                  label: "二级 3-2"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  mounted() {
    //this.pageId = this.$route.params.id;
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  }
};
</script>
<style>
label.el-checkbox {
  margin-bottom: 0px;
}
</style>
<style scoped>
.container-fluid{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.flex1{flex:1;}
.al-center{ display: flex;}
.contactTree {
  padding: 15px 20px;
  flex:1;
  overflow-y: auto;
}
.el-dropdown{
  float: none; bottom: 0; right: 0;
  margin-left: 15px;
}
.label {
  margin: 0;
}
.el-main {
  padding: 0;
}
.pad0 {
  padding: 0px;
}
.proverFile {
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  width: 100%;
  padding-bottom: 20px;
  overflow-y: auto;
}
.fileboxlist{
  height: 510px;
  overflow-y: auto;
}
.proverFile h4 {
  border-bottom: 1px solid #ccc;
  height: 50px;
  margin-bottom: 0px;
}
.textR {
  text-align: right;
}
.posR {
  position: relative;
}
.pad25{padding: 30px 30px 0px;}
.mt20 {
  margin-top: 20px;
}
.el-main {
  background: #eef2f6;
  padding: 0px;
}
.contactFile {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #ccc;
}
.contactFile h4 {
  padding: 25px;
  margin-bottom: 0px;
}
.contactFile h4 b {
  display: block;
  background: url("~@/assets/fileIcon.png") left no-repeat;
  font-size: 20px;
  font-weight: bold;
  padding-left: 30px;
}
.contactFileSearch {
  border-bottom: 1px solid rgba(189, 195, 203, 1);
  border-top: 1px solid rgba(189, 195, 203, 1);
  padding: 20px;
  width: 100%;
}
.contactFileSearch .el-input {
  width: 100%;
}
</style>