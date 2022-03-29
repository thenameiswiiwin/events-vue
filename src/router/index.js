import { createRouter, createWebHistory } from 'vue-router';
import EventList from '@/views/EventList.vue';
import EventLayout from '@/views/event/EventLayout.vue';
import EventDetails from '@/views/event/EventDetails.vue';
import EventRegister from '@/views/event/EventRegister.vue';
import EventEdit from '@/views/event/EventEdit.vue';
import About from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
      },
    ],
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: (to) => {
      return { path: '/events/' + to.params.afterEvent };
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
