import { createRouter, createWebHistory } from 'vue-router'
// import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
// import HelloView from '../views.HelloView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // },
  // {
  //   path: '/hello',
  //   name: 'hello',
  //   component: HelloView
  // },
  {
    path: '/about',
    name: 'about',
    component: (/* webpackChunkName: "about", webpackPrefetch: true */) =>
      import('../views/AboutView.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    component: (/* webpackChunkName: "hello" */) =>
      import('../views/HelloView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingInputView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
