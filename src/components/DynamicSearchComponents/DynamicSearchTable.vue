<template>
  <el-table
    :header-cell-style="{color:'#333',fontSize:'14px',fontWeight:900,background:'#fff'}"
    :data="tableData"
    ref="multipleTable"
    border
    height="500"
    @selection-change="handleSelectionChange"
    :default-sort="{prop: 'date', order: 'descending'}"
  >
    <el-table-column align="center" type="selection"></el-table-column>
    <el-table-column prop="applyNum" label="申请单号" width="120" sortable></el-table-column>
    <el-table-column prop="complaintMonth" label="申诉月份" width="240" sortable>
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="bottom">
          <p>超期申诉</p>
          <div slot="reference" class="name-wrapper">{{ scope.row.complaintMonth }}</div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="submitTime" label="提交时间" width="150" sortable></el-table-column>
    <el-table-column prop="complaintName" label="申诉人" width="150" sortable></el-table-column>
    <el-table-column prop="businessNum" label="商业数量" align="center" width="150" sortable>
      <template slot-scope="scope">
        <div slot="reference" class="circularBg">{{ scope.row.businessNum }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="proNum" label="产品数量" align="center" width="150" sortable>
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Herceptin Vial 440mg</p>
          <p>Mabthera Vial 430mg</p>
          <p>Avastin Vial 100mg</p>
          <div slot="reference" class="circularBg">{{ scope.row.proNum }}</div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="diffNum" label="差异数量" align="center" width="150" sortable>
      <template slot-scope="scope">
        <div slot="reference">{{ scope.row.diffNum }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="complaintStatus" label="申诉单状态" width="150" sortable></el-table-column>
    <el-table-column prop="fileStatus" label="证明文件状态" width="150" sortable></el-table-column>
    <el-table-column label="操作" fixed="right" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
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
  props: ["tableData"],
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
<style lang="scss" scoped>
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
</style>>