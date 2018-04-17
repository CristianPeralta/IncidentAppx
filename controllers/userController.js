import ApiServices from '../src/services/ApiServices'

module.exports.login = (req, res) => {
  let data = req.body
  ApiServices.login(data).then((response) => {
    req.session.user = response.data
    req.session.save(err => {
      if (err) return res.sendStatus(500)
      console.log(req.session)
      let user = req.session.user
      return res.json(user)
    })
  })
}

module.exports.getUser = (req, res) => {
  console.log(req.session)
  if (!!req.session.user) {
    return res.json(req.session.user)
  }
  return res.json(!!req.session.user)
}

module.exports.logout = (req, res) => {
    req.session.destroy((err) => {
      // cannot access session here
      if(err){
        console.log(err);
        return res.sendStatus(503)
      }
      return res.sendStatus(200)
    })
}
