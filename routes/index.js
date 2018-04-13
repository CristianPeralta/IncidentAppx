var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET home page. */

router.post('/login', userController.login)

module.exports = router;
