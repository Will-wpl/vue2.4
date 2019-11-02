<template>
  <div class="buttonStyle">
    <el-button type="primary">
      <i class="el-icon-plus el-icon--left"></i>
      <slot></slot>
      <el-tooltip
        class="item"
        effect="dark"
        :content='tooltipContent'
        placement="bottom"
      >
        <i class="el-icon-question"></i>
      </el-tooltip>
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    tooltipContent: {
      type: String
    }
  }
};
</script>

<style scoped>
.el-dropdown {
  margin-top: 5px;
}

.buttonStyle button {
  background-color: #0066cc;
  border: #0066cc;
  height: 90%;
  font-size: 12px;
}

.buttonStyle > button > span > i.el-icon-plus.el-icon--left {
  border-right: 1px solid white;
  margin-right: 5px;
  padding-right: 4px;
  position: relative;
}

.buttonStyle > button > span > i.el-icon-question {
  margin-left: 4px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>