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
      console.log(`user in mutation`)
      state.user = user
    }
  },
  actions: {
    getUser ({dispatch, commit, state}) {
      if (!state.user) {
        LocalServices.user().then(({data}) => {
          console.log(data.name)
          commit('addUser', data)
        }).catch(() => {
          this.$router.push({name: 'Login'})
        })
      }
    },
    login ({dispatch, commit, state}, form) {
      return LocalServices.login(form).then(({data}) => {
        console.log(data.name)
        commit('addUser', data)
      })
    }
  }
})
