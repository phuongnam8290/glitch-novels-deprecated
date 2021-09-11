import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/pages/Index.vue';
import Browse from "@/pages/Browse.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/browse" },
    { path: "/index", component: Index},
    { path: "/browse", component: Browse}
  ]
});

export default router;