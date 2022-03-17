import VueCookies from 'vue-cookies'

export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {
        // name: 'ding-co',
        // email: 'ding-co@gmail.com',
        // tel: '010-0000-0000'
      }
    }
  },
  getters: {
    isLogin(state) {
      // if (state.userInfo.name) {
      //   return true
      // } else {
      //   return false
      // }

      if (VueCookies.get('userInfo')) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    // vue-cookies
    // vuex-persistedstate
    setUser(state, userInfo) {
      state.userInfo = userInfo
      VueCookies.set('userInfo', userInfo, '8h')
    },
    logout(state) {
      state.userInfo = {}
      VueCookies.remove('userInfo')
    }
  },
  actions: {}
}
