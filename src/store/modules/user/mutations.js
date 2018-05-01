export const ADD_TOKEN = (state, token) => {
  localStorage.setItem('token', token)
  state.token = token
}
export const ADD_USER = (state, user) => {
  state.user = user
}
export const ADD_INDEX = (state, index) => {
  state.index = index
}
export const GET_USERS = (state, users) => {
  state.users = []
  state.allUsers = users
  users.map((el, index) => {
    if (el.status === 'true') {
      el.dependence = el.dependence.acronym
      state.users.push(el)
    }
  })
}
export const EDIT_USER = (state, data, index) => {
  state.userDraft = data
  // state.userIndex = index
}
export const UPDATE_USER = (state, data, index) => {
  state.users.splice(index, 1, data)
}
export const LOGOUT = (state) => {
  localStorage.removeItem('token')
  state.token = {}
  state.user = {}
}
export const GET_SOLICITUDES = (state) => {
  state.solicitudes = []
  state.allUsers.map((el) => {
    if (el.status === 'false') {
      state.solicitudes.push(el)
    }
  })
}
