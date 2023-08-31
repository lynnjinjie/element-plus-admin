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
    component: Layout,
    meta: { icon: 'carbon:dashboard', title: '控制台', hidden: false },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('~/pages/dashboard/index.vue'),
      },
    ],
  },
  {
    name: 'Home',
    path: '/home',
    component: Layout,
    meta: { icon: 'carbon:home', title: '首页', hidden: false },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('~/pages/home/index.vue'),
      },
    ],
  },
  {
    name: 'About',
    path: '/about',
    // redirect: '/about/index',
    component: Layout,
    meta: { icon: 'carbon:bot', title: '关于', hidden: false },
    children: [
      {
        path: '',
        name: 'About',
        component: () => import('~/pages/about/index.vue'),
      },
    ],
  },
  {
    path: '/demo',
    component: Layout,
    meta: { icon: 'carbon:folder-move-to', title: 'demo', hidden: false },
    children: [
      {
        path: '3',
        name: 'Demo3',
        component: () => import('~/pages/demo/page/demo3.vue'),
        meta: { icon: 'carbon:folder-move-to', title: 'demo3', hidden: false },
      },
      {
        path: '1',
        name: 'Demo1',
        component: () => import('~/pages/demo/page/demo1.vue'),
        meta: { icon: 'carbon:folder-move-to', title: 'demo1', hidden: false },
      },
      {
        path: '2',
        name: 'Demo2',
        component: () => import('~/pages/demo/page/demo2.vue'),
        meta: { icon: 'carbon:folder-move-to', title: 'demo2', hidden: false },
      },
    ],
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    meta: { icon: 'carbon:bot', title: '关于', hidden: true },
    component: () => import('~/pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...constantRoutes, ...authRoutes],
})

// router.beforeEach(() => {
//   authRoutes.forEach((route) => {
//     router.addRoute(route)
//   })
// })

export default router
