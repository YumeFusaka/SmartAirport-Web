import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeIndex.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginIndex.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/RegisterIndex.vue')
    }
  ]
})

export default router
