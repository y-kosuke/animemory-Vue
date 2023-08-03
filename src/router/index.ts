// Composables
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/Photolibrary',
    name: 'Photolibrary',
    component: () => import('@/views/Photolibrary.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/Login/Register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/Login/changePassword',
    name: 'ForgetPassword',
    component: () => import('@/views/ForgetPassword.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router