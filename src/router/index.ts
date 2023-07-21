// Composables
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  // {
  //   path: '../views/Photolibrary.vue',
  //   name: 'Photolibrary',
  //   component: () => import('@/views/photolibrary.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
