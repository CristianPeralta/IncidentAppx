import router from '../../../router'
import ApiServices from '../../../services/ApiServices'

export const signup = ({commit}, form) => {
  ApiServices.signup(form).then(({data}) => {
    commit('ADD_USER', data)
    router.push({name: 'Home'})
  })
}
export const getUser = ({commit, getters}) => {
  if (!getters.isOnline) {
    router.push({name: 'Login'})
  } else {
    ApiServices.me(getters.token).then(({data}) => {
      commit('ADD_USER', data)
    }).then(() => {
      router.push({name: 'Home'})
    })
  }
}
export const getUsers = ({commit, getters}) => {
  return ApiServices.users(getters.token).then(({data}) => {
    commit('GET_USERS', data)
  })
}
export const editUser = ({commit, getters, state}, id, index) => {
  ApiServices.editUser(id, getters.token).then(({data}) => {
    commit('EDIT_USER', data, index)
  })
}
export const updateUser = ({commit, getters, state}, form) => {
  ApiServices.updateUser(form, getters.token).then(({data}) => {
    commit('ADD_USER', data, state.userIndex)
  })
}
export const newDependence = ({commit, getters}, form) => {
  let formData = new FormData()
  formData.append('name', form.name)
  formData.append('acronym', form.acronym)
  formData.append('annex', form.annex)
  formData.append('latitude', form.latitude)
  formData.append('longitude', form.longitude)
  formData.append('photo', form.photo)

  ApiServices.newDependence(formData, getters.token).then(({data}) => {
    commit('ADD_DEPENDENCE', data)
  })
}
export const editDependence = ({commit, getters}, id, index) => {
  ApiServices.editDependence(id, getters.token).then(({data}) => {
    commit('EDIT_DEPENDENCE', data, index)
  })
}
export const updateDependence = ({commit, getters}, form, index) => {
  ApiServices.updateDependence(form, getters.token).then(({data}) => {
    commit('UPDATE_DEPENDENCE', data, index)
  })
}
export const getDependences = ({commit}) => {
  return ApiServices.getDependences().then(({data}) => {
    commit('GET_DEPENDENCES', data)
  })
}
export const login = ({dispatch, commit, state}, form) => {
  return ApiServices.login(form).then(({data}) => {
    commit('ADD_TOKEN', data)
  }).then(() => {
    dispatch('getUser')
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
