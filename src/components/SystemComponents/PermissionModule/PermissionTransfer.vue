<template>
  <el-popover placement="right" v-model="visible" width="600" trigger="click">
    <div class="popover-select">
      <span>请指定一名同事负责交接</span>
      <el-input placeholder="Joyce" suffix-icon="el-icon-search" v-model="search"></el-input>
    </div>
    <el-table :data="gridData">
      <el-table-column width="55" align="center">
        <template slot-scope="scope">
          <el-radio v-model="row.transferAuthority" :label="scope.row.id">&nbsp;</el-radio>
        </template>
      </el-table-column>
      <el-table-column property="role" label="职位"></el-table-column>
      <el-table-column property="name" label="姓名"></el-table-column>
      <el-table-column property="email" label="邮箱"></el-table-column>
    </el-table>
    <div class="popover-select textR">
      <el-button type="primary" round @click="submit">转交权限</el-button>
      <el-button round @click="visible = false">取消</el-button>
    </div>
    <span slot="reference">权限代管</span>
  </el-popover>
</template>

<script>
import {unserialization} from "@/utils/serialization.js";
export default {
  methods: {
    getPropData(){
      // let row = JSON.stringify(this.rowData);
      // this.row = JSON.parse(row);
      this.row = unserialization(this.rowData);
    },
    submit() {
      this.visible = false;
      this.$emit("changeTransfer", this.row, this.index);
    }
  },
  props: ["rowData", "gridData", "index"],
  created() {
    this.getPropData();
  },
  watch:{
    rowData:function(){
      this.getPropData();
    }
  },
  mounted() {},
  data() {
    return {
      search: "",
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