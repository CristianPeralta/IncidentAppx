export const id = state => state.user._id

export const incidents = state => state.incidents

export const byFilter= (state, getters, nameFilter, filter) => {
  let dataFilter = state.incidents.map(incident => {
    if (incident[nameFilter] === filter) {
      return incident
    }
  })
  return dataFilter
}
