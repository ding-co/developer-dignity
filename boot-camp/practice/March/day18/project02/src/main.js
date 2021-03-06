import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import mixin from './mixins'
import i18nPlugin from './plugins/i18n'
import en from './i18n/en'
import ko from './i18n/ko'
import router from './router'
import PageTitle from './components/fragments/PageTitle.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VueLoading from 'vue-loading-overlay'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'vue-loading-overlay/dist/vue-loading.css'

const i18nStrings = { en, ko }

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSweetalert2)
app.use(VueLoading)
app.mixin(mixin)
app.use(i18nPlugin, i18nStrings)
app.component('page-title', PageTitle)

app.directive('focus', {
  mounted(ele) {
    ele.focus()
  }
})

app.directive('number', {
  mounted(ele) {
    ele.addEventListener('input', () => {
      event.target.value = event.target.value.replace(/[^0-9]/g, '')
    })
  }
})

app.directive('lowercase', {
  mounted(ele) {
    ele.addEventListener('input', () => {
      event.target.value = event.target.value.replace(/[^a-z]/g, '')
    })
  }
})

app.directive('uppercase', {
  mounted(ele) {
    ele.addEventListener('input', () => {
      event.target.value = event.target.value.replace(/[^A-Z]/g, '')
    })
  }
})

app.directive('korean', {
  mounted(ele) {
    ele.addEventListener('input', () => {
      event.target.value = event.target.value.replace(
        /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]|\|/g,
        ''
      )
    })
  }
})

app.mount('#app')
