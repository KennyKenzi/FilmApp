var express = require('express');
var router = express.Router();
var getFilms = require ('../controller/filmsController')
var getComments = require('../controller/commentController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/films', getFilms.getFilms);
router.post('/films', getFilms.addFilms);

router.get('/comments', getComments.getComments);
router.post('/comments', getComments.addComments);

module.exports = router;
