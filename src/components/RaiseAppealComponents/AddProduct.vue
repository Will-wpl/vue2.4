<template>
  <el-main>
    <div class="container-fluid">
      <div class="row productRowPosition">
        <div @click="productSelect" style="padding-right:0px" class="col-1">
          <div class="row">
            <div style="padding-right:0px" class="col-6">
              <font size="1">产品</font>
            </div>
            <div style="padding:0px;" class="col-6">
              <i style="height: 10%;width:auto" class="el-icon-plus"></i>
            </div>
          </div>
        </div>

        <div style="padding-left:0px;" class="col-11">
          <el-select
            id="addProduct"
            v-model="productvalue"
            multiple
            placeholder="Please Select Product"
            class="productLineRemove"
          >
            <el-option
              v-for="item in productoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      productoptions: [
        {
          value: "HTML",
          label: "HTML"
        },
        {
          value: "CSS",
          label: "CSS"
        },
        {
          value: "JavaScript",
          label: "JavaScript"
        }
      ],
      productvalue: []
    };
  },
  methods: {
    productSelect() {
      document.getElementById("addProduct").click();
    }
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

.el-main {
  padding: 0 15px;
}
</style>
<style >
/* .el-select input[type="text"] {
  background-color: inherit;
  outline: none;
  border:none
}

.el-select .el-input__suffix {
  display: none;
} */
</style>