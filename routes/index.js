var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET home page. */

router.post('/login', userController.login)
router.get('/user', userController.getUser)

module.exports = router;
