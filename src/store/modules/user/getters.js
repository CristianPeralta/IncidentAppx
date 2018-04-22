export const id = state => state.user._id

export const users = state => state.users

export const solicitudes = state => state.solicitudes

export const user = (state) => {
  return localStorage.getItem('user')
}

export const token = (state) => {
  return localStorage.getItem('token')
}

export const isOnline = (state, getters) => {
  console.log(getters.user)
  return getters.user
}
// export const isAdmin = (state, getters) => {
//   return (JSON.parse(getters.user).role === 'admin') && (JSON.parse(getters.user).status)
// }
// export const isTechnician = (state, getters) => {
//   return (JSON.parse(getters.user).role === 'technician') && (JSON.parse(getters.user).status)
// }
