<template>
  <div class="rule-month">
    <h4>{{month}}月</h4>
    <div class="row al-center mb10">
      <label class="col-sm col-md col-lg-3">月结窗口期</label>
      <div class="col-sm col-md col-lg">
        <el-time-picker clearable v-model="value.monthDay" placeholder="00:00      至       17:00"></el-time-picker>
      </div>
      <div class="col-sm col-md col-lg">
        <el-time-select clearable v-model="value.monthTime" placeholder="00:00      至       17:00"></el-time-select>
      </div>
    </div>
    <div class="row al-center mb10">
      <label class="col-sm col-md col-lg-3">申诉窗口期</label>
      <div class="col-sm col-md col-lg">
        <el-time-picker clearable v-model="value.appealDay" placeholder="00:00      至       17:00"></el-time-picker>
      </div>
      <div class="col-sm col-md col-lg">
        <el-time-select clearable v-model="value.appealTime" placeholder="00:00      至       17:00"></el-time-select>
      </div>
    </div>
    <div class="row al-center mb10">
      <label class="col-sm col-md col-lg-3">可申诉数据月份</label>
      <div class="col-sm col-md col-lg">
        <el-time-picker clearable v-model="value.realAppealMonth" placeholder="00:00      至       17:00"></el-time-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSelectionChange(row) {
      this.tableData.forEach(item => {
        if (item.id !== row.id) {
          item.checked = false;
        }
      });
      this.currentSelectItem = row;
    },
    showEditing() {
      this.$emit("edit");
    }
  },
  props: {
    month: "",
    value:{
        
    }
  },
  mounted() {

  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.rule-month {
  padding: 15px;
  background: #fff;
}
.rule-month label{
    margin: 0;
}
.rule-month h4 {
  color: #777474;
  line-height: 40px;
  text-align: center;
  font-size: 13px;
}
.mb10 {
  margin-bottom: 10px;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{ width: 100%;}
</style>