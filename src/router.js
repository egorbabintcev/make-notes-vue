import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Note from '@/views/Note.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:id',
      name: 'Note',
      component: Note,
    },
  ],
});

export default router;
