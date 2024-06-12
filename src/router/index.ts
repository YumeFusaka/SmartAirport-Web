import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/layout/LayoutIndex.vue'),
      children: [
        {
          path: '/passenger',
          name: 'passenger',
          component: () => import('@/views/passenger/PassengerIndex.vue'),
          children: [
            {
              path: '/passenger/buyTicket',
              name: 'buyTicket',
              component: () => import('@/views/passenger/buyTicket/BuyTicket.vue')
            }
          ]
        },
        {
          path: '/merchant',
          name: 'merchant',
          component: () => import('@/views/merchant/MerchantIndex.vue')
        }
      ]
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
