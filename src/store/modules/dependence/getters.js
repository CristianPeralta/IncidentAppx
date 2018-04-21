export const getIds = state => {
  let ids = state.dependences.map(el => el.id)
  return ids
}
