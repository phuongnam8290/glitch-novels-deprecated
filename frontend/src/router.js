import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/pages/Index.vue';
import Browse from "@/pages/Browse.vue";
import Rankings from "@/pages/Rankings.vue";
import Schedule from "@/pages/Schedule.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/schedule" },
    { path: "/index", component: Index},
    { path: "/browse", component: Browse},
    { path: "/rankings", component: Rankings},
    { path: "/schedule", component: Schedule}
  ]
});

export default router;