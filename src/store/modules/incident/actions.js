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
