<template>
  <el-main>
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm col-md col-lg-3">
            <h4>系统实时动态概览</h4>
          </div>
          <div class="col-sm col-md col-lg"></div>
          <div class="col-sm col-md col-lg-3">
            <el-carousel arrow="always" :interval="50000" height="100px">
              <el-carousel-item v-for="item in notis" :key="item">
                <p style="">{{ item.title }}</p>
                <p>{{ item.title }}</p>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-sm col-md col-lg"><h5>进销存</h5></div>
          <div class="col-sm col-md col-lg"><h5>申诉概览</h5></div>
          <div class="col-sm col-md col-lg"><h5>证明文件</h5></div>
          <div class="col-sm col-md col-lg"><h5>调整数据</h5></div>
        </div>
        <div class="row">
          <div class="col-sm col-md col-lg">
            <InventoryEventCard v-for="event in events" :key="event.id" :event="event" />
          </div>
          <div class="col-sm col-md col-lg">
            <div class="row">
              <div class="col-sm col-md col-lg">
                <EventCard v-for="event in events" :key="event.id" :event="event" />
              </div>
              <div class="col-sm col-md col-lg">
                <EventCard v-for="event in events" :key="event.id" :event="event" />
              </div>
            </div>
          </div>
          <div class="col-sm col-md col-lg">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
          </div>
          <div class="col-sm col-md col-lg">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm col-md col-lg-3">
            <InventoryEventCard v-for="event in events" :key="event.id" :event="event" />
          </div>
          <div class="col-sm col-md col-lg-3">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
            <br>
            <br>
            <br>
            <br>
          </div>
          <div class="col-sm col-md col-lg"></div>
        </div>
      </div>
      <!-- <img src="@/assets/DataMgtBackgroupPic.png" /> -->
    </div>
  </el-main>
</template> 

<script>
import EventCard from "@/components/OverviewComponents/EventCard.vue";
import InventoryEventCard from "@/components/OverviewComponents/InventoryCard.vue";

export default {
  name: "AppealOverview",
  components: {
    EventCard,
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
          id: 1,
          title: "Truck Cleanup",
          date: "Aug 28 2018",
          time: "10:00",
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability"
        }
        // ,
        // {
        //   id: 2,
        //   title: "Park Cleanup",
        //   date: "Nov 12 2018",
        //   time: "12:00",
        //   location: "132 N Magnolia Street, Orlando, Florida",
        //   description: "We're going to clean up this park.",
        //   organizer: "Adam Jahr",
        //   category: "nature"
        // }
        // ,
        // {
        //   id: 3,
        //   title: "Pet Adoption Day",
        //   date: "Dec 2 2018",
        //   time: "12:00",
        //   location: "132 N Magnolia Street, Orlando, Florida",
        //   description: "Help animals find new homes.",
        //   organizer: "Gregg Pollack",
        //   category: "animal welfare"
        // }
      ]
    };
  }
};
</script>

<style scoped>
.Overview {
  /* background-image: url("https://www.w3schools.com");
  background-color: #2ae22a; */
}

h4 {
  text-align: left;
  color: #014282;
}

.el-main {
  background-image: url("~@/assets/DataMgtBackgroupPic.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  margin-right: 1%;
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
  text-align:center;
}

.container {
  
}
</style>