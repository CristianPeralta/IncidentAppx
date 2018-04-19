import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'
import ApiServices from '../services/ApiServices'

Vue.use(Vuex)

const ADD_USER = 'ADD_USER'
const ADD_USERS = 'ADD_USERS'
const GET_DEPENDENCES = 'GET_DEPENDENCES'
const ADD_DEPENDENCE = 'ADD_DEPENDENCE'
const EDIT_USER = 'EDIT_USER'
const EDIT_DEPENDENCE = 'EDIT_DEPENDENCE'
const UPDATE_DEPENDENCE = 'UPDATE_DEPENDENCE'
const LOGOUT = 'LOGOUT'
const ADD_DATATABLE = 'ADD_DATATABLE'

export default new Vuex.Store({
  state: {
    user: {},
    users: [],
    userDraft: {},
    dependences: [],
    dependenceDraft: {},
    dependenceIndex: 0,
    datatable: ''
  },
  mutations: {
    [ADD_USER] (state, user) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    [ADD_USERS] (state, users) {
      state.users = users
      state.users.map((el, index) => {
        el.dependence = el.dependence.acronym
      })
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
      localStorage.removeItem('user')
      state.user = {}
    },
    [ADD_DATATABLE] (state, data) {
      state.datatable = data
    }
  },
  getters: {
    user (state) {
      return localStorage.getItem('user')
    },
    isOnline (state, getters) {
      return getters.user
    },
    role (state) {
      return state.user.role
    },
    isAdmin (state, getters) {
      return (JSON.parse(getters.user).role === 'admin') && (JSON.parse(getters.user).status)
    },
    isTechnician (state, getters) {
      return (JSON.parse(getters.user).role === 'technician') && (JSON.parse(getters.user).status)
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
    getUsers ({commit, getters}) {
      return ApiServices.users().then(({data}) => {
        commit('ADD_USERS', data)
      })
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
    },
    addDatatable ({dispatch, commit, state}, data) {
      commit('ADD_DATATABLE', data)
    }
  }
})
