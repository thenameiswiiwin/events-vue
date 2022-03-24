<template>
  if have an event, then display the details. If not, have to wait.
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  // can now pass in the route's id as prop. Which is feed into the get event API call
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    // the route's id get fed here. "this.id"
    EventService.getEvent(this.id)
      .then((res) => {
        this.event = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
