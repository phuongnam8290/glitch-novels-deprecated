import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/pages/Index.vue';
import Browse from "@/pages/Browse.vue";
import Rankings from "@/pages/Rankings.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/rankings" },
    { path: "/index", component: Index},
    { path: "/browse", component: Browse},
    { path: "/rankings", component: Rankings}
  ]
});

export default router;