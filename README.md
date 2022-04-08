# Real World Event using Vue 3

## Live Site

```
https://events-for-good-l7jz.onrender.com/
```

---

## Project Setup

- Cloning this project:
  `git clone https://github.com/thenameiswiiwin/real-world-events-vue.git`

- Installing all dependencies:
  `yarn install`

- Compiles and hot-reloads for development:
  `yarn serve`

- Compiles and minifies for production:
  `yarn build`

- Lints and fixes files:
  `yarn lint`

---

## Packages Used:

```
* Axios
  |- Promise based HTTP client for the browser and node.js
* NProgress
  |- For slim progress bars for Ajax'y applications.
```

---

## Hosting and Database

```
* Render
  |- Unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git.
* My JSON Server
  |- Get a full fake REST API.
  |- db.json
```

---

## Table Content

```
1. Vue Router
2. Vuex
```

---

# 1. Vue Router

> ## Overview:

Overview of all different ways we can receive and parse URL data into our components with Vue Router. This will ensure we have the tools we need to build pagination.

> ## Problem: How do we read query parameters off the URL?

Often when we write pagination, we might have a URL that looks like this:

```
http://example.com/events?page=4
```

How can we get access to "page" inside our component?

> ## Solution: $route.query.page

Inside our component to read the page listing all we need to do inside our template is write:

```JavaScript
<h1>You are on page {{ $route.query.page }}</h1>
```

To get access from inside component code, we'll need to add "this.":

```JavaScript
computed: {
  page() {
    return parseInt(this.$route.query.page) || 1
  },
}
```

> ## Problem: What if we wanted the page to be part of the URL?

There are some cases in web development wher you might want the page number to be an actual part of the url, instead of in the query parameters (which come after a question mark).

> ## Solution: Route Parameter

To solve this we'd likely have a route that looked like:

```JavaScript
const routes = [
  ...
  { path: '/events/:page', component: Events},
]
```

Then inside our event component, we could access this in the template as such:

```JavaScript
<h1>You are on page {{ $route.params.page }}</h1>
```

Notice that in this case we are using "$route.params" instead of "$route.query" as we did above.

> ## Bonus: Passing Params as Props

If we want to make our component more reusable and testable, we can decouple it from the route by telling our router to pass our Param "page" as a Component prop. To do this, inside our router we would write:

```JavaScript
const routes = [
  ...
  { path: '/events/:page', component: Events, props: true },
]
```

Then inside our component we would have:

```JavaScript
<template>
  <h1>You are on page {{ page }}</h1>
</template>
<script>
export default {
  props: ["page"]
};
</script>
```

Noticed we are delcaring "page" as a prop and rendering it to the page.

> ## Problem: Route level configuration

Sometimes we have a component we want to be able to configure at the route level. For example, if there is extra information we want to display or not.

> ## Solution: Props Object Mode

When we want to send configuration into a component from the router, it might look like this:

```JavaScript
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: { showExtra: true },
  },
]
```

Noticed the static props object with "showExtra". We can the receive this as a porp in our component, and do something with it:

```JavaScript
<template>
  <div class="home">
    <h1>This is a home page</h1>
    <div v-if="showExtra">Extra stuff</div>
  </div>
</template>
<script>
export default {
  props: ["showExtra"]
};
</script>
```

> ## Problem: How to transform query parameters?

Sometimes you may have a situation where the data getting sent into your query parameters needs to be transformed before it reaches your component. For example, you may want to cast parameters into other types, rename them, or combine values.

In our case let’s assume our URL is sending in "e=true" as a query parameter, while our component wants to receive "showExtra=true" using the same component in the above example. How could we do this transform?

> ## Solution: Props Function Mode

In our route to solve this problem we would write:

```JavaScript
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({ showExtra: route.query.e }),
  },
```

Notice we’re sending in an anonymous function which receives the "route" as an argument, then pulls out the query parameter called "e" and maps that to the "showExtra" prop.

The anonymous function above could also be written like:

```JavaScript
props: route => {
  return { showExtra: route.query.e }
}
```

It’s a little more verbose, but I wanted to show you this to remind you that you could place complex transformations or validations inside this function.

---

# 2. Vuex

> ## Overview

Vuex: Vue's state management library.

> ## The Case for State Management

Vuex is Vue-s own state management pattern and library.

State is the data that your components depend on and render. Things like blog posts, to-do items, and so on. Without Vuex, as your applications grows, each Vue component might have its own version of state.

But if one component changes its state, and a distant relativ is also using the same state, we need to communicate that change. There's the default way of comunicting events up and passing props down to share data, but that can become overly complicated. Instead we can consolidate all of our state into one place. One location that contains the current state of our entire application. One single source of truth.

`A Single Source of Truth` This is what Vuex provides, and every component has direct access to this global state.

Just like the Vue instance's data, this State is reactive. When one component updates the State, other components that are using that datat get notified, automatically receiving the new value.

But just consolidating datat into a single source of truth doesn't fully solve the problems of managing state. We need some standardization, Otherwise, changes to our State could be unpredictable and untraceable.

> ## A State Management Pattern

Vuex provides a full state management pattern for a simple and standardized way to make state changes.

```JavaScript
const state = new Vuex.Store({
    state: {
        ...
    },
    mutations: {
        ...
    },
    actions: {
        ...
    },
    getters: {
        ...
    },
})
```

While the Vue instance has a `data` property, the Vuex store has `state`. Both are reactive.

And while the instance has `methods`, which among other things can update `data`, the store has `actions`, which can update the state.

And while theinstance has `computed` properties, the store has `getters`, which allow us to access a filtered, derived, and computed version of our `state`.

Additonally, Vuex provides a way to track state changes, with something called `mutation`. We can use `actions` to commit `mutations`.

> ## An example Vuex Store

```JavaScript
const store = new Vuex.Store({
    state: {
        isLoading: false,
        todos: []
    },
    mutations: {
        SET_LOADING_STATUS(state) {
            state.isLoading = !state.isLoading
        },
        SET_TODOS(state, todos) {
            state.todos = todos
        }
    },
    actions: {
        fetchTodos(context) {
            fetchTodos(context) {
                context.commit('SET_LOADING_STATUS')
                axios.get('/api/todos').then(response => {
                    context.commit('SET_LOADING_STATUS')
                    context.commit('SET_TODOS', response.data.todos)
                })
            }
        }
    },
})
```

In our `State`, we have an `isLoading` property, along an array for `todos`.

Below that we have `Mutation` to switch our `isLoading` state between `true` and `false`. Along with a Mutation to set our state with the todos that we'll receive from an API call in our action below.

Our `Action` here has multiple steps. First, it'll commit the Mutation to set the `isLoading` status to `true`. Then it'll make an API call, then when the response returns, it will commit the Mutation to set the `isLoading` status to `false`. Finally it'll commit the Mutation to set the state of our `todos` with the response we got back from our API.

If we need the ability to only reteive the todos that are labeled done, we can use a Getter for that, which will retieve only the specific state that we want.

```JavaScript
const store = new Vuex.Store({
    state: {
        isLoading: false,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: true },
        ]
    },
    getters: {
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        }
    }
})
```

> ## Global State

> > ### Adding Global State

`store/index.js`

```JavaScript
import { createStore } from 'vuex'

export default createStore({
  state: {
    flashMessage: "",
    event: null,
    user: 'Adam Jahr'
  }
  ...
})
```

These `states` is globally accessible throughout the application. Vuex "injects" ahte store into all child components from the root component, and will be available on them as `this.$store`.

Access the global states by writting `this.$store.state.<name>`.

However, it’s recommended to keep your `data` separate from your Vuex state to avoid reactivity issues. For example, if the value of your state’s `user` changed, that change won’t be reflected within the data property where you initially called it, since the data is only created once when the component is constructed.

So to avoid accidentally submitting stale state attached to the `event`, we can instead set the organizer for our event when we submit the form. That way, we are only ever accessing the `user` state when we’re ready to create the event.

```JavaScript
methods: {
  onSubmit() {
    this.event.organizer = this.$store.state.user
    console.log("Event:", this.event)
  }
}
```
