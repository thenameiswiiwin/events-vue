<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
// Axios === Help make API calls, including (Get,post,put,delete requests), (add authentication to each request), (set timeouts if requests take too long), (config defaults for every request), (intercept requests to create middleware), (handle erros and cancel requests properly), (properly serialize and deserialize requests and responses), (etc..)
import EventService from "@/services/EventService.js";

export default {
  name: "EventList",
  components: {
    EventCard, // register it as a child component
  },
  data() {
    return {
      events: null,
    };
  },
  // Lifecycle Hooks === a component has a lifecycle and different hooks (or methods) are run at those different stages in it lifecycle. Example (before it's created, when it's created, before it's mounted, when it's mounted, and so on.)
  // Created === We want to make our API call and get our events when the component lifecycle is "created", so we'll run the "get" method available to us on 'axios', passing in the my-json-seerver url as the argument
  created() {
    EventService.getEvents()
      // Because Axios is a promise-based library and runs asynchronously, we need to be waiting for the promise returned from the "get" request to resolve before proceeding. That's why we added the ".then".
      // ".then" === allows us to wait for the "response" and set our local "events" data equal to it.
      .then((res) => {
        this.events = res.data;
      })
      // Because we want to grab any errors that occur, we've also added ".catch" and we're just logging the "error" to the console.
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
