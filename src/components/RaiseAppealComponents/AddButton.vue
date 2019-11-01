<template>
  <el-dropdown :hide-on-click="false" @command="handleCommand">
    <el-button type="primary">
      <i class="el-icon-plus el-icon--left"></i>
      <slot></slot>
    </el-button>
  </el-dropdown>
</template>

<script>
export default {};
</script>

<style scoped>
.el-dropdown {
  margin-top: 5px;
}

.el-dropdown button {
  background-color: #0066cc;
  border: #0066cc;
  height: 90%;
  font-size: 12px;
}

.el-dropdown > button > span > i {
  border-right: 1px solid white;
  margin-right: 5px;
  padding-right: 4px;
  position: relative;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>