import router from '../../../router'
import ApiServices from '../../../services/ApiServices'

export const signup = ({commit}, form) => {
  ApiServices.signup(form)
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
export const edit = ({commit, getters, state}, id) => {
  return ApiServices.editUser(id, getters.token).then(({data}) => {
    commit('EDIT_USER', data)
  })
}
export const update = ({commit, getters, state}, form) => {
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
export const getSolicitudes = ({commit, dispatch, state}) => {
  return new Promise(resolve => {
    if (state.users.length !== 0) {
      commit('GET_SOLICITUDES')
    } else {
      dispatch('getUsers').then(() => {
        commit('GET_SOLICITUDES')
        resolve()
      })
    }
    resolve()
  })
}
