import Vue from 'vue'
import Vuex from 'vuex'
// import ApiServices from '../services/ApiServices'
import LocalServices from '../services/LocalServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    userDraft: {},
    dependences: []
  },
  mutation: {
    addUser (state, user) {
      console.log(`user in mutation`)
      state.user = user
    },
    getDependences (state, data) {
      state.dependences = data
    },
    addDependence (state, data) {
      state.dependences.push(data)
    },
    editUser (state, data) {
      state.userDraft = data
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
    editUser ({dispatch, commit, state}) {
      Api.editUser(state.user._id).then(({data}) => {
        commit('editUser', data)
      })
    },
    updateUser ({dispatch, commit, state}, form) {
      Api.updateUser(form).then(({data}) => {
        commit('addUser', data)
      })
    },
    newDependence ({dispatch, commit, state}) {
      Api.newDependence().then(({data}) => {
        commit('getDependences', data)
      })
    },
    editDependence ({dispatch, commit, state}, id) {
      Api.editDependence(id).then(({data}) => {
        commit('editDependences', data)
      })
    },
    getDependences ({dispatch, commit, state}) {
      Api.getDependences().then(({data}) => {
        commit('addDependence', data)
      })
    },
    login ({dispatch, commit, state}, form) {
      return LocalServices.login(form).then(({data}) => {
        console.log(data.name)
        commit('addUser', data)
      })
    }
  }
})
