<template>
  <el-popover v-model="visible" placement="right" width="600" trigger="click">
    <h4 class="popover-title">操作员管理</h4>
    <el-table class="w100" :data="gridData">
      <el-table-column property="userName" label="用户名"></el-table-column>
      <el-table-column property="role" label="职位"></el-table-column>
      <el-table-column property="name" label="姓名"></el-table-column>
      <el-table-column property="email" label="邮箱"></el-table-column>
    </el-table>
    <div class="popover-select">
      <span>用户角色</span>
      <el-select v-model="row.role" placeholder="MCA区域数据运维">
        <el-option
          v-for="item in areaRole"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="popover-select">
      <span>权限范围</span>
      <el-select v-model="row.jlist" multiple placeholder="全国">
        <el-option v-for="item in range" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <div class="popover-select textR">
      <el-button type="primary" @click="submit" round>确认</el-button>
      <el-button round @click="visible=false">取消</el-button>
    </div>
    <span slot="reference">编辑</span>
  </el-popover>
</template>

<script>
import {unserialization} from "@/utils/serialization.js";
export default {
  methods: {
    getPropData(){
      this.row = unserialization(this.rowData);
    },
    submit() {
      this.visible = false;
      this.$emit("changeEdit", this.row, this.index);
    }
  },
  props: ["rowData", "gridData", "range", "areaRole", "index"],
  created() {
    this.getPropData();
  },
  mounted() {},
  watch:{
    rowData:function(){
      this.getPropData();
    }
  },
  data() {
    return {
      visible: false,
      row: {}
    };
  }
};
</script>
<style scoped>
.el-radio__label {
  display: none;
}
.popover-title {
  font-size: 15px;
}
.popover-select {
  width: 100%;
  margin-top: 15px;
}
.popover-select .el-select {
  width: 100%;
}
.popover-select span {
  display: block;
  margin-bottom: 15px;
}
.textR {
  text-align: right;
}
.jlist-tag span {
  padding: 4px 10px;
  border: 1px solid #ddd;
  margin-right: 10px;
}
.el-table,
.el-table thead.is-group th {
  background: #fff;
}
.thead-blue {
  color: #297fd5 !important;
}
.circularBg {
  border-radius: 100%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #cde6f9;
  margin: 0 auto;
  cursor: default;
}
.w100 {
  width: 100%;
}
</style>