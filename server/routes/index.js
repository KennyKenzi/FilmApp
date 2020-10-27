var express = require('express');
var router = express.Router();
var getFilms = require ('../controller/filmsController')
var getComments = require('../controller/commentController')
var auth = require('../controller/auth')

/* GET home page. */
router.post('/', function(req, res, next) {
  res.send(res.body)
 // res.render('index', { title: 'Express' });

});
router.get('/api/films', auth.auth, getFilms.getFilms);
router.post('/api/films', getFilms.addFilms);

router.get('/api/comments', getComments.getComments);
router.get('/api/filmcomment/:id', getComments.getAComment);
router.post('/api/comments', auth.auth ,getComments.addComments);


router.get('/api/film', getFilms.viewAFilm)
router.get('/api/countries', getFilms.getCountry)

module.exports = router;
