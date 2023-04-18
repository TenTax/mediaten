import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/pages/ProductsPage.vue'),
  },
  {
    path: '/suppliers',
    name: 'suppliers',
    component: () => import('@/pages/SuppliersPage.vue'),
  },
  {
    path: '/catalog/:subsection',
    name: 'subsection',
    component: () => import('@/pages/SubsectionPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('@/pages/ErrorPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
