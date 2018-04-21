import router from '../../../router'
import ApiServices from '../../../services/ApiServices'

export const signup = ({commit}, form) => {
  ApiServices.signup(form).then(({data}) => {
    commit('ADD_USER', data)
    router.push({name: 'Home'})
  })
}
export const getUser = ({commit, getters}) => {
  getters.isOnline ? router.push({name: 'Home'}) : router.push({name: 'Login'})
}
export const getUsers = ({commit, getters}) => {
  return ApiServices.users().then(({data}) => {
    commit('GET_USERS', data)
  })
}
export const editUser = ({dispatch, commit, state}) => {
  ApiServices.editUser(state.user._id).then(({data}) => {
    commit('EDIT_USER', data)
  })
}
export const updateUser = ({dispatch, commit, state}, form) => {
  ApiServices.updateUser(form).then(({data}) => {
    commit('ADD_USER', data)
  })
}
export const newDependence = ({dispatch, commit, state}, form) => {
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
}
export const editDependence = ({dispatch, commit, state}, id, index) => {
  ApiServices.editDependence(id).then(({data}) => {
    commit('EDIT_DEPENDENCE', data, index)
  })
}
export const updateDependence = ({dispatch, commit, state}, form, index) => {
  ApiServices.updateDependence(form).then(({data}) => {
    commit('UPDATE_DEPENDENCE', data, index)
  })
}
export const getDependences = ({dispatch, commit, state}) => {
  return ApiServices.getDependences().then(({data}) => {
    commit('GET_DEPENDENCES', data)
  })
}
export const login = ({dispatch, commit, state}, form) => {
  return ApiServices.login(form).then(({data}) => {
    commit('ADD_USER', data)
  }).then(() => {
    router.push({name: 'Home'})
  })
}
export const logout = ({dispatch, commit, state}) => {
  commit('LOGOUT')
  router.push({name: 'Login'})
}
export const getSolicitudes = ({commit, getters}) => {
  return new Promise(resolve => {
    commit('GET_SOLICITUDES')
    resolve()
  })
}
