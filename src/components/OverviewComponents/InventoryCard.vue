<template>
  <router-link class="event-link" :to="{ name: 'Overview', params: { id: event.id } }">
    <div class="event-card -shadow" :style="{height:cardheight+'px'}" v-if="type=='PurchaseSale'">
      <div class="row alignCenter">
        <div :class="['col-sm','col-md','col-lg-6','event-card-title',event.Icon]">{{ event.Title }}</div>
        <div class="col-sm col-md col-lg textR fontBig">{{ event.Amount }}</div>
      </div>
      <div class="positionBottom">
        <div class="row">
          <div class="col-sm col-md col-lg textC line nopadding">
            已反馈
            <span>{{ event.FeedbackAmount }}</span>
          </div>
          <div class="col-sm col-md col-lg textC nopadding">
            未反馈
            <span>{{ event.UnFeedbackAmount }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="event-card -shadow" :style="{height:cardheight+'px'}" v-if="type=='Overview'">
      <div class="row alignCenter">
        <div :class="['col-sm','col-md','col-lg-6','event-card-title',event.Icon]">{{ event.Title }}</div>
        <div class="col-sm col-md col-lg textR fontBig">{{ event.Amount }}</div>
      </div>
    </div>
    <div
      class="event-card -shadow"
      :style="{height:cardheight+'px'}"
      v-if="type=='certificateFile'"
    >
      <div class="row alignCenter">
        <div :class="['col-sm','col-md','col-lg','event-card-title','nopadding']">{{ event.Title }}</div>
        <div class="col-sm col-md col-lg positionBottom certificateFile">
          <p class="textR fontBig">{{ event.Amount }}</p>
        </div>
      </div>
    </div>
    <div class="event-card -shadow" :style="{height:cardheight+'px'}" v-if="type=='toBeconfirmed'">
      <div class="row alignCenter">
        <div :class="['col-sm','col-md','col-lg','event-card-title','nopadding']">{{ event.Title }}</div>
        <div class="col-sm col-md col-lg-12 positionBottom toBeconfirmed">
          <p class="textR fontBig">{{ event.Amount }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: Object,
    /* eslint-disable */
    type: "",
    cardheight: ""
  }
};
</script>

<style scoped>
.event-card-title {
  font-size: 20px;
  padding-left: 30px;
}
.nopadding {
  padding: 0;
}
.alignCenter {
  align-items: center;
  margin: 0;
}
.iconycy {
  background: url("~@/assets/iconycy.png") left no-repeat;
}
.iconwcy {
  background: url("~@/assets/iconwcy.png") left no-repeat;
}
.iconsync1 {
  background: url("~@/assets/iconsync1.png") left no-repeat;
}
.iconsync2 {
  background: url("~@/assets/iconsync2.png") left no-repeat;
}
.iconsync3 {
  background: url("~@/assets/iconsync3.png") left no-repeat;
}
.iconSp {
  background: url("~@/assets/iconSp.png") left no-repeat;
}
.el-icon-tickets:before {
  margin-right: 8px;
}
.textR {
  text-align: right;
  padding: 0;
}
.textC {
  text-align: center;
}
.line {
  border-right: 1px solid #ddd;
}
.fontBig {
  font-size: 32px;
}
.el-icon-tickets {
  line-height: 44px;
}
.mt {
  margin-top: 10px;
}
.certificateFile {
  background: url("~@/assets/iconFile.png") left no-repeat;
  background-position-x: 20px;
  background-size: 40px;
}
.toBeconfirmed {
  background: url("~@/assets/iconDqr.png") left no-repeat;
  background-position-x: 20px;
  background-size: 40px;
}
.padR {
  padding-right: 20px;
}
.event-card {
  border-radius: 8px;
  height: 30%;
  padding: 20px;
  margin-bottom: 10px;
  position: relative;
  transition: all 0.2s linear;
  cursor: pointer;
  background: rgba(0, 102, 204, 0.8);
}
.positionBottom {
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0px;
  padding: 0px 20px;
}
.positionBottom span {
  font-size: 25px;
}
.positionBottom p {
  margin: 0;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 100;
}
</style>
