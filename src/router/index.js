import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'

import EditTodo from '@/components/todo/EditTodo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todo/edit',
    name: 'editTodo',
    component: EditTodo
  }
]

const router = new VueRouter({
  mode: 'history',
  // history: true,
  // base: __dirname,
  routes: routes
})

export default router
