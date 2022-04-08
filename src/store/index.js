import { createStore } from "vuex";

export default createStore({
  state: {
    flashMessage: "",
    event: null,
    events: [],
    user: "Huy Nguyen",
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {},
  modules: {},
});
