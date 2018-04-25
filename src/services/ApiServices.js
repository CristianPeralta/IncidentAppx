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
  editUser (id, token) {
    return Api().get(`users/${id}`, token)
  },
  updateUser (id, params, token) {
    return Api().put(`users/${id}`, params, token)
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
  editDependence (id, token) {
    return Api().get(`dependences/${id}`, token)
  },
  updateDependence (id, params, token) {
    return Api().put(`dependences/${id}`, params, token)
  },
  newIncident (params, token) {
    return Api().post('incidents', params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': localStorage.getItem('token')
      }
    })
  },
  getIncidents () {
    return Api().get('incidents')
  },
  editIncident (id, token) {
    return Api().get(`incidents/${id}`, token)
  },
  updateIncident (id, params, token) {
    return Api().put(`incidents/${id}`, params, token)
  }
}
