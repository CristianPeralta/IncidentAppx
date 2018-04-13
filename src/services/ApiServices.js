import Api from '../source/Api'

export default {
  signup (params) {
    return Api().post('users', params);
  },
  login (params) {
    return Api().post('login', params);
  },
  user () {
    return Api().get('user');
  },
  logout () {
    return Api().post('logout');
  },
  newDependence (params) {
    return Api().post('dependences', params);
  },
  getDependences () {
    return Api().get('dependences');
  }
}
