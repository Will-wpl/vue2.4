<template>
  <el-main>
    <div class="container-fluid">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <div class="row">
        <div class="col-2">
          <span id="Title" style>动态查询</span>
        </div>
        <div class="col"></div>
        <div class="col-1 align-self-end">
          <i style="color:#007AC3" class="el-icon-s-operation OpIcons"></i>
          <i style="color:#007AC3" class="el-icon-arrow-up OpIcons"></i>
        </div>
      </div>

      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <div class="row">
        <div class="col-4">
          <el-input placeholder="Please input" v-model="input" clearable></el-input>
        </div>
        <div class="col-2">
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="col-2">
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="col-2">
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="col-2">
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>

      <div style="margin-top: 5px;" class="row">
        <div class="col-4">
          <div class="row">
            <div class="col-6">
              <el-select v-model="value" clearable placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="col-6">
              <el-select v-model="value" clearable placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="col-2">
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="col-2">
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="col-2">
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="col-2">
          <el-select v-model="value" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>

      <!-- Cancle Filter Button -->
      <div style="margin-top: 5px;" class="row">
        <div class="col"></div>
        <div class="col-2">
          <span style="margin-left: 5px;">
            <el-button size="mini" round>取消</el-button>
            <el-button size="mini" round>筛选</el-button>
          </span>
        </div>
      </div>

      <!-- Main Table -->
      <div style="margin-top: 5px;" class="row">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="申诉单" name="first">
            <el-table
              ref="multipleTable"
              :data="tableData"
              style="width: 200%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column property="name" label="申请单号" width="140"></el-table-column>
              <el-table-column label="申诉月份" width="140">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column property="name" label="情况" width="100"></el-table-column>
              <el-table-column property="name" label="提交时间" width="100"></el-table-column>
              <el-table-column property="name" label="申诉人" width="100"></el-table-column>
              <el-table-column property="name" label="商业数量" width="100">
                <template>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Bottom Center prompts info"
                    placement="bottom"
                  >
                    <el-button type="primary" size="mini" circle plain>1</el-button>
                  </el-tooltip>
                </template>
              </el-table-column>
              <el-table-column property="name" label="产品数量" width>
                <template>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Bottom Center prompts info"
                    placement="bottom"
                  >
                    <el-button type="primary" size="mini" circle plain>1</el-button>
                  </el-tooltip>
                </template>
              </el-table-column>
              <el-table-column property="name" label="差异数量" width></el-table-column>
              <el-table-column property="name" label="申诉明细状态" width="120"></el-table-column>
              <el-table-column property="name" label="原因复核状态" width="120"></el-table-column>
              <el-table-column property="name" label="证明文件状态" width="120"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      <i class="el-icon-more el-icon--center"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </el-tab-pane>
          <el-tab-pane label="进销存" name="second">
            <el-table
              ref="multipleTable"
              :data="tableData"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column label="Date" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column property="name" label="Name" width="120"></el-table-column>
              <el-table-column property="address" label="Address" show-overflow-tooltip></el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- Main Table -->
      <div style="margin-top:15px" class="row">
        <el-button round>
          <i class="el-icon-download"></i>Export Excel
        </el-button>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      activeName: "first",
      tableData: [
        {
          serialNO: "",
          appealDate: "2016-05-03",
          isException: "",
          submitTime: "No. 189, Grove St, Los Angeles",
          appealerName: "",
          commercialNO: "",
          productNO: "",
          gapNO: "",
          appealDetailStatus: "",
          reasonConfirmStatus: "",
          appealFileStatus: ""
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-08",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-06",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-07",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: ""
    };
  }
};
</script>

<style scoped>
.el-main {
  background-color: #eef2f6;
}
.OpIcons {
  margin-left: 10px;
  width: 15px;
  height: 14px;
  opacity: 1;
}

#Title {
  color: #007ac3;
  font-size: 130%;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>