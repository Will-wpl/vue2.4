<template>
  <router-link class="event-link" :to="{ name: 'Overview', params: { id: event.id } }">
    <div class="event-card -shadow">
        
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <!-- <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon> -->
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: Object
  }
};
</script>

<style scoped>
.event-card {
  width: 394px;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: #0066cc;
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
