import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Career from '../views/Career.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'About',
    component:AboutView
  },
  {
    path: '/career',
    name: 'Career',
    component:Career
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  }
]
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: function () {
//       return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//     },
//     {
//       path: '/career',
//       name: 'Carrers',
//       component: function () {
//         return import(/* webpackChunkName: "career" */ '../views/Career.vue')
//       },      
//     {
//       path: '/login',
//       name: 'Login',
//       component: function () {
//         return import(/* webpackChunkName: "login" */ '../views/Login.vue')
//       }
//   }
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
