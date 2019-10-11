<template>
  <el-steps :active="step" align-center>
    <el-step title="核对差异" description></el-step>
    <el-step title="发起申诉" description></el-step>
    <el-step title="申诉审批" description></el-step>
    <el-step title="数据调整" description></el-step>
    <el-step title="数据确认" description></el-step>
    <el-step title="数据同步" description></el-step>
    <el-step title="申诉完成" description></el-step>
  </el-steps>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  props: ["step"],
  mounted() {
    console.log(this.tableData);
  },
  data() {
    return {
      multipleSelection: []
    };
  }
};
</script>
<style scoped>
</style>>