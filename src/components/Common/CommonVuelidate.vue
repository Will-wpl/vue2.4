<template>
  <div class="validation-whole" :class="{'is-error':error}">
    <slot></slot>
    <div class="validation-check" v-if="error">
      <div class="validation-msg">
        <span class="validation-msg-item" v-for="(item,index) in msgList" :key="index">
          <b v-if="showMsg(index)">{{item.text}}</b>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "errorMsg",
  props: {
    error: {
      default: false
    },
    msgList: {
      default: () => []
    }
  },
  methods:{
      showMsg(index){
          let flag = true;
          let vm = this
          for(let i=0; i< index; i++){
              flag = !vm.msgList[i].show && flag;
          }
          flag = vm.msgList[index].show && flag;
          return flag;
      }
  }
};
</script>
<style scoped>
 .validation-whole{
     position: relative; display: inline-flex; flex-direction: column;
     width: 100%; margin-bottom: 15px; margin-top: 2px;
 }
 .validation-whole .validation-check{
     position: relative;
 }
 .validation-whole .validation-msg{
     font-size: 12px; font-weight: normal; top:0px; 
     color: #d64f3c; padding: 5px 10px; border-radius: 10px;
 }
 .validation-whole .validation-check .is-error .input-inner:hover + .validation-check .validation-msg{
     display: block;
 }
</style>