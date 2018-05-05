import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import dependence from './modules/dependence'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datatable: '',
    modalActive: false,
    section: {
      'users': {
        'columns': ['name', 'acronym', 'annex', 'actions'],
        'data': '',
        'options': {
          headings: {
            'name': 'Name',
            'acronym': 'Acronym',
            'annex': 'Annex'
          },
          sortable: ['name', 'acronym', 'annex'],
          filterable: ['name', 'acronym', 'annex']
        }
      },
      'solicitudes': {
        'columns': ['name', 'email', 'role', 'actions'],
        'data': '',
        'options': {
          headings: {
            'name': 'Name',
            'email': 'Email',
            'role': 'Role'
          },
          sortable: ['name', 'email', 'role'],
          filterable: ['name', 'email', 'role']
        }
      }
    }

  },
  modules: {
    user,
    dependence
  },
  mutations: {
    ADD_DATATABLE (state, data) {
      state.datatable = data
    },
    CHANGE_MODAL (state, data) {
      state.modalActive = !state.modalActive
    }
  },
  actions: {
    addDatatable ({dispatch, commit, state}, data) {
      commit('ADD_DATATABLE', data)
    },
    changeModal ({dispatch, commit, state}) {
      console.log('peticion to change modal')
      commit('CHANGE_MODAL')
    }
  }
})
