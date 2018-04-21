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
export const GET_DEPENDENCES = (state, data) => {
  state.dependences = data
}
export const ADD_DEPENDENCE = (state, data) => {
  state.dependences.push(data)
}
export const EDIT_USER = (state, data) => {
  state.userDraft = data
}
export const EDIT_DEPENDENCE = (state, data, index) => {
  state.dependenceDraft = data
  state.dependenceIndex = index
}
export const UPDATE_DEPENDENCE = (state, data, index) => {
  state.dependences.splice(index, 1, data)
}
export const LOGOUT = (state) => {
  localStorage.removeItem('user')
  state.user = {}
}
export const ADD_DATATABLE = (state, data) => {
  state.datatable = data
}
