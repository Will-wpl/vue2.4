<template>
  <el-table
    :header-cell-style="{ color : '#333', fontSize : '14px', fontWeight : 900, background : '#fff'}"
    :data="tableData"
    ref="multipleTable"
    height="500"
    @selection-change="handleSelectionChange"
    :default-sort="{prop: 'date', order: 'descending'}"
  >
    <!-- <el-table-column align="center" type="selection"></el-table-column> -->
    <el-table-column prop="remindName" label="提醒规则名" width="150" sortable></el-table-column>
    <el-table-column prop="condition" label="判断条件" width="150" sortable></el-table-column>
    <el-table-column prop="triggerTime" label="触发时间" width="200" sortable></el-table-column>
    <el-table-column prop="sendRemind" label="发送提醒" width="200" sortable></el-table-column>
    <el-table-column prop="receiveRole" label="提醒接收角色" align="center" width="150" sortable></el-table-column>
    <el-table-column prop="remindFrequency" label="提醒频率" width="400" sortable></el-table-column>
    <el-table-column prop="switch" label="是否启用" width="150" sortable>
      <template slot-scope="scope">
        <el-switch v-model="scope.row.switch" active-color="#1D77D2" inactive-color="#aaa"></el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作" prop="edit" fixed="right" width="100">
      <template slot-scope="scope">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-more el-icon--center"></i>
            <b v-show="false">{{scope.row.edit}}</b>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <template slot-scope="scope">
                    <div v-show="false">{{scope}}</div> 
                    <span class="el-icon-edit btnBlue" @click="showEditing" slot="reference">编辑</span>
                </template>
            </el-dropdown-item>
            <el-dropdown-item>
              <template slot-scope="scope">
                    <div v-show="false">{{scope}}</div> 
                    <span class="el-icon-delete btnRed" slot="reference">删除</span>
                </template>
            </el-dropdown-item>
            <el-dropdown-item>
                <template slot-scope="scope">
                    <div v-show="false">{{scope}}</div> 
                    <span class="el-icon-delete btnBlue" slot="reference">发送手动提醒</span>
                </template>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
    handleSelectionChange (row) {
        this.tableData.forEach(item => {
          if (item.id !== row.id) {
            item.checked = false
          }
        })
        console.log(row)
　　　　　this.currentSelectItem = row
      },
      showEditing(){
          this.$emit("edit");
      }
  },
  props: ["tableData"],
  mounted() {
    console.log(this.tableData);
  },
  data() {
    return {
      multipleSelection: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: "",input1:"",
      value2: "",input2:"",
      checked: null,currentSelectItem:{},
      gridData: [
        {
          id:1,
          userName: "joycezhu",
          role: "【MCA经理】",
          name: "朱莉",
          email: "joycezhu@roche.com"
        },
        {
          id:2,
          userName: "joycezhu",
          role: "【MCA经理】",
          name: "朱莉",
          email: "joycezhu@roche.com"
        },
        {
          id:3,
          userName: "joycezhu",
          role: "【MCA经理】",
          name: "朱莉",
          email: "joycezhu@roche.com"
        },
        {
          id:4,
          userName: "joycezhu",
          role: "【MCA经理】",
          name: "朱莉",
          email: "joycezhu@roche.com"
        }
      ]
    };
  }
};
</script>
<style scoped>
.el-radio__label{ display: none;}
.btnBlue{ color: #1D77D2; padding-left: 5px;}
.btnRed{ color: red; padding-left: 5px;}
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