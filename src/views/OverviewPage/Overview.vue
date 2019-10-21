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
                      <span>{{ item.time }}</span>
                    </p>
                    <p>申诉关闭</p>
                  </div>
                  <div class="col-sm col-md col-lg carousel-time-right">
                    <p>
                      <b>17</b>天
                      <bdo>22</bdo>小时
                    </p>
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
              v-for="event in events"
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
          </div> -->
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
  mounted(){
    this.$axios.getHomeData({}).then((res)=>{
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
      events: [
        {
          id: "events1-1",
          title: "有差异",
          date: "Aug 28 2018",
          time: "10:00",
          icon: "iconycy",
          cyVal: 120,
          feedback: 60,
          unfeedback: 65,
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        },
        {
          id: "events1-2",
          title: "无差异",
          date: "Aug 28 2018",
          time: "10:00",
          icon: "iconwcy",
          cyVal: 84,
          feedback: 23,
          unfeedback: 7,
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        }
      ],
      events2: [
        {
          id: "events2-1",
          title: "待处理",
          date: "Aug 28 2018",
          time: "10:00",
          icon: "iconsync1",
          cyVal: 11,
          feedback: 60,
          unfeedback: 65,
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        },
        {
          id: "events2-2",
          title: "已返回",
          date: "Aug 28 2018",
          time: "10:00",
          icon: "iconsync2",
          cyVal: 20,
          feedback: 60,
          unfeedback: 65,
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        },
        {
          id: "events2-3",
          title: "审批中",
          date: "Aug 28 2018",
          time: "10:00",
          icon: "iconsync3",
          cyVal: 30,
          feedback: 60,
          unfeedback: 65,
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        }
      ],
      events3: [
        {
          id: "events3-1",
          title: "证明文件待补全",
          date: "Aug 28 2018",
          time: "10:00",
          icon: "",
          cyVal: 120,
          feedback: 60,
          unfeedback: 65,
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        }
      ],
      events4: [
        {
          id: "events4-1",
          title: "待确认数据",
          date: "Aug 28 2018",
          time: "10:00",
          icon: "",
          cyVal: 120,
          feedback: 60,
          unfeedback: 65,
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        }
      ],
      events5: [
        {
          id: "events5-1",
          title: "待审批",
          date: "Aug 28 2018",
          time: "10:00",
          icon: "iconsync1",
          cyVal: 3,
          feedback: 60,
          unfeedback: 65,
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        },
        {
          id: "events5-2",
          title: "已审批",
          date: "Aug 28 2018",
          time: "10:00",
          icon: "iconSp",
          cyVal: 7,
          feedback: 60,
          unfeedback: 65,
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        }
      ]
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
  color: #007AC3;
}
.el-carousel div.el-carousel__container .el-carousel__arrow--left {
  left: -40px;
}
.el-carousel div.el-carousel__container .el-carousel__arrow--right {
  right: -40px;
}
.el-main .el-tabs__header{ margin-bottom: 0px; background: #fff;}
.el-main .el-tabs__header .el-tabs__nav{ margin-left: 20px;}
.al-center{ align-items: center;}
.mg0{margin: 0 !important;}
.padL0{padding-left: 0px !important;}
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
  background-size: 30px;
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