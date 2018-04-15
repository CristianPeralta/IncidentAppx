export const ADD =  (state, user) =>  {
  state.user = user
},
export const EDIT = (state, data) => {
  state.userDraft = data
},
export const LOGOUT = (state) => {
  state.user = {}
}
