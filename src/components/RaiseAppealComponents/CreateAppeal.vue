<template>
  <el-main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm col-md col-lg-12">安庆上药众协大药房有限公司</div>
        <div class="col-sm col-md col-lg-12">
          <el-collapse accordion>
            <el-collapse-item name="1">
              <template slot="title">
                <AddButton>商业申诉原因</AddButton>
              </template>
              <div>Consistent with real life: in line with the process and logic of real life,</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
import AddButton from '@/components/RaiseAppealComponents/AddButton.vue';
export default {
    components: {
        AddButton
    },
};
</script>

<style scoped>
.el-main{
    min-height: 75px;
}

.container-fluid {
  padding: 0;
}

.el-dropdown {
  margin-top: 5px;
}

.el-dropdown button {
  background-color: #0066cc;
  border: #0066cc;
  font-size: 12px;
}

.el-dropdown > button > span > i {
  border-right: 1px solid white;
  margin-right: 0px;
  padding-right: 4px;
  position: relative;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>