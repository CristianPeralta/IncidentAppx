import Api from '../source/Api'

export default {
  signup (params) {
    return Api().post('users', params)
  },
  login (params) {
    return Api().post('login', params)
  },
  user () {
    return Api().get('users')
  },
  logout () {
    return Api().post('logout')
  },
  newDependence (params) {
    return Api().post('dependences', params)
  },
  getDependences () {
    return Api().get('dependences')
  },
  editUser (id) {
    return Api().get(`users/${id}`)
  },
  updateUser (id, params) {
    return Api().put(`users/${id}`, params)
  },
  editDependence (id) {
    return Api().get(`dependences/${id}`)
  },
  updateDependence (id, params) {
    return Api().put(`dependences/${id}`, params)
  }
}
