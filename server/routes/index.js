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
router.get('/films', getFilms.getFilms);
router.post('/films', getFilms.addFilms);

router.get('/comments', getComments.getComments);
router.post('/comments', auth ,getComments.addComments);


router.get('/film', getFilms.viewAFilm)

module.exports = router;
