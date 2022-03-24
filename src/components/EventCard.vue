<template>
  <!-- v-bind to an object, inside the object, we specified the name of the route we want to route to. Route to the name of the component Make it more scalible, dont need to go to each route and update the path manually, easier to maintain. All you need to change of the route itself, to update -->
  <!-- params === add event id to router's parameter.  -->
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="event-card">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
  |
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
