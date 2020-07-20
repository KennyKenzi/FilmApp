var express = require('express');
var router = express.Router();
var auth = require ('../controller/auth')
var user = require('../controller/userController')



router.post('/login',  user.login);

router.post('/register',auth.passwordMatchCheck ,user.register);

router.post('/refresh_token', user.refreshToken)


module.exports = router;
