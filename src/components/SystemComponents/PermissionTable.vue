<template>
  <el-table
    :header-cell-style="{ color : '#333', fontSize : '14px', fontWeight : 900, background : '#fff'}"
    :data="thistableData"
    ref="multipleTable"
    height="500"
    stripe
    @selection-change="handleSelectionChange"
    @sort-change="sortChange"
    :default-sort="{prop: 'date', order: 'descending'}"
  >
    <!-- <el-table-column align="center" type="selection"></el-table-column> -->
    <el-table-column prop="jurisdiction" label="辖区" width="150" sortable></el-table-column>
    <el-table-column prop="userName" label="用户名" width="150" sortable></el-table-column>
    <el-table-column prop="name" label="姓名" width="200" sortable></el-table-column>
    <el-table-column prop="email" label="邮箱" width="200" sortable></el-table-column>
    <el-table-column prop="role" label="用户角色" align="center" width="250" sortable></el-table-column>
    <el-table-column prop="jlist" label="代管权限" width="400" sortable>
      <template slot-scope="scope">
        <div class="jlist-tag" v-html="creataTag(scope.row.jlist)"></div>
      </template>
    </el-table-column>
    <el-table-column prop="switch" label="是否启用" width="150" sortable>
      <template slot-scope="scope">
        <el-switch v-model="scope.row.switch" active-color="#1D77D2" inactive-color="#aaa"></el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作" prop="edit" fixed="right" width="100">
      <template slot-scope="scope">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-s-unfold el-icon--center"></i>
            <b v-show="false">{{scope.row.edit}}</b>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <PermissionEdit
                :rowData="scope.row"
                :index="scope.row.edit"
                :gridData="gridData"
                :areaRole="areaRole"
                :range="range"
                @changeEdit="getChange"
              />
            </el-dropdown-item>
            <el-dropdown-item>
              <PermissionTransfer
                :gridData="gridData"
                :index="scope.row.edit"
                :rowData="scope.row"
                @changeTransfer="getChange"
              />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import PermissionEdit from "@/components/SystemComponents/PermissionModule/PermissionEdit.vue";
import PermissionTransfer from "@/components/SystemComponents/PermissionModule/PermissionTransfer.vue";
import {unserialization,serialization} from "@/utils/serialization.js";
export default {
  components: {
    PermissionEdit,
    PermissionTransfer
  },
  methods: {
    getChange(data, index) {
      this.$set(this.thistableData, index, unserialization(data));
      this.$emit("updateStorage", index, unserialization(data));
      console.log(this.thistableData);
    },
    sortChange(row) {
      console.log(row);
    },
    handleClick(row) {
      console.log(row);
    },
    handleSelectionChange(row) {
      console.log(row);
    },
    creataTag(arr) {
      let html = "";
      for (let i = 0; i < arr.length; i++) {
        html += `<span style="padding: 2px 8px; border:1px solid #ddd; margin-right: 10px;">${arr[i]}</span>`;
      }
      return html;
    },
    watchData(data) {
      this.thistableData = data;
      this.deepCloneTableData = unserialization(this.thistableData);
    }
  },
  props: ["tableData"],
  created() {
    this.watchData(this.tableData);
  },
  mounted() {
    console.log(this.tableData);
  },
  watch: {
    tableData: function(newVal) {
      this.watchData(newVal);
    }
  },
  watchData() {},
  data() {
    return {
      multipleSelection: [],
      thistableData: [],
      deepCloneTableData: [],
      areaRole: [
        {
          value: "MCA代表",
          label: "MCA代表"
        },
        {
          value: "MCA区域数据运维",
          label: "MCA区域数据运维"
        },
        {
          value: "大区管理",
          label: "大区管理"
        },
        {
          value: "MCA经理",
          label: "MCA经理"
        }
      ],
      range: [
        {
          value: "全国",
          label: "全国"
        },
        {
          value: "东区",
          label: "东区"
        },
        {
          value: "南区",
          label: "南区"
        },
        {
          value: "北区",
          label: "北区"
        },
        {
          value: "西区",
          label: "西区"
        }
      ],
      value1: "",
      input1: "",
      value2: [],
      input2: "",
      checked: null,
      currentSelectItem: {},
      gridData: [
        {
          id: 1,
          userName: "joycezhu",
          role: "【MCA经理】",
          name: "朱莉",
          email: "joycezhu@roche.com",
          checked: true
        },
        {
          id: 2,
          userName: "joycezhu",
          role: "【MCA经理】",
          name: "朱莉",
          email: "joycezhu@roche.com",
          checked: false
        },
        {
          id: 3,
          userName: "joycezhu",
          role: "【MCA经理】",
          name: "朱莉",
          email: "joycezhu@roche.com",
          checked: false
        },
        {
          id: 4,
          userName: "joycezhu",
          role: "【MCA经理】",
          name: "朱莉",
          email: "joycezhu@roche.com",
          checked: false
        }
      ]
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