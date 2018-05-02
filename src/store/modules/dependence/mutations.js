export const GET_DEPENDENCES = (state, data) => {
  state.dependences = data
}
export const ADD_DEPENDENCE = (state, data) => {
  state.dependences.push(data)
}
export const EDIT_DEPENDENCE = (state, data, index) => {
  state.dependenceDraft = data
  state.dependenceIndex = index
}
export const UPDATE_DEPENDENCE = (state, data, index) => {
  state.dependences.splice(index, 1, data)
}
