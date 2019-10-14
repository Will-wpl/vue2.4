<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg-3">
            <h4>提醒设置</h4>
          </div>
          <div class="col"></div>
          <div class="col-1 align-self-end">
            <i @click="showFilter" style="color:#007AC3" class="el-icon-s-operation OpIcons"></i>
            <i
              @click="hideFilter"
              style="color:#007AC3; margin-left: 10px;"
              class="el-icon-arrow-up OpIcons"
            ></i>
          </div>
        </div>
        <!-- Filter Section -->
        <div v-show="ifFilterShow" class="row mt20">
          <div class="col-sm col-md col-lg-3">
            <el-input clearable v-model="name" placeholder="名称"></el-input>
          </div>
          <div class="col-sm col-md col-lg-3">
            <el-select clearable v-model="conditions" placeholder="选择判断条件">
              <el-option
                v-for="item in condition.options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg-3">
            <el-select clearable v-model="role" placeholder="接受角色">
              <el-option
                v-for="item in condition.options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="col-sm col-md col-lg-3">
            <el-select clearable v-model="rate" placeholder="选择更新频率">
              <el-option
                v-for="item in condition.options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="row textR mt20">
          <div v-show="ifFilterShow" class="col-sm col-md col-lg textR">
            <el-button @click="clearFilters" size="mini" round>取消</el-button>
            <el-button size="mini" round>筛选</el-button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm col-md col-lg w100 mt20">
            <div class="systembox">
              <h4 class="system-title row">
                <div class="col-sm col-md col-lg">全部提醒 5</div>
                <div class="col-sm col-md col-lg-2 el-icon-plus textR blue" @click="showEdit">新增</div>
              </h4>
              <RemindTable :tableData="tableData" @edit="showEdit" />
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
            </div>
          </div>
        </div>
      </div>
      <el-dialog title="提醒规则" :visible.sync="dialogFormVisible">
        <el-form :model="form" label-position="right">
          <el-form-item label="提醒规则名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" placeholder="提醒规则名"></el-input>
          </el-form-item>
          <el-form-item label="发送提醒" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择发送提醒">
              <el-option label="自动提醒邮件1" value="shanghai"></el-option>
              <el-option label="自动提醒邮件2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="判断条件" :label-width="formLabelWidth">
            <el-select v-model="select1" multiple placeholder="请选择判断条件">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <div class="line">
              <el-col :span="5">
                <el-select v-model="select2" placeholder="请选择">
                  <el-option value="等于"></el-option>
                  <el-option value="大于"></el-option>
                  <el-option value="小于"></el-option>
                </el-select>
              </el-col>
              <el-col :span="1">&nbsp;</el-col>
              <el-col :span="8">
                <el-select v-model="select3" multiple placeholder="请选择">
                  <el-option value="未操作"></el-option>
                  <el-option value="已操作"></el-option>
                </el-select>
              </el-col>
            </div>
          </el-form-item>
          <el-form-item label="提醒接收角色" :label-width="formLabelWidth">
            <el-col :span="14">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="触发点" :label-width="formLabelWidth">
            <el-col :span="3">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="窗口期" value="shanghai"></el-option>
                <el-option label="其他期" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">
              <el-select v-model="form.region" placeholder="1">
                <el-option label="1" value="shanghai"></el-option>
                <el-option label="2" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">
              <el-select v-model="form.region" placeholder="天">
                <el-option label="天" value="shanghai"></el-option>
                <el-option label="周" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">
              <el-select v-model="form.region" placeholder="前">
                <el-option label="前" value="shanghai"></el-option>
                <el-option label="后" value="shanghai"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="提醒频率" :label-width="formLabelWidth">
            <el-col :span="2">
              <el-select v-model="form.region" placeholder="1">
                <el-option label="1" value="shanghai"></el-option>
                <el-option label="2" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">
              <el-select v-model="form.region" placeholder="次">
                <el-option label="次" value="shanghai"></el-option>
              </el-select>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="2">
              <el-select v-model="form.region" placeholder="天">
                <el-option label="天" value="shanghai"></el-option>
                <el-option label="周" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="提醒文本" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" round @click="dialogFormVisible = false">保 存</el-button>
          <el-button @click="dialogFormVisible = false" round>取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </el-main>
</template> 

<script>
import {
  conditionConfig,
  RemindTableData
} from "../../assets/mockdata/mockdata";
import RemindTable from "@/components/SystemComponents/RemindTable.vue";
export default {
  name: "RemindSetting",
  components: {
    RemindTable
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
      this.name = "";
      this.conditions = "";
      this.role = "";
      this.rate = "";
    },
    showEdit() {
      this.dialogTableVisible = true;
      this.dialogFormVisible = true;
    }
  },
  data() {
    return {
      ifFilterShow: true,
      name: "",
      conditions: "",
      role: "",
      rate: "",
      procode: "",
      activeName: "first",
      time: "",
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
      tableData: RemindTableData,
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
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
      select1: "",
      select2: "",
      select3: ""
    };
  },
  mounted() {}
};
</script>

<style scoped>
.line {
  margin-top: 15px;
}
.el-form--label-top .el-form-item__label {
  margin: 0;
}
.systembox {
  width: 100%;
  border: 1px solid #ddd;
  padding: 15px;
  background: #fff;
}
.system-title {
  color: #a2a0a2;
  font-size: 15px;
  margin: 0;
  border-bottom: 1px solid #dcdfe6;
  padding-bottom: 15px;
}
.blue {
  color: #007ac3;
  font-size: 14px;
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
}
.mt20 {
  margin-top: 20px;
}
.el-main {
  background: #eef2f6;
}
.el-select,
.el-input {
  width: 100% !important;
}
</style>