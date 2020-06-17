import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {
            name: 'none',
            id: 'none',
            role: 'none'
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

export default store
