import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'北京'
    },
    actions:{
        changState(ctx,city){
            ctx.commit('handleState',city)
        }
    },
    mutations:{
        handleState(state,city){
            state.city = city
        }
    }
})
