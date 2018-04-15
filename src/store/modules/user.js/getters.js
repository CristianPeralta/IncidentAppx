export const id = state => state.user._id

export const fullName = state => {
  return state.user.name + state.user.lastname
}
