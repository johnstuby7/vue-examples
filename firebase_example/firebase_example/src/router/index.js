import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'

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
      component: Feed,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next()
    } else {
      alert('You dont have access!')
      next('/')
    }
  } else {
    next()
  }
})
export default router
