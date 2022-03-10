import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import PageTitle from './components/fragments/PageTitle.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)
app.use(store)
app.use(router)
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
