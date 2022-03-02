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
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingCheckboxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingStyleView.vue')
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingClassView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: (/* webpackChunkName: "databinding" */) =>
      import('../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: (/* webpackChunkName: "event" */) =>
      import('../views/2_event/EventClickView.vue')
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: (/* webpackChunkName: "event" */) =>
      import('../views/2_event/EventChangeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
