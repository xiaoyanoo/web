import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 1,
      nav: 1,
      login: false,
      isAuthor: false,
      infoLogin: 0,
    },
    mutations: {
      increment (state) {
        state.count++
      },
      changeNav (state, param) {
        state.nav = param
      },
      chengeLogin (state, param){
        state.login = param;
      },
      //是否是登陆状态
      infoAuthor(state, param){
        state.isAuthor = param;
      },
      //判断是否登陆
      changeinfoLogin (state, param) {
        state.infoLogin = param
      },
    }
  })
