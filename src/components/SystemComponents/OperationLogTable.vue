<template>
  <el-table
    :header-cell-style="{ color : '#333', fontSize : '14px', fontWeight : 900, background : '#fff'}"
    :data="tableData"
    ref="multipleTable"
    height="500"
    stripe
    :default-sort="{prop: 'userUpdate', order: 'descending'}"
  >
    <el-table-column prop="userRole" label="角色" sortable></el-table-column>
    <el-table-column prop="userName" label="用户名" sortable></el-table-column>
    <el-table-column prop="userFullName" label="姓名" sortable></el-table-column>
    <el-table-column prop="userAction" label="动作" sortable></el-table-column>
    <el-table-column prop="userChange" label="更改项" sortable></el-table-column>
    <el-table-column prop="userUpdate" label="修改时间" sortable></el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSelectionChange (row) {
        this.tableData.forEach(item => {
          if (item.id !== row.id) {
            item.checked = false
          }
        })
        console.log(row)
　　　　　this.currentSelectItem = row
      },
  },
  props: ["tableData"],
  mounted() {
    console.log(this.tableData);
  },
  data() {
    return {
    }
  }
};
</script>
<style scoped>
.el-radio__label{ display: none;}
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