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
    <el-table-column prop="jurisdiction" label="辖区" width="150" sortable></el-table-column>
    <el-table-column prop="userName" label="用户名" width="150" sortable></el-table-column>
    <el-table-column prop="name" label="姓名" width="200" sortable></el-table-column>
    <el-table-column prop="email" label="邮箱" width="200" sortable></el-table-column>
    <el-table-column prop="role" label="用户角色" align="center" width="150" sortable></el-table-column>
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
              <el-popover placement="right" width="600" trigger="click">
                <h4 class="popover-title">操作员管理</h4>
                <el-table class="w100" :data="gridData">
                  <el-table-column property="userName" label="用户名"></el-table-column>
                  <el-table-column property="role" label="职位"></el-table-column>
                  <el-table-column property="name" label="姓名"></el-table-column>
                  <el-table-column property="email" label="邮箱"></el-table-column>
                </el-table>
                <div class="popover-select">
                  <span>用户角色</span>
                  <el-select v-model="value1" placeholder="MCA区域数据运维">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
                <div class="popover-select">
                  <span>权限范围</span>
                  <el-select v-model="value2" placeholder="全国">
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
            <el-dropdown-item>
              <el-popover placement="right" width="600" trigger="click">
                <div class="popover-select">
                  <span>请指定一名同事负责交接</span>
                  <el-input placeholder="Joyce" suffix-icon="el-icon-search" v-model="input1"></el-input>
                </div>
                <el-table :data="gridData" @current-change="handleSelectionChange">
                  <el-table-column
                    width="55" align="center">
                    <template slot-scope="scope"> 
          　　　　　　　<el-radio v-model="checked" :label="scope.row.id">&nbsp;</el-radio>
                    </template>
                  </el-table-column>
                  <el-table-column property="role" label="职位"></el-table-column>
                  <el-table-column  property="name" label="姓名"></el-table-column>
                  <el-table-column property="email" label="邮箱"></el-table-column>
                </el-table>
                <div class="popover-select textR">
                  <el-button type="primary" round>转交权限</el-button>
                  <el-button round>取消</el-button>
                </div>
                <span slot="reference">权限代管</span>
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