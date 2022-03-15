/* eslint-disable */
export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key, data = {}) => {
      return key
        .split('.')
        .reduce((o, i) => {
          if (o) return o[i]
        }, options)
        .replace(/{\w+}/g, (match) => data[match.slice(1, -1)])
    }
  }
}
