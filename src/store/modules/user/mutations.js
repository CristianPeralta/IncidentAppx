export const ADD_USER = (state, user) => {
  localStorage.setItem('user', JSON.stringify(user))
  state.user = user
}
export const ADD_USER = (state, user) => {
  localStorage.setItem('user', JSON.stringify(user))
  state.user = user
}
export const ADD_USERS = (state, users) => {
  state.allUsers = users
  users.map((el, index) => {
    if (el.status === 'true') {
      el.dependence = el.dependence.acronym
      state.users.push(el)
    }
  })
}
export const GET_SOLICITUDES = (state) => {
  state.solicitudes = []
  state.allUsers.map((el) => {
    if (el.status === 'false') {
      state.solicitudes.push(el)
    }
  })
}
export const EDIT_USER = (state, data) => {
  state.userDraft = data
}
export const LOGOUT = (state) => {
  localStorage.removeItem('user')
  state.user = {}
}
