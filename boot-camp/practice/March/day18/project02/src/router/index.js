import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView'
// import AboutView from '../views/AboutView.vue'
// import HelloView from '../views.HelloView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login2',
    component: LoginView
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
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: (/* webpackChunkName: "event" */) =>
      import('../views/2_event/EventKeyView.vue')
  },
  {
    path: '/extra/if',
    name: 'RenderingIfView',
    component: (/* webpackChunkName: "extra" */) =>
      import('../views/3_extra/RenderingIfView.vue')
  },
  {
    path: '/extra/show',
    name: 'RenderingShowView',
    component: (/* webpackChunkName: "extra" */) =>
      import('../views/3_extra/RenderingShowView.vue')
  },
  {
    path: '/extra/computed',
    name: 'ComputedView',
    component: (/* webpackChunkName: "extra" */) =>
      import('../views/3_extra/ComputedView.vue')
  },
  {
    path: '/extra/watch',
    name: 'WatchView',
    component: (/* webpackChunkName: "extra" */) =>
      import('../views/3_extra/WatchView.vue')
  },
  {
    path: '/extra/lifecycle',
    name: 'LifecycleHook',
    component: (/* webpackChunkName: "extra" */) =>
      import('../views/3_extra/LifecycleHookView.vue')
  },
  {
    path: '/reuse/page',
    name: 'PageView',
    component: (/* webpackChunkName: "reuse" */) =>
      import('../views/4_reuse/PageView.vue')
  },
  {
    path: '/reuse/list',
    name: 'ListView',
    component: (/* webpackChunkName: "reuse" */) =>
      import('../views/4_reuse/ListView.vue')
  },
  {
    path: '/reuse/slot',
    name: 'SlotView',
    component: (/* webpackChunkName: "reuse" */) =>
      import('../views/4_reuse/SlotView.vue')
  },
  {
    path: '/reuse/parent',
    name: 'ParentView',
    component: (/* webpackChunkName: "reuse" */) =>
      import('../views/4_reuse/ParentView.vue')
  },
  {
    path: '/advanced/provide',
    name: 'ProvideView',
    component: (/* webpackChunkName: "advanced" */) =>
      import('../views/5_advanced/ProvideView.vue')
  },
  {
    path: '/advanced/directive',
    name: 'CustomDirectiveView',
    component: (/* webpackChunkName: "advanced" */) =>
      import('../views/5_advanced/CustomDirectiveView.vue')
  },
  {
    path: '/advanced/mixin',
    name: 'MixinView',
    component: (/* webpackChunkName: "advanced" */) =>
      import('../views/5_advanced/MixinView.vue')
  },
  {
    path: '/advanced/plugin',
    name: 'PluginView',
    component: (/* webpackChunkName: "advanced" */) =>
      import('../views/5_advanced/PluginView.vue')
  },
  {
    path: '/vuex/todo',
    name: 'TodoView',
    component: (/* webpackChunkName: "vuex" */) =>
      import('../views/6_vuex/TodoView.vue')
  },
  {
    path: '/template/listtodetail',
    name: 'ListToDetailView',
    component: (/* webpackChunkName: "template" */) =>
      import('../views/7_template/ListToDetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)

  if (to.path === '/') {
    next()
  } else {
    if (store.getters['user/isLogin']) {
      next()
    } else {
      store.commit('user/logout')
      next('/')
    }
  }
})

export default router
