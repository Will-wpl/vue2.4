<template>
  <el-main>
    <div>
      <h3>系统实时动态概览</h3>
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <!-- <img src="@/assets/DataMgtBackgroupPic.png" /> -->

    </div>
  </el-main>
</template> 

<script>
import EventCard from "@/components/OverviewComponents/EventCard.vue";

export default {
  name: "AppealOverview",
  components: {
    EventCard
  },
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Beach Cleanup",
          date: "Aug 28 2018",
          time: "10:00",
          location: "Daytona Beach",
          description: "Let's clean up this beach.",
          organizer: "Adam Jahr",
          category: "sustainability",
          attendees: [
            {
              id: "abc123",
              name: "Adam Jahr"
            },
            {
              id: "def456",
              name: "Gregg Pollack"
            },
            {
              id: "ghi789",
              name: "Beth Swanson"
            },
            {
              id: "jkl101",
              name: "Mary Gordon"
            }
          ]
        },
        {
          id: 2,
          title: "Park Cleanup",
          date: "Nov 12 2018",
          time: "12:00",
          location: "132 N Magnolia Street, Orlando, Florida",
          description: "We're going to clean up this park.",
          organizer: "Adam Jahr",
          category: "nature",
          attendees: [
            {
              id: "ghi789",
              name: "Beth Swanson"
            },
            {
              id: "jkl101",
              name: "Mary Gordon"
            }
          ]
        }
        // ,
        // {
        //   id: 3,
        //   title: "Pet Adoption Day",
        //   date: "Dec 2 2018",
        //   time: "12:00",
        //   location: "132 N Magnolia Street, Orlando, Florida",
        //   description: "Help animals find new homes.",
        //   organizer: "Gregg Pollack",
        //   category: "animal welfare",
        //   attendees: [
        //     {
        //       id: "abc123",
        //       name: "Adam Jahr"
        //     },
        //     {
        //       id: "ghi789",
        //       name: "Beth Swanson"
        //     },
        //     {
        //       id: "jkl101",
        //       name: "Mary Gordon"
        //     }
        //   ]
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

h3{
  text-align: left;
  color:#014282;
}

.el-main {
  background-image: url("~@/assets/DataMgtBackgroupPic.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: 100%;
  margin-right: 1%;
}
</style>