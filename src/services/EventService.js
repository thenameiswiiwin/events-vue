import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/thenameiswiiwin/real-world-events-vue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  // perPage === Event to return per page
  // page === the page we're on
  getEvents() {
    // URL string
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
};
