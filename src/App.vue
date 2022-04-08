<template>
  <div id="app">
    <div id="flashMessage" v-if="this.$store.state.flashMessage">
      {{ this.$store.state.flashMessage }}
    </div>
    <nav>
      <router-link :to="{ name: 'EventList' }">Events</router-link> |
      <router-link :to="{ name: 'AboutView' }">About</router-link> |
      <router-link :to="{ name: 'EventCreate' }">Create Event</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

h2 {
  font-size: 40px;
  font-weight: 700;
}

h3 {
  font-size: 25px;
  font-weight: 700;
}

h4 {
  font-size: 20px;
  font-weight: 700;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

input {
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 24px;
}
input[type="text"] {
  padding: 0px 10px;
}
input:focus {
  border-color: #16c0b0;
  outline: 0;
}

select:focus {
  border-color: #16c0b0;
  outline: 0;
}

.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
}
</style>
