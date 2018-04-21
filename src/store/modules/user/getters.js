export const id = state => state.user._id

export const users = state => state.users

export const solicitudes = state => state.solicitudes

export const fullName = state => {
  return state.user.name + state.user.lastname
}
export const user = (state) => {
  return localStorage.getItem('user')
}
export const isOnline = (state, getters) => {
  return getters.user
}
export const role = (state) => {
  return state.user.role
}
export const isAdmin = (state, getters) => {
  return (JSON.parse(getters.user).role === 'admin') && (JSON.parse(getters.user).status)
}
export const isTechnician = (state, getters) => {
  return (JSON.parse(getters.user).role === 'technician') && (JSON.parse(getters.user).status)
}
