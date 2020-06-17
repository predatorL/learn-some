// lib
import Vue from 'vue'
import eleCmpt from 'vue-ele-cmpt'
// import eleUI from 'element-ui'
// App related
import './theme/index.less'
import App from './App'
import router from './router'
import store from './store'
// vue config
Vue.config.productionTip = false
// mount lib
// Vue.use(eleUI)
Vue.use(eleCmpt, {prefix: 'l'})
// mount App related
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
