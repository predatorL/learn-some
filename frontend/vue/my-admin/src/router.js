import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './biz_modules'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
    console.log('to, from', to, from)
    next()
})

export default router
