export const ADD_INCIDENT = (state, incident) => {
  state.incidents.push(incident)
}
export const GET_INCIDENT = (state, incidents) => {
  state.incidents = incidents
}
export const EDIT_INCIDENT = (state, data) => {
  state.incidentDraft = data
}
