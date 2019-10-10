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

      <!-- Columns are always 50% wide, on mobile and desktop -->
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
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
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
  margin-left: 13px;
  width: 15px;
  height: 14px;
  opacity: 1;
}

#Title {
  color: #007ac3;
  font-size: 130%;
}
</style>