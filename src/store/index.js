import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    title: "无"
  },
  mutations: {
    changeTitle: (state,val) => {
      state.title = val;
    }
    
  }
})

export default store
