export const newDependence = ({dispatch, commit, state}) => {
  Api.newDependence().then(({data}) => {
    commit('GET_DEPENDENCES', data)
  })
}

export const editDependence = ({dispatch, commit, state}, id, index) => {
  Api.editDependence(id).then(({data}) => {
    commit('EDIT_DEPENDENCE', data, index)
  })
}

export const updateDependence = ({dispatch, commit, state}, form) => {
  Api.updateDependence(form).then(({data}) => {
    commit('UPDATE_DEPENDENCE', data, index)
  })
}

export const getDependences = ({dispatch, commit, state}) => {
  Api.getDependences().then(({data}) => {
    commit('ADD_DEPENDENCE', data)
  })
}