<template>
  <div v-if="this.$store.state.event">
    <h1>{{ this.$store.state.event.title }}</h1>
    <nav>
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </nav>
    <router-view :event="this.$store.state.event" />
  </div>
</template>
