import Vue from 'vue'
import Vuex from 'vuex'
import {getLocalStorage, setLocalStorage} from '@/utils/util.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: getLocalStorage('city') || '南京'
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
      setLocalStorage('city', city);
    }
  },
  actions: {
    changeCity({commit}, city) {
      commit('changeCity', city);
    }
  },
  modules: {
  }
})
