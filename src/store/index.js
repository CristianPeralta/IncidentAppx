import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'
import ApiServices from '../services/ApiServices'

Vue.use(Vuex)

const ADD_USER = 'ADD_USER'
const GET_DEPENDENCES = 'GET_DEPENDENCES'
const ADD_DEPENDENCE = 'ADD_DEPENDENCE'
const EDIT_USER = 'EDIT_USER'
const EDIT_DEPENDENCE = 'EDIT_DEPENDENCE'
const UPDATE_DEPENDENCE = 'UPDATE_DEPENDENCE'
const LOGOUT = 'LOGOUT'

export default new Vuex.Store({
  state: {
    user: {},
    userDraft: {},
    dependences: [],
    dependenceDraft: {},
    dependenceIndex: 0
  },
  mutations: {
    [ADD_USER] (state, user) {
      state.user = user
    },
    [GET_DEPENDENCES] (state, data) {
      state.dependences = data
    },
    [ADD_DEPENDENCE] (state, data) {
      state.dependences.push(data)
    },
    [EDIT_USER] (state, data) {
      state.userDraft = data
    },
    [EDIT_DEPENDENCE] (state, data, index) {
      state.dependenceDraft = data
      state.dependenceIndex = index
    },
    [UPDATE_DEPENDENCE] (state, data, index) {
      state.dependences.splice(index, 1, data)
    },
    [LOGOUT] (state) {
      state.user = {}
    }
  },
  getters: {
    isOnline (state) {
      return state.user._id
    },
    role (state) {
      return state.user.role
    },
    isAdmin (state) {
      return (state.user.role === 'admin') && (state.user.status)
    },
    isTechnician (state) {
      return (state.user.role === 'technician') && (state.user.status)
    }
  },
  actions: {
    signup ({commit}, form) {
      ApiServices.signup(form).then(({data}) => {
        commit('ADD_USER', data)
        router.push({name: 'Home'})
      })
    },
    getUser ({commit, getters}) {
      getters.isOnline ? router.push({name: 'Home'}) : router.push({name: 'Login'})
    },
    editUser ({dispatch, commit, state}) {
      ApiServices.editUser(state.user._id).then(({data}) => {
        commit('EDIT_USER', data)
      })
    },
    updateUser ({dispatch, commit, state}, form) {
      ApiServices.updateUser(form).then(({data}) => {
        commit('ADD_USER', data)
      })
    },
    newDependence ({dispatch, commit, state}, form) {
      let formData = new FormData()
      formData.append('name', form.name)
      formData.append('acronym', form.acronym)
      formData.append('annex', form.annex)
      formData.append('latitude', form.latitude)
      formData.append('longitude', form.longitude)
      formData.append('photo', form.photo)

      ApiServices.newDependence(formData).then(({data}) => {
        commit('ADD_DEPENDENCE', data)
      })
    },
    editDependence ({dispatch, commit, state}, id, index) {
      ApiServices.editDependence(id).then(({data}) => {
        commit('EDIT_DEPENDENCE', data, index)
      })
    },
    updateDependence ({dispatch, commit, state}, form, index) {
      ApiServices.updateDependence(form).then(({data}) => {
        commit('UPDATE_DEPENDENCE', data, index)
      })
    },
    getDependences ({dispatch, commit, state}) {
      ApiServices.getDependences().then(({data}) => {
        commit('GET_DEPENDENCES', data, { root: true })
      })
    },
    login ({dispatch, commit, state}, form) {
      return ApiServices.login(form).then(({data}) => {
        commit('ADD_USER', data)
        router.push({name: 'Home'})
      })
    },
    logout ({dispatch, commit, state}) {
      commit('LOGOUT')
      router.push({name: 'Login'})
    }
  }
})
