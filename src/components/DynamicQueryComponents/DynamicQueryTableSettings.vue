<template>
  <div>
    <hr />
    <div class="container">
      <span>商业信息</span>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">商业代码</el-checkbox>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">经销商名称</el-checkbox>
        </div>
        <div class="col-lg-4">
          <el-checkbox v-model="checked">大区</el-checkbox>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">区域</el-checkbox>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">省份</el-checkbox>
        </div>
        <div class="col-lg-4">
          <el-checkbox v-model="checked">城市</el-checkbox>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">多渠道准入代表</el-checkbox>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">数据时间</el-checkbox>
        </div>
        <div class="col-lg-4">
          <el-checkbox v-model="checked">等级</el-checkbox>
        </div>
      </div>
      <hr />
      <span>产品信息</span>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">产品代码</el-checkbox>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">产品</el-checkbox>
        </div>
        <div class="col-lg-4">
          <el-checkbox v-model="checked">品牌</el-checkbox>
        </div>
      </div>
      <hr />
      <span>数据信息</span>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">期初逻辑库存</el-checkbox>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">逻辑采购</el-checkbox>
        </div>
        <div class="col-lg-4">
          <el-checkbox v-model="checked">销售数据</el-checkbox>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">调整库存</el-checkbox>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">逻辑库存</el-checkbox>
        </div>
        <div class="col-lg-4">
          <el-checkbox v-model="checked">实际库存</el-checkbox>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <el-checkbox v-model="checked">库存差异逻辑VS实际</el-checkbox>
        </div>
        <div class="col-lg-3"></div>
        <div class="col-lg-3"></div>
      </div>
      <hr />
      <span>历史数据</span>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">M-3库存调整量</el-checkbox>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <el-checkbox v-model="checked">M-2库存调整量</el-checkbox>
        </div>
        <div class="col-lg-4">
          <el-checkbox v-model="checked">M-1库存调整量</el-checkbox>
        </div>
      </div>
      <hr />
      <span>申请状态</span>
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <el-checkbox v-model="checked">是否已申请系统数据调整更新</el-checkbox>
        </div>
        <div class="col-lg-3"></div>
        <div class="col-lg-3"></div>
      </div>
    </div>

    <div class="bottomBox">
      <div class="buttonPostion">
        <table style="width:100%">
          <tr>
            <th>
              <el-button round plain>恢复默认显示</el-button>
            </th>
            <th>
              <el-button type="primary" round>生效</el-button>
            </th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>

<style scoped>
hr {
  width: 96%;
}

.bottomBox {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 0 6px rgba(0, 0, 0, 0.12);
  height: 100px;
  position: relative;
}
.buttonPostion {
  position: absolute;
  right: 10%;
  top: 20%;
}

.el-button {
  margin-left: 10px;
}
</style>