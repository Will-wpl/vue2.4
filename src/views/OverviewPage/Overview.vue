<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg">
            <h4>系统实时动态概览</h4>
          </div>
          <div class="col-sm col-md col-lg">
            <el-carousel arrow="always" class="carousel-time" :interval="50000" height="90px">
              <el-carousel-item v-for="(item,index) in notis" :key="index">
                <div class="row">
                  <div class="col-sm col-md col-lg carousel-time-left">
                    <p>距离</p>
                    <p>
                      <span>{{ item.TimeType }}</span>
                    </p>
                    <p>申诉关闭</p>
                  </div>
                  <div class="col-sm col-md col-lg carousel-time-right">
                    <p v-html="timeHtml(item.TimeInfo)"></p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-sm col-md col-lg">
            <h5>进销存</h5>
            <InventoryEventCard
              v-for="event in events1"
              cardheight="186"
              type="PurchaseSale"
              :key="event.id"
              :event="event"
            />
          </div>
          <div class="col-sm col-md col-lg">
            <h5>申诉概览</h5>
            <InventoryEventCard
              v-for="event in events2"
              cardheight="88"
              :key="event.id"
              :event="event"
              type="Overview"
            />
          </div>
          <div class="col-sm col-md col-lg">
            <h5>证明文件</h5>
            <InventoryEventCard
              v-for="event in events3"
              cardheight="186"
              :key="event.id"
              :event="event"
              type="certificateFile"
            />
          </div>
          <div class="col-sm col-md col-lg">
            <h5>调整数据</h5>
            <InventoryEventCard
              v-for="event in events4"
              cardheight="186"
              :key="event.id"
              :event="event"
              type="toBeconfirmed"
            />
          </div>
          <!-- <div class="col-sm col-md col-lg">
            <h5>审批概览</h5>
            <InventoryEventCard
              v-for="event in events5"
              cardheight="88"
              :key="event.id"
              :event="event"
              type="Overview"
            />
          </div>-->
        </div>
      </div>
      <!-- <img src="@/assets/DataMgtBackgroupPic.png" /> -->
    </div>
  </el-main>
</template> 

<script>
import InventoryEventCard from "@/components/OverviewComponents/InventoryCard.vue";
export default {
  name: "AppealOverview",
  components: {
    InventoryEventCard
  },
  methods:{
    timeHtml(info){
      if(info){
        let html = '';
        if(info.includes("-")){
          html = `<b>${(info.split("-")[0]).split("$")[0]}</b>${(info.split("-")[0]).split("$")[1]}
          <bdo>${(info.split("-")[1]).split("$")[0]}</bdo>${(info.split("-")[1]).split("$")[1]}`
        }else{
          html = info.split("$")[1];
        }
        return html;
      }
    }
  },
  mounted(){
    this.$axios.getHomeData().then((res)=>{
      this.notis = res.data.HomeIndexTimes;
      console.log(res.data.homeIndexStatisticals);
      res.data.homeIndexStatisticals.map(item=>{
        if(item.Type === "进销存"){
          this.events1.push(item);
        }else if(item.Type == "申诉概览"){
          this.events2.push(item);
        }else if(item.Type == "证明文件"){
          this.events3.push(item);
        }else if(item.Type == "调整数据"){
          this.events4.push(item);
        }
      })
      // this.events1 = res.data.events1;
      // this.events2 = res.data.events2;
      // this.events3 = res.data.events3;
      // this.events4 = res.data.events4;
      // this.events5 = res.data.events5;
      this.$store.dispatch('saveHomeData',res.data);
      console.log(this.jdata.code);
    }).catch((err)=>{
      console.log(err);
    })
  },
  computed: {
    jdata(){
      return this.$store.state.home.datas.homeData
    }
  },
  data() {
    return {
      notis: [
        {
          time: "2019年9月"
        },
        {
          time: "2019年10月"
        },
        {
          time: "2019年11月"
        }
      ],
      events1: [],
      events2: [],
      events3: [],
      events4: [],
      events5: []
    };
  }
};
</script>
<style>
.el-carousel div.el-carousel__container {
  border-radius: 100px;
  width: 400px;
  margin: 0 auto;
  background: #fff;
}
.el-carousel div.el-carousel__container .el-carousel__arrow {
  background: none;
  outline: none;
  font-size: 35px;
  height: auto;
  color: #007ac3;
}
.el-carousel div.el-carousel__container .el-carousel__arrow--left {
  left: -40px;
}
.el-carousel div.el-carousel__container .el-carousel__arrow--right {
  right: -40px;
}
.el-main .el-tabs__header {
  margin-bottom: 0px;
  background: #fff;
}
.el-main .el-tabs__header .el-tabs__nav {
  margin-left: 20px;
}
.al-center {
  align-items: center;
}
.mg0 {
  margin: 0 !important;
}
.padL0 {
  padding-left: 0px !important;
}
.carousel-time-right p b {
  font-size: 32px;
  font-weight: bold;
}
.carousel-time-right p bdo {
  font-size: 28px;
  font-weight: bold;
}
table .el-dropdown{
  right: 0; bottom: 0; float: none;
}
</style>
<style scoped>
h5,
h4 {
  text-align: left;
  color: #014282;
}
.align-items-start {
  margin-bottom: 30px;
}
.align-items-start h4 {
  line-height: 90px;
}
.carousel-time {
  float: right;
}
.el-main {
  background-image: url("~@/assets/DataMgtBackgroupPic.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel {
  width: 480px;
  align-self: left;
}
.el-carousel div.el-carousel__container {
  border-radius: 100px;
  overflow: hidden;
  background: #fff;
}
.carousel-time .row {
  margin: 0;
  align-items: center;
  height: 100%;
}
.carousel-time-left {
  font-size: 12px;
  margin-left: 15px;
}
.carousel-time-left p {
  line-height: 20px;
  margin: 0;
  font-size: 14px;
  color: #707070;
}
.carousel-time-left p span {
  color: #007ac3;
  font-size: 18px;
  font-weight: bold;
}
.carousel-time-right {
  padding-right: 15px;
  padding-left: 0px;
}
.carousel-time-right p {
  margin: 0;
  font-size: 16px;
  color: #707070;
  padding-right: 35px;
  background: url("~@/assets/iconCountdown.png") no-repeat right;
  background-size: 23px;
}
.carousel-time-right p b {
  font-size: 32px;
  font-weight: bold;
}
.carousel-time-right p bdo {
  font-size: 28px;
  font-weight: bold;
}
</style>