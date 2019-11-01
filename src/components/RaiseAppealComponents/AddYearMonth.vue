<template>
    <div class="container-fluid">
      <div class="row productRowPosition">
        <div style="padding-right:0px" class="col-1">
          <div class="row">
            <div style="padding-right:0px" class="col-6">
              <font size="1">
                <slot></slot>
              </font>
            </div>
            <div style="padding:0px;" class="col-6">
              <i style="height: 10%;width:auto" class="el-icon-plus"></i>
            </div>
          </div>
        </div>

        <div style="padding-left:0px;" class="col-11">
          <el-select
            v-model="value"
            multiple
            placeholder=""
            class="YMLineRemove"
          >
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
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "2019-6",
          label: "2019-6"
        },
        {
          value: "2019-7",
          label: "2019-7"
        },
        {
          value: "2019-8",
          label: "2019-8"
        }
      ],
      value: []
    };
  }
};
</script>

<style scoped>
.productRowPosition {
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.container-fluid {
  padding: 0;
}

.el-select {
  width: 100%;
}
</style>