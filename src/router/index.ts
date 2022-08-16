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
    name: 'Dashboard',
    path: '/dashboard',
    redirect: '/dashboard/index',
    component: Layout,
    meta: { icon: 'carbon:dashboard', title: '控制台' },
    children: [
      {
        path: 'index',
        component: () => import('~/pages/dashboard/index.vue'),
      },
    ],
  },
  {
    name: 'Home',
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    meta: { icon: 'carbon:home', title: '首页' },
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
    meta: { icon: 'carbon:bot', title: '关于' },
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
