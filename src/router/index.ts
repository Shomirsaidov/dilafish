import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/reel/567500',
    component: () => import('../views/Entry.vue')
  },
  {
    path: '/reel/667890log',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/finish',
    component: () => import('../views/Finish.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
