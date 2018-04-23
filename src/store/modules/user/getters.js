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
// export const isAdmin = (state, getters) => {
//   return (JSON.parse(getters.user).role === 'admin') && (JSON.parse(getters.user).status)
// }
// export const isTechnician = (state, getters) => {
//   return (JSON.parse(getters.user).role === 'technician') && (JSON.parse(getters.user).status)
// }
