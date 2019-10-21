<template>
  <el-table
    :header-cell-style="{color:'#333',fontSize:'14px',fontWeight:900,background:'#fff'}"
    :data="tableData"
    ref="multipleTable"
    :height="height"
    stripe
    @selection-change="handleSelectionChange" class="reportTable"
    :default-sort="{prop: 'date', order: 'descending'}"
  >
    <el-table-column>
      <el-table-column align="center" type="selection"></el-table-column>
    </el-table-column>
    <!-- <el-table-column>
      <el-table-column prop="yearMonth" label="年月" width="120" sortable></el-table-column>
    </el-table-column> -->
    <el-table-column class-name="thead-blue" v-for="(item,index) in filter" :key="index" :label="item.type=='data_information'?'A':''">
      <el-table-column :prop="item.fieldName" :label="item.name" width="150" sortable></el-table-column>
    </el-table-column>
    <!-- <el-table-column>
      <el-table-column prop="num" label="商品编号" width="200" sortable></el-table-column>
    </el-table-column>
    <el-table-column>
      <el-table-column prop="name" label="商品名称" width="200" sortable></el-table-column>
    </el-table-column>
    <el-table-column>
      <el-table-column prop="level" label="等级" width="200" sortable></el-table-column>
    </el-table-column>
    <el-table-column>
      <el-table-column prop="product" label="产品" width="280" sortable></el-table-column>
    </el-table-column>
    <el-table-column class-name="thead-blue" label="A" >
      <el-table-column prop="frist_logical_inventory" width="140" label="期初逻辑库存" sortable></el-table-column>
    </el-table-column>
    <el-table-column class-name="thead-blue" label="B">
      <el-table-column prop="logical_purchasing" width="120" label="逻辑采购"  sortable></el-table-column>
    </el-table-column>
    <el-table-column class-name="thead-blue" label="C">
      <el-table-column prop="sales_volumes" width="120" label="营销数量" sortable></el-table-column>
    </el-table-column>
    <el-table-column class-name="thead-blue" label="D">
      <el-table-column prop="inventory_adjustment" width="120" label="调整库存" sortable></el-table-column>
    </el-table-column>
    <el-table-column class-name="thead-blue" label="E">
      <el-table-column prop="intransit" width="120" label="在途"  sortable></el-table-column>
    </el-table-column>
    <el-table-column class-name="thead-blue" label="F">
      <el-table-column prop="logical_inventory" label="逻辑库存" width="120"  sortable></el-table-column>
    </el-table-column>
    <el-table-column class-name="thead-blue" label="G">
      <el-table-column prop="actual_inventory" label="实际库存" width="120" sortable></el-table-column>
    </el-table-column>
    <el-table-column class-name="thead-blue" label="H">
      <el-table-column prop="inventory_variance" width="220" label="库存差异（逻辑vs实际）" sortable></el-table-column>
    </el-table-column> -->
    <!-- <el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table-column> -->
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
  props: ["tableData","filter","height"],
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
<style>
.reportTable .el-table__body-wrapper{ height: 397px !important;}
</style>
<style scoped>
.el-table,
.el-table thead.is-group th {
  background: #fff;
}
</style>
<style>
.el-table th.thead-blue>.cell {
  text-align: center;
  color: #297fd5;
}
</style>