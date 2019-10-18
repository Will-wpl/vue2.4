<template>
  <el-table
    :header-cell-style="{ color : '#333', fontSize : '14px', fontWeight : 900, background : '#fff'}"
    :data="tableData"
    ref="multipleTable"
    height="500"
    stripe
    @selection-change="handleSelectionChange"
    :default-sort="{prop: 'date', order: 'descending'}"
  >
    <!-- <el-table-column align="center" type="selection"></el-table-column> -->
    <el-table-column prop="number" label="编号" sortable></el-table-column>
    <el-table-column prop="reason" label="理由" sortable></el-table-column>
    <el-table-column prop="type" label="类型" sortable></el-table-column>
    <el-table-column prop="relation" label="关联申诉表单" width="500" sortable>
        <template slot-scope="scope">
            <div class="jlist-tag" v-html="creataTag(scope.row.relation)"></div>
        </template>
    </el-table-column>
    <el-table-column prop="switch" label="是否启用" sortable>
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
              <el-popover placement="right" width="600" trigger="click">
                <h4 class="popover-title">操作员管理</h4>
                <div class="popover-select">
                  <span>理由</span>
                  <el-select v-model="value1" placeholder="理由">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div class="popover-select">
                  <span>类型</span>
                  <el-select v-model="value2" placeholder="类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div class="popover-select">
                  <span>关联申诉表单</span>
                  <el-select v-model="value2" placeholder="关联申诉表单">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div class="popover-select textR">
                  <el-button type="primary" round>确认</el-button>
                  <el-button round>取消</el-button>
                </div>
                <span slot="reference">编辑</span>
              </el-popover>
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
    creataTag(arr) {
      let html = "";
      for (let i = 0; i < arr.length; i++) {
        html += `<span style="padding: 2px 8px; border:1px solid #ddd; margin-right: 10px;">${arr[i]}</span>`;
      }
      return html;
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