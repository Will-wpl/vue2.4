<template>
  <el-dialog
    :title="title"
    :visible="visible"
    :width="width"
    @close="hide"
    >
    <span>{{context}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button round :type="item.type" @click="item.callbackFn" v-for="(item,index) in btnList" :key="index">{{item.btnName}}</el-button>
    </span>
</el-dialog>
</template>
<script>
export default {
  /* eslint-disable */
  name: "Diglog",
  props: {
      title:"",
      context:"",
      visible:Boolean,
      btnList:Array,
      width:""
  },
  methods:{
      hide(){
        this.$emit('hideDiglog');
      }
  }
};
</script>
<style scoped>
 .dialog-footer{
   text-align: center;
   display: block;
 }
 .dialog-footer button{
   font-size: 12px;
 }
</style>