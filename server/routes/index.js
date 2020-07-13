var express = require('express');
var router = express.Router();
var getFilms = require ('../controller/filmsController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/films', getFilms.getFilms);
router.post('/films', getFilms.addFilms);

module.exports = router;
