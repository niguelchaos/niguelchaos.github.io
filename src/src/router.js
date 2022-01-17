import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
// import FeelTheDisaster from './views/projViews/FeelTheDisaster.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/AboutDetails.vue')
  },
  {
    path: '/feelthedisaster',
    name: 'FeelTheDisaster',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/projViews/FeelTheDisaster.vue')
  },
  {
    path: '/touchinghearts',
    name: 'TouchingHearts',
    component: () => import('./views/projViews/TouchingHearts.vue')
  },
  {
    path: '/timeloopmetroid',
    name: 'TimeloopMetroid',
    component: () => import('./views/projViews/TimeloopMetroid.vue')
  },
  {
    path: '/getmeowtofhere',
    name: 'GetMeowtOfHere',
    component: () => import('./views/projViews/GetMeowtOfHere.vue')
  },
  {
    path: '/tronreplica',
    name: 'TronReplica',
    component: () => import('./views/projViews/TronReplica.vue')
  },
  {
    path: '/jengafortress',
    name: 'JengaFortress',
    component: () => import('./views/projViews/JengaFortress.vue')
  },
  
  {
    path: '/index.html',
    redirect: '/'
  },
  { path: '*',
    name: 'catchAll',
    component: Home
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
