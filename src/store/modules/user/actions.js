export const getUser = ({commit, state}) => {
  if (!state.user) {
    LocalServices.user().then(({data}) => {
      commit('ADD', data)
    }).catch(() => {
      this.$router.push({name: 'Login'})
    })
  }
}

export const editUser = ({dispatch, commit, state}) => {
  Api.editUser(state.user._id).then(({data}) => {
    commit('EDIT', data)
  })
}

export const updateUser = ({dispatch, commit, state}, form) => {
  Api.updateUser(form).then(({data}) => {
    commit('ADD', data)
  })
}

export const login = ({dispatch, commit, state}, form) => {
  return LocalServices.login(form).then(({data}) => {
    commit('ADD', data)
  })
}

export const logout = ({dispatch, commit, state}) => {
  commit('LOGOUT')
}
