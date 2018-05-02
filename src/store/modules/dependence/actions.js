import Api from '../../../services/ApiServices'

export const newDependence = ({dispatch, commit, state}, form) => {
  let formData = new FormData()

  formData.append('name', form.name)
  formData.append('acronym', form.acronym)
  formData.append('annex', form.annex)
  formData.append('latitude', form.latitude)
  formData.append('longitude', form.longitude)
  formData.append('photo', form.photo)

  Api.newDependence(formData).then(({data}) => {
    commit('ADD_DEPENDENCE', data)
  })
}

export const edit = ({dispatch, commit, state}, id, index) => {
  return Api.editDependence(id).then(({data}) => {
    commit('EDIT_DEPENDENCE', data, index)
  })
}

export const update = ({dispatch, commit, state}, form) => {
  let formData = new FormData()

  formData.append('_id', form._id)
  formData.append('name', form.name)
  formData.append('acronym', form.acronym)
  formData.append('annex', form.annex)
  formData.append('latitude', form.latitude)
  formData.append('longitude', form.longitude)
  formData.append('photo', form.photo)

  Api.updateDependence(form).then(({data}) => {
    commit('UPDATE_DEPENDENCE', data, state.dependenceIndex)
  })
}

export const getDependences = ({dispatch, commit, state}) => {
  return Api.getDependences().then(({data}) => {
    commit('GET_DEPENDENCES', data)
  })
}
