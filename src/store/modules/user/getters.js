export const id = state => state.user._id

export const users = state => state.users

export const user = state => state.user

export const userDraft = state => state.userDraft

export const solicitudes = state => state.solicitudes

export const token = (state) => {
  return {
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  }
}
export const isOnline = (state, getters) => {
  return !!getters.token
}
export const isAdmin = (state, getters) => {
  return (state.user.role === 'admin') && (state.user.status)
}
export const isTechnician = (state, getters) => {
  return (state.user.role === 'technician') && (state.user.status)
}
