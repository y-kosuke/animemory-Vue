// Composables
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/photo_library',
    name: 'PhotoLibrary',
    component: () => import('@/views/PhotoLibrary.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/login/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/login/change_password',
    name: 'ForgetPassword',
    component: () => import('@/views/ForgetPassword.vue'),
  },
  {
    path: '/quit',
    name: 'QuitCompletion',
    component: () => import('@/views/QuitCompletion.vue'),
  },
  {
    path: '/my_profile',
    name: 'MyProfile',
    component: () => import('@/views/MyProfile.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router