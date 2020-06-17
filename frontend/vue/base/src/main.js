// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import eleUI from 'element-ui'
import cmpt from 'vue-ele-cmpt'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
// app
import App from './App'
import router from './router'

cmpt.install(Vue, {prefix: 'l'})
Vue.use(VueRouter)
Vue.use(eleUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: new VueRouter(router),
  components: { App },
  template: '<App/>'
})
