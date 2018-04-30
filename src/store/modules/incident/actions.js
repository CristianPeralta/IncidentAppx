import Api from '../../../services/ApiServices'

export const newIncident = ({dispatch, commit, state}, form) => {
  Api.newIncident(form).then(({data}) => {
    commit('GET_INCIDENTS', data)
  })
}
