import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/OtherLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/auth',
        name: 'auth',
        component: () => import('pages/Auth/Index.vue'),
      },
      {
        path: '/verify',
        name: 'verify',
        component: () => import('pages/Auth/Verify.vue'),
      },
      {
        path: '/region',
        name: 'region',
        component: () => import('pages/Region.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/device',
        name: 'device',
        component: () => import('pages/Device.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/start',
        name: 'start',
        component: () => import('pages/Start.vue'),
        meta: {
          auth: true,
        },
      },
    ],
  },
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Index.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/Profile/Index.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/profile/orders',
        name: 'orders',
        component: () => import('pages/Profile/Orders.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/profile/orders/:id/data',
        name: 'data',
        props: true,
        component: () => import('pages/Profile/Data.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/actions/:id',
        name: 'action',
        props: true,
        component: () => import('pages/Action.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/basket',
        name: 'basket',
        props: true,
        component: () => import('pages/Basket/Step1.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/basket/delivery',
        name: 'delivery',
        props: true,
        component: () => import('pages/Basket/Step2.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/tariffs',
        name: 'tariffs',
        props: (route) => ({ query: route.query.id }),
        component: () => import('pages/Tariffs.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/ref',
        name: 'ref',

        component: () => import('pages/Ref/Index.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/ref/account',
        name: 'ref-account',

        component: () => import('pages/Ref/Account.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/ref/list',
        name: 'ref-list',

        component: () => import('pages/Ref/List.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/ref/history',
        name: 'ref-history',

        component: () => import('pages/Ref/History.vue'),
        meta: {
          auth: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
