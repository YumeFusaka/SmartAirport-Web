import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/layout/LayoutIndex.vue'),
      redirect: '/login',
      children: [
        {
          path: '/passenger',
          name: 'passenger',
          component: () => import('@/views/passenger/PassengerIndex.vue'),
          redirect: '/passenger/buyTicket',
          children: [
            {
              path: '/passenger/buyTicket',
              name: 'buyTicket',
              component: () => import('@/views/passenger/buyTicket/BuyTicket.vue')
            },
            {
              path: '/passenger/historyTicket',
              name: 'historyTicket',
              component: () => import('@/views/passenger/historyTicket/HistoryTicket.vue')
            },
            {
              path: '/passenger/buyGoods',
              name: 'buyGoods',
              component: () => import('@/views/passenger/buyGoods/BuyGoods.vue')
            },
            {
              path: '/passenger/luggageList',
              name: 'luggageList',
              component: () => import('@/views/passenger/luggageList/LuggageList.vue')
            }
          ]
        },
        {
          path: '/merchant',
          name: 'merchant',
          component: () => import('@/views/merchant/MerchantIndex.vue'),
          redirect: '/merchant/goodsShop',
          children: [
            {
              path: '/merchant/goodsShop',
              name: 'goodsShop',
              component: () => import('@/views/merchant/goodsShop/GoodsShop.vue')
            }
          ]
        },
        {
          path: '/airline',
          name: 'airline',
          redirect: '/airline/ticket',
          component: () => import('@/views/airline/AirlineIndex.vue'),
          children: [
            {
              path: '/airline/ticket',
              name: 'ticket',
              component: () => import('@/views/airline/listTicket/ListTicket.vue')
            },
            {
              path: '/airline/flight',
              name: 'flight',
              component: () => import('@/views/airline/listFlight/ListFlight.vue')
            }
          ]
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
