import Api from '../../../services/ApiServices'

export const newDependence = ({dispatch, commit, state}, form) => {
  Api.newDependence(form).then(({data}) => {
    commit('GET_DEPENDENCES', data)
  })
}

export const editDependence = ({dispatch, commit, state}, id, index) => {
  return Api.editDependence(id).then(({data}) => {
    commit('EDIT_DEPENDENCE', data, index)
  })
}

export const updateDependence = ({dispatch, commit, state}, form) => {
  Api.updateDependence(form).then(({data}) => {
    commit('UPDATE_DEPENDENCE', data, state.dependenceIndex)
  })
}

export const getDependences = ({dispatch, commit, state}) => {
  return Api.getDependences().then(({data}) => {
    console.log('getting dependences')
    console.log(data)
    commit('ADD_DEPENDENCE', data)
  })
}
