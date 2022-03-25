<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "EventList",
  // This component received a prop called "page"
  props: ["page"],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    // Inside the created() lifecycle hook, send in "2" Events per page, and "this.page" Send in the current page
    EventService.getEvents(2, this.page)
      .then((res) => {
        this.events = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
