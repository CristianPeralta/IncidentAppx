import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import dependence from './modules/dependence'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    dependence
  },
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
      },
      'dependences': {
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
      'incidents': {
        'columns': ['category', 'priority', 'dependence', 'actions'],
        'data': '',
        'options': {
          headings: {
            'category': 'Category',
            'priority': 'Priority'
          },
          sortable: ['category', 'priority'],
          filterable: ['category', 'priority']
        }
      }
    }
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
