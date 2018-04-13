import Vue from 'vue'
import Vuex from 'vuex'
// import ApiServices from '../services/ApiServices'
import LocalServices from '../services/LocalServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutation: {
    addUser (state, user) {
      state.user = user
    }
  },
  actions: {
    getUser ({dispatch, commit, state}) {
      if (!state.user) {
        return LocalServices.user().then(({data}) => {
          commit('addUser', data)
        })
      }
    },
    login ({dispatch, commit, state}, form) {
      return LocalServices.login(form).then(({data}) => {
        commit('addUser', data)
      })
    }
  }
})
