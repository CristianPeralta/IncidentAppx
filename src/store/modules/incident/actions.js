import Api from '../../../services/ApiServices'

export const newIncident = ({dispatch, commit, state}, form) => {
  Api.newIncident(form).then(({data}) => {
    commit('GET_INCIDENTS', data)
  })
}

export const getIncidents = ({dispatch, commit, state}) => {
  return Api.getIncidents().then(({data}) => {
    commit('ADD_INCIDENTS', data)
  })
}

export const editIncident = ({dispatch, commit, state}, id, index) => {
  return Api.editIncident(id).then(({data}) => {
    commit('EDIT_INCIDENT', data, index)
  })
}

export const updateIncident = ({dispatch, commit, state}, form) => {
  Api.updateIncident(form).then(({data}) => {
    commit('UPDATE_INCIDENT', data, state.incidentIndex)
  })
}
