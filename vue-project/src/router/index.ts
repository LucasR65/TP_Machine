import { createApp } from 'vue'
import Home from '../views/HomeView.vue'
import Chefs from '../views/Chef.vue'
import App from '../App.vue'
import ChefDetails from '../views/ChefDetails.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/chef/:id', 
    name: 'Chef', 
    component: ChefDetails,
  },
  {
    path: '/chefs',
    component: Chefs,
  },
  {
    path: '/register',
    component: Register,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

export default router