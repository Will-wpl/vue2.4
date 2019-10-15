<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row align-items-start">
          <div class="col-sm col-md col-lg-3">
            <h4>系统实时动态概览</h4>
          </div>
          <div class="col-sm col-md col-lg"></div>
          <div class="col-sm col-md col-lg-3">
            <el-carousel arrow="always" :interval="50000" height="100px">
              <el-carousel-item v-for="(item,index) in notis" :key="index">
                <p style>{{ item.title }}</p>
                <p>{{ item.title }}</p>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-sm col-md col-lg">
            <h5>进销存</h5>
            <InventoryEventCard v-for="event in events" cardheight="200" type="PurchaseSale" :key="event.id" :event="event" />
          </div>
          <div class="col-sm col-md col-lg">
            <h5>申诉概览</h5>
            <InventoryEventCard v-for="event in events2" cardheight="88" :key="event.id" :event="event" type="Overview" />
          </div>
          <div class="col-sm col-md col-lg">
            <h5>证明文件</h5>
            <InventoryEventCard v-for="event in events3" cardheight="200" :key="event.id" :event="event" type="certificateFile" />
          </div>
          <div class="col-sm col-md col-lg">
            <h5>调整数据</h5>
            <InventoryEventCard v-for="event in events4" cardheight="200" :key="event.id" :event="event" type="toBeconfirmed" />
          </div>
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
  data() {
    return {
      notis: [
        {
          title: "Justin Test"
        },
        {
          title: "Justin Test1"
        },
        {
          title: "Justin Test2"
        }
      ],
      events: [
        {
          id: "events1-1",
          title: "有差异",
          date: "Aug 28 2018",
          time: "10:00",
          icon:"",
          cyVal:120,
          feedback:60,
          unfeedback:65,
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
          icon:"",
          cyVal:84,
          feedback:23,
          unfeedback:7,
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
          icon:"",
          cyVal:11,
          feedback:60,
          unfeedback:65,
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
          icon:"",
          cyVal:20,
          feedback:60,
          unfeedback:65,
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
          icon:"",
          cyVal:30,
          feedback:60,
          unfeedback:65,
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
          icon:"",
          cyVal:120,
          feedback:60,
          unfeedback:65,
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
          icon:"",
          cyVal:120,
          feedback:60,
          unfeedback:65,
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
<style scoped>
h4 {
  text-align: left;
  color: #014282;
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  text-align: center;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  text-align: center;
}

.el-carousel {
  width: 250px;
  align-self: left;
  margin-bottom: 10px;
  border-radius: 25px;
  text-align: center;
}
</style>