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
export const login = ({dispatch, commit, state}, form) => {
  return ApiServices.login(form).then(({data}) => {
    commit('ADD_TOKEN', data)
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
