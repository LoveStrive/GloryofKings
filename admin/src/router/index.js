import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Categories_create from "../views/Categories_create";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {
        path:'/categories/create',
        name:'Categories_create',
        component: Categories_create
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
