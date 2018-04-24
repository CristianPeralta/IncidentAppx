import Api from '../source/Api'

export default {
  signup (params) {
    return Api().post('users', params)
  },
  login (params) {
    return Api().post('login', params)
  },
  users (token) {
    return Api().get('users', token)
  },
  me (token) {
    return Api().get('users/me', token)
  },
  logout () {
    return Api().post('logout')
  },
  newDependence (params, token) {
    return Api().post('dependences', params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': localStorage.getItem('token')
      }
    })
  },
  getDependences () {
    return Api().get('dependences')
  },
  editUser (id, token) {
    return Api().get(`users/${id}`, token)
  },
  updateUser (id, params, token) {
    return Api().put(`users/${id}`, params, token)
  },
  editDependence (id, token) {
    return Api().get(`dependences/${id}`, token)
  },
  updateDependence (id, params, token) {
    return Api().put(`dependences/${id}`, params, token)
  }
}
