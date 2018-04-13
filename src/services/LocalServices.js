import Local from '../source/Local'

export default {
  login (params) {
    return Local().post('login', params)
  },
  user () {
    return Local().get('user')
  }
}
