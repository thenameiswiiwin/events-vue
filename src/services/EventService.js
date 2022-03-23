import axios from "axios";

// apiClient === single Axios instance for our app
const apiClient = axios.create({
  // Base URL for all of our calls to use
  baseURL: "https://my-json-server.typicode.com/thenameiswiiwin/real-world-vue",
  withCredentials: false,
  // Headers === For authentications & configuration for communicating with our server
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// export a method, called (getEvents()), that return the Axios "apiClient" from above, which make a get request
export default {
  getEvents() {
    // /events === added onto the "baseURL" above
    return apiClient.get("/events");
  },
};
