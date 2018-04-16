import Vue from 'vue'
import Vuex from 'vuex'
// import ApiServices from '../services/ApiServices'
import LocalServices from '../services/LocalServices'
import ApiServices from '../services/ApiServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    userDraft: {},
    dependences: [],
    dependenceDraft: {},
    dependenceIndex: 0
  },
  mutation: {
    addUser (state, user) {
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
    },
    editDependence (state, data, index) {
      state.dependenceDraft = data
      state.dependenceIndex = index
    },
    updateDependence (state, data, index) {
      state.dependences.splice(index, 1, data)
    },
    killUser (state) {
      state.user = {}
    }
  },
  actions: {
    getUser ({dispatch, commit, state}) {
      if (!state.user) {
        LocalServices.user().then(({data}) => {
          commit('addUser', data)
        }).catch(() => {
          this.$router.push({name: 'Login'})
        })
      }
    },
    editUser ({dispatch, commit, state}) {
      ApiServices.editUser(state.user._id).then(({data}) => {
        commit('editUser', data)
      })
    },
    updateUser ({dispatch, commit, state}, form) {
      ApiServices.updateUser(form).then(({data}) => {
        commit('addUser', data)
      })
    },
    newDependence ({dispatch, commit, state}) {
      ApiServices.newDependence().then(({data}) => {
        commit('getDependences', data)
      })
    },
    editDependence ({dispatch, commit, state}, id, index) {
      ApiServices.editDependence(id).then(({data}) => {
        commit('editDependence', data, index)
      })
    },
    updateDependence ({dispatch, commit, state}, form, index) {
      ApiServices.updateDependence(form).then(({data}) => {
        commit('updateDependence', data, index)
      })
    },
    getDependences ({dispatch, commit, state}) {
      ApiServices.getDependences().then(({data}) => {
        commit('addDependence', data)
      })
    },
    login ({dispatch, commit, state}, form) {
      return LocalServices.login(form).then(({data}) => {
        console.log(data.name)
        commit('addUser', data)
      })
    },
    logout ({dispatch, commit, state}) {
      commit('killUser')
    }
  }
})
