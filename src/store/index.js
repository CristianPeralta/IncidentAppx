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
    section: 'users',
    sectionOptions: {
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
  getters: {
    section (state) {
      return state.section
    },
    sectionConfig (state, rootGetters) {
      let config = state.sectionOptions[state.section]
      config.data = rootGetters[`${state.section}/${state.section}`]
      return config
    }
  },
  mutations: {
    ADD_DATATABLE (state, data) {
      state.datatable = data
    },
    CHANGE_MODAL (state, data) {
      state.modalActive = !state.modalActive
    },
    SET_SECTION (state, section) {
      state.section = section
    }
  },
  actions: {
    addDatatable ({dispatch, commit, state}, data) {
      commit('ADD_DATATABLE', data)
    },
    changeModal ({dispatch, commit, state}) {
      commit('CHANGE_MODAL')
    },
    setSection ({dispatch, commit, state}, section) {
      commit('SET_SECTION', section)
    }
  }
})
