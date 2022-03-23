<template>
  <div class="events">
    <h1>Events For Good</h1>
    <!-- V-For directive === loop through the events data object -->
    <!-- :key === give each event a unique key, gives Vue a way to identify and can keep tracl of each unique "EventCard" -->
    <!-- As we iterate over the "events" array to create a new "EventCard" for each event object, we're passing in that "event" object into a new ":event" prop we've added to the "EventCard". This way, each "EventCard" has all of the data it needs to display its own event info -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
// EventCard is a child component to this file
import EventCard from "@/components/EventCard.vue";
export default {
  name: "HomeView",
  components: {
    EventCard, // register it as a child component
  },
  // Data Option
  data() {
    return {
      // Events Data
      events: [
        {
          id: 5928101,
          category: "animal welfare",
          title: "Cat Adoption Day",
          description: "Find your new feline friend at this event.",
          location: "Meow Town",
          date: "January 28, 2022",
          time: "12:00",
          petsAllowed: true,
          organizer: "Kat Laydee",
        },
        {
          id: 4582797,
          category: "food",
          title: "Community Gardening",
          description: "Join us as we tend to the community edible plants.",
          location: "Flora City",
          date: "March 14, 2022",
          time: "10:00",
          petsAllowed: true,
          organizer: "Fern Pollin",
        },
        {
          id: 8419988,
          category: "sustainability",
          title: "Beach Cleanup",
          description: "Help pick up trash along the shore.",
          location: "Playa Del Carmen",
          date: "July 22, 2022",
          time: "11:00",
          petsAllowed: false,
          organizer: "Carey Wales",
        },
      ],
    };
  },
};
</script>

<!-- "Scoped" attribute allows us to "scope and isolate" these styles to just this component -->
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
