import ApiServices from '../src/services/ApiServices'

module.exports.login = (req, res) => {
  let data = req.body
  ApiServices.login(data).then((response) => {
    req.session.user = response.data
    let currentUser = req.session.user
    return res.json(currentUser)
  })
}

module.exports.getUser = (req,res) => {
    let user = req.session.user
    if (!user) return res.sendStatus(404)
    return res.json(user)
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
