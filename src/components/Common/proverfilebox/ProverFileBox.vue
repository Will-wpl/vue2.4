<template>
  <div class="proverbox">
    <h4 class="row al-center">
      <div class="col-sm col-md col-lg">
        <el-checkbox v-model="fileData.checked"></el-checkbox>
      </div>
      <div class="col-sm col-md col-lg textR">
        <i class="el-icon-delete"></i>
      </div>
    </h4>
    <div class="row al-center filephoto">
      <img :src="fileData.imgUrl"/>
    </div>
    <div class="row al-center">
      <div class="fileitem col-sm col-md col-lg-8 fileName">{{ fileData.fileName }}</div>
      <div class="fileitem col-sm col-md col-lg textR el-icon-cyIcon"></div>
      <div class="fileitem col-sm col-md col-lg-12">{{ fileData.updateTime }}</div>
      <div class="fileitem col-sm col-md col-lg-12">{{ fileData.updateUser }}</div>
      <div class="fileitem col-sm col-md col-lg-12 filecontact"><span>{{ fileData.fileContact }}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProverFileBox",
  methods: {

  },
  props:["fileData"],
  data() {
    return {
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
<style scoped>
.el-icon-delete{ color: #FE4242}
.filephoto{ 
  border:6px solid #f6f6f6;
  border-top: 0px;
  height: 222px;
  }
.filephoto img{ display: block; margin: 0 auto; max-height: 100%; max-width: 100%;}
.textR {
  text-align: right;
}
.proverbox{
  width: 100%;
  background: #fff;
  font-size: 12px;
  color: #666;
}
.proverbox .row{
  padding: 0; margin: 0;
}
.proverbox h4{
  background:#f6f6f6;
  height: 36px;
  margin: 0;
  font-size: 14px;
}
.proverbox .fileName{
  color: #0066CC; font-size: 15px;
}
.proverbox .fileitem{
  margin-top: 3px;
}
.proverbox .filecontact{
  margin-top: 10px;
  background: url("~@/assets/fileIcon.png") 15px center no-repeat;
  background-size: 12px;
}
.proverbox .filecontact span{
  border:1px solid #ddd; padding: 5px 8px; border-radius: 4px;
  margin-left: 20px;
}
.el-icon-cyIcon{
  height: 20px; width: 20px; 
  background: url("~@/assets/cyIcon.png") right no-repeat;
  background-size: 15px;
  padding: 0;
  margin-right: 15px;
}
</style>