import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '~/layouts/index.vue'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },

  {
    name: 'Login',
    path: '/login',
    component: () => import('~/pages/login/index.vue'),
  },
]

export const authRoutes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        component: () => import('~/pages/home/index.vue'),
      },
    ],
  },
  {
    name: 'About',
    path: '/about',
    redirect: '/about/index',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('~/pages/about/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes.concat(authRoutes),
})

// router.beforeEach(() => {
//   authRoutes.forEach((route) => {
//     router.addRoute(route)
//   })
// })

export default router
