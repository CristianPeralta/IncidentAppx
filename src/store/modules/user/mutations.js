export const ADD_TOKEN = (state, token) => {
  localStorage.setItem('token', JSON.stringify(token))
  state.token = token
}
export const ADD_USER = (state, user) => {
  state.user = user
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
export const EDIT_USER = (state, data) => {
  state.userDraft = data
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
