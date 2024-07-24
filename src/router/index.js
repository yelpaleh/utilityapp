import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Career from '../views/Career.vue'
import Login from '../views/Login.vue'
import AirportDetail from '@/views/AirportDetail.vue'
import AirportDestinations from '@/views/AirportDestinations.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/airport/:code',
    name: "AirportDetail",
    component: AirportDetail,
  },  //Dynamic Routes: airport/sea
  {
    path: '/airport/:code',
    name: "AirportDetail",
    component: AirportDetail,
		children: [
			{
			  path: 'destinations',
				name: 'AirportDestinations',
				component: AirportDestinations
			}
		]//nested routes: airport/msp/destinations
  },
  {
    path: '/about',
    name: 'About',
    component:About
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
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
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
