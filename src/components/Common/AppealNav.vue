<template>
  <div :class="['appeal-nav',active==true?'appeal-nav-active':'']">
    <div>{{event.number}}</div>
    <div class="ft">{{event.name}}</div>
    <div>{{event.level}}</div>
  </div>
</template>
<script>
export default {
  name: "AppealNav",
  props: {
      event:Object,
      active:false
  },
  methods:{
      
  }
};
</script>
<style scoped>
 .appeal-nav{
     width: 80%; margin: 15px auto;
     background-color:rgba(255,255,255,1);
     padding: 10px;
     border-radius: 10px; transition: 0.5s all;
 }
 .appeal-nav div{
     margin-bottom: 5px; font-size: 12px;
 }
 .appeal-nav:hover,.appeal-nav-active{
     background-color:rgba(255,255,255,1);
     box-shadow: 0px 0px 5px #999;
 }
 .appeal-nav div.ft{ font-size: 14px; font-weight: bold;}
</style>