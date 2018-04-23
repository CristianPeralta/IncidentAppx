export const id = state => state.user._id

export const users = state => state.users

export const user = state => state.user

export const solicitudes = state => state.solicitudes

export const token = (state) => {
  return localStorage.getItem('token')
}
export const isOnline = (state, getters) => {
  return !!getters.user
}
export const isAdmin = (state, getters) => {
  return (state.user.role === 'admin') && (state.user.status)
}
export const isTechnician = (state, getters) => {
  return (state.user.role === 'technician') && (state.user.status)
}
