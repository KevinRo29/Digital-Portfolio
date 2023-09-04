import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: 'aboutme'
      },
      {
        path: 'aboutme',
        name: 'aboutme',
        component: () => import('@/views/AboutMeView.vue')
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('@/views/ProjectsView.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
