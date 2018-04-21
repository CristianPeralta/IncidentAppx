import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import dependence from './modules/dependence'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datatable: ''
  },
  modules: {
    user,
    dependence
  },
  mutations: {
    ADD_DATATABLE (state, data) {
      state.datatable = data
    }
  },
  actions: {
    addDatatable ({dispatch, commit, state}, data) {
      commit('ADD_DATATABLE', data)
    }
  }
})
