<template>
  <el-table :header-cell-style="{color:'#333',fontSize:'14px',fontWeight:900,background:'#fff'}" :data="tableData" ref="multipleTable" border height="500" @selection-change="handleSelectionChange" :default-sort = "{prop: 'date', order: 'descending'}">
    <el-table-column><el-table-column align="center" type="selection"></el-table-column></el-table-column>
    <el-table-column><el-table-column prop="month" label="每月" width="150" sortable></el-table-column></el-table-column>
    <el-table-column ><el-table-column prop="num" label="商品编号" width="200" sortable></el-table-column></el-table-column>
    <el-table-column><el-table-column prop="name" label="商品名称" width="200" sortable></el-table-column></el-table-column>
    <el-table-column><el-table-column prop="level" label="等级" width="200" sortable></el-table-column></el-table-column>
    <el-table-column><el-table-column prop="product" label="产品" width="220" sortable></el-table-column></el-table-column>
    <el-table-column class-name="thead-blue" label="A"><el-table-column prop="frist_logical_inventory" label="期初逻辑库存" width="150" sortable></el-table-column></el-table-column>
    <el-table-column label="B"><el-table-column prop="logical_purchasing" label="逻辑采购" width="150" sortable></el-table-column></el-table-column>
    <el-table-column label="C"><el-table-column prop="sales_volumes" label="营销数量" width="150" sortable></el-table-column></el-table-column>
    <el-table-column label="D"><el-table-column prop="inventory_adjustment" label="调整库存" width="150" sortable></el-table-column></el-table-column>
    <el-table-column label="E"><el-table-column prop="logical_inventory" label="逻辑库存" width="150" sortable></el-table-column></el-table-column>
    <el-table-column label="F"><el-table-column prop="actual_inventory" label="实际库存" width="150" sortable></el-table-column></el-table-column>
    <el-table-column label="G"><el-table-column prop="inventory_variance" label="库存差异（逻辑vs实际）" width="150" sortable></el-table-column></el-table-column>
    <el-table-column><el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table-column>
  </el-table>
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
  props: ['tableData'],
  mounted(){
      console.log(this.tableData);
  },
  data() {
    return {
      multipleSelection: []
    };
  }
};
</script>
<style lang="scss" scoped>
    .el-table,.el-table thead.is-group th{background: #fff;}
    .thead-blue{color: #297FD5 !important;}
</style>>