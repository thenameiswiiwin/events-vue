import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/thenameiswiiwin/real-world-vue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  // perPage === Event to return per page
  // page === the page we're on
  getEvents(perPage, page) {
    // URL string
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
};
