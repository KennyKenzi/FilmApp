var express = require('express');
var router = express.Router();
var auth = require ('../controller/auth')
var user = require('../controller/userController')

 

router.post('/api/login',  user.login);

router.post('/api/register',auth.passwordMatchCheck ,user.register);

router.get('/api/user',auth.auth ,user.user);

router.get('/api/comment/user/:id', user.commentUser);

router.post('/api/refresh_token', user.refreshToken);

router.post('/api/logout', user.logout)
 

module.exports = router;
