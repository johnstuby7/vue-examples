import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Register from '../views/Register.vue'
import Signin from '../views/Signin.vue'
import Feed from '../views/Feed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/sign-in',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    }
  ]
})

export default router
