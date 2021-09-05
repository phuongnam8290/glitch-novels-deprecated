import { createRouter, createWebHistory } from 'vue-router';

import Index from './pages/Index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index}
  ]
});

export default router;