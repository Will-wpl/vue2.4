<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg-3">
            <h4>申诉窗口期设置</h4>
          </div>
        </div>
        <!-- Filter Section -->
        <div class="row mt20">
          <div class="col-sm col-md col-lg w100">
            <el-tabs v-model="activeName">
              <el-tab-pane label="设置规则" name="first">
                <div class="ruleSetting">
                  <div class="row al-center">
                    <div class="col-sm col-md col-lg-2">
                      <span class="title-top">年份</span>
                      <el-select clearable v-model="value1" placeholder="2019">
                        <el-option
                          v-for="item in condition.options1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                    <div class="col-sm col-md col-lg textR">2019/07/02 00:21 最后更新</div>
                  </div>
                  <div class="row al-center mt20">
                    <div class="col-sm col-md col-lg-2">
                      <span class="title-bottom">1.申诉限制</span>
                      <div class="rule-box">
                        <span class="title-top">可申诉数据月份</span>
                        <el-select clearable v-model="value1" placeholder="2019">
                          <el-option
                            v-for="item in condition.options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                        <span class="title-top">超期申诉上限</span>
                        <el-select clearable v-model="value1" placeholder="2019">
                          <el-option
                            v-for="item in condition.options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="col-sm col-md col-lg-5 padL0">
                      <span class="title-bottom">2.月结窗口期</span>
                      <div class="rule-box row mg0">
                        <div class="col-sm col-md col-lg-6">
                          <span class="title-top">起始日</span>
                          <div class="row al-center">
                            <div class="col-sm col-md col-lg-1">第</div>
                            <div class="col-sm col-md col-lg">
                              <el-select clearable v-model="value1" placeholder="1">
                                <el-option
                                  v-for="item in condition.options1"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </div>
                            <div class="col-sm col-md col-lg-1">个</div>
                            <div class="col-sm col-md col-lg">
                              <el-select clearable v-model="value1" placeholder="自然日">
                                <el-option
                                  v-for="item in condition.options1"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </div>
                          </div>
                          <span class="title-top">最后一天开放时间</span>
                          <el-time-picker
                            clearable
                            v-model="value1"
                            placeholder="00:00      至       17:00"
                          ></el-time-picker>
                        </div>
                        <div class="col-sm col-md col-lg-6">
                          <span class="title-top">截至日</span>
                          <div class="row al-center">
                            <div class="col-sm col-md col-lg-1">第</div>
                            <div class="col-sm col-md col-lg">
                              <el-select clearable v-model="value1" placeholder="1">
                                <el-option
                                  v-for="item in condition.options1"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </div>
                            <div class="col-sm col-md col-lg-1">个</div>
                            <div class="col-sm col-md col-lg">
                              <el-select clearable v-model="value1" placeholder="工作日">
                                <el-option
                                  v-for="item in condition.options1"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm col-md col-lg-5 padL0">
                      <span class="title-bottom">2.月结窗口期</span>
                      <div class="rule-box row mg0">
                        <div class="col-sm col-md col-lg-6">
                          <span class="title-top">起始日</span>
                          <div class="row al-center">
                            <div class="col-sm col-md col-lg-1">第</div>
                            <div class="col-sm col-md col-lg">
                              <el-select clearable v-model="value1" placeholder="1">
                                <el-option
                                  v-for="item in condition.options1"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </div>
                            <div class="col-sm col-md col-lg-1">个</div>
                            <div class="col-sm col-md col-lg">
                              <el-select clearable v-model="value1" placeholder="自然日">
                                <el-option
                                  v-for="item in condition.options1"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </div>
                          </div>
                          <span class="title-top">最后一天开放时间</span>
                          <el-time-picker
                            clearable
                            v-model="value1"
                            placeholder="00:00      至       17:00"
                          ></el-time-picker>
                        </div>
                        <div class="col-sm col-md col-lg-6">
                          <span class="title-top">截至日</span>
                          <div class="row al-center">
                            <div class="col-sm col-md col-lg-1">第</div>
                            <div class="col-sm col-md col-lg">
                              <el-select clearable v-model="value1" placeholder="1">
                                <el-option
                                  v-for="item in condition.options1"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </div>
                            <div class="col-sm col-md col-lg-1">个</div>
                            <div class="col-sm col-md col-lg">
                              <el-select clearable v-model="value1" placeholder="工作日">
                                <el-option
                                  v-for="item in condition.options1"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt20">
                    <div class="col-sm col-md col-lg-12 textR">
                      <el-button type="primary" @click="clearFilters" round>批量生效</el-button>
                      <el-button round>恢复默认</el-button>
                    </div>
                  </div>
                </div>
                <div class="ruleSetting-month row mt20">
                  <div class="col-sm col-md col-lg-6 mb20" v-for="(item,index) in value" :key="index">
                    <RuleSettingMonth :month="(index+1)" :value="item" />
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="操作日志记录" name="second">
                <OperationLogTable :tableData="tableData" />
                <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage1"
                  :page-size="100"
                  layout="prev, pager, next, jumper,total"
                  :total="400"
                  class="white_bg"
                ></el-pagination>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </el-main>
</template> 

<script>
import {
  conditionConfig,
  OperationLogTableData,
  windowPeriodSettingMonth
} from "../../assets/mockdata/mockdata";
import OperationLogTable from "@/components/SystemComponents/OperationLogTable.vue";
import RuleSettingMonth from "@/components/SystemComponents/RuleSettingMonth.vue";
export default {
  name: "DynamicReport",
  components: {
    OperationLogTable,
    RuleSettingMonth
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(e) {
      console.log(e);
    },
    showFilter() {
      this.ifFilterShow = true;
    },
    hideFilter() {
      this.ifFilterShow = false;
    },
    clearFilters() {
      this.procode = "";
      this.time = "";
      this.value1 = "";
      this.value2 = "";
      this.value3 = "";
      this.value4 = "";
      this.value5 = "";
      this.value6 = "";
      this.value7 = "";
      this.value8 = "";
      this.value9 = "";
    }
  },
  data() {
    return {
      ifFilterShow: true,
      procode: "",
      activeName: "first",
      time: "",
      value:windowPeriodSettingMonth,
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      condition: conditionConfig,
      tableData: OperationLogTableData,
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4
    };
  },
  mounted() {}
};
</script>

<style scoped>
.ruleSetting {
  background: #fff;
  padding: 15px;
}
.rule-box {
  background: #f8f9fd;
  padding: 15px;
}
.title-top {
  font-size: 16px;
  color: #a1a1a1;
  margin: 10px 0px;
  display: block;
}
.title-bottom {
  color: #555555;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
}
.w100 {
  width: 100%;
}
.align-self-end {
  text-align: right;
}
h4 {
  text-align: left;
  color: #297fd5;
}
.white_bg {
  background: #fff;
  padding: 10px 0px;
}
.total {
  color: #a2a0a2;
  font-size: 15px;
}
.total span {
  color: #297fd5;
}
.report-title {
  font-size: 12px;
  color: #a2a0a2;
}
.textR {
  text-align: right;
  color: #a1a1a1;
}
.mt20 {
  margin-top: 20px;
}
.mb20 {
  margin-bottom: 20px;
}
.el-main {
  background: #eef2f6;
}
.el-select,
.el-input {
  width: 100% !important;
}
</style>