import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Career from '../views/Career.vue'
import Login from '../views/Login.vue'
import AirportDetail from '@/views/AirportDetail.vue'
import AirportDestinations from '@/views/AirportDestinations.vue'
import AddCategory from "../views/category/AddCategory.vue";
import ViewCategory from "../views/category/ViewCategory.vue";
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
    path: "/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/category",
    name: "ViewCategory",
    component: ViewCategory,
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
