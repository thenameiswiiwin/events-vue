import { reactive } from "vue";

// "GStore" allows us to store global state. This allows us to set a value in one component, and get access to that data in another.
// "Event" is where we'll store data returned from our API, and where our component will look for the data.
export default reactive({ flashMessage: "", event: null });
