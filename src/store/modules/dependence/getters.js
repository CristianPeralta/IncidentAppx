export const getIds = state => {
  let ids = state.dependences.map(el => el.id)
  return ids
}

export const getCoords = (state, id) => {
  let coords = state.dependences.find(el => id === el._id)
  return {
    latitude: coords.latitude,
    longitude: coords.longitude
  }
}
