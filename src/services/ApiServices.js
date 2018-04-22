import Api from '../source/Api'

let token = {
  headers: {
    'x-access-token': localStorage.getItem('token')
  }
}

export default {
  signup (params) {
    return Api().post('users', params)
  },
  login (params) {
    return Api().post('login', params)
  },
  users () {
    return Api().get('users', token)
  },
  logout () {
    return Api().post('logout')
  },
  newDependence (params) {
    return Api().post('dependences', params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': localStorage.getItem('token')
      }
    })
  },
  getDependences () {
    return Api().get('dependences', token)
  },
  editUser (id) {
    return Api().get(`users/${id}`, token)
  },
  updateUser (id, params) {
    return Api().put(`users/${id}`, params, token)
  },
  editDependence (id) {
    return Api().get(`dependences/${id}`, token)
  },
  updateDependence (id, params) {
    return Api().put(`dependences/${id}`, params, token)
  }
}
