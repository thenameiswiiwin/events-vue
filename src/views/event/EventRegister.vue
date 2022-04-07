<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ["event"],
  methods: {
    register() {
      this.$store.state.flashMessage =
        "You are successfully registered for " + this.event.title;

      setTimeout(() => {
        this.$store.state.flashMessage = "";
      }, 3000);

      this.$router.push({
        name: "EventDetails",
      });
    },
  },
};
</script>
