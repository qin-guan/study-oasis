import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/home',
    component: HomePage,
    children: [
      {
        path: '',
        redirect: '/home/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/HomeDashboardPage.vue')
      },
      {
        path: 'help',
        component: () => import('@/views/HomeHelpPage.vue'),
      },
      {
        path: 'chat',
        component: () => import('@/views/HomeChatPage.vue')
      }
    ],
  },
  {
    path: '/home/chat/details',
    component: () => import('@/views/HomeChatDetailsPage.vue')
  },
  {
    path: '/home/book/:id',
    component: () => import('@/views/HomeBookPage.vue')
  },
  {
    path: '/home/find',
    component: () => import('@/views/HomeFindPage.vue')
  },
  {
    path: '/home/help/:question',
    component: () => import('@/views/HomeHelpDetailsPage.vue'),
  },
  {
    path: '/home/help/new',
    component: () => import('@/views/HomeHelpNewPage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
