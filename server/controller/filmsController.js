const { knex } = require('../db/knex');
const {upload, multer} = require('../db/multer')
const moment = require('moment')

exports.getFilms=async(req, res, next)=>{

   //console.log('from auth middleware',req.user)
    await knex.select('*').from('films')
    .then((films)=>{
       // console.log(films)
        res.status(200).json(films)
    })

}


exports.addFilms=async(req, res, next)=>{

    upload(req, res, async function (err) {
        

        if (err instanceof multer.MulterError) {
            console.log('1==',err)
            return res.status(500).json(err)
        } else if (err) {
            console.log('2==',err)
            return res.status(500).json(err)
        }

        console.log('3===', req.file.filename)

        var postBody = { 
          name: req.body.name,
          description: req.body.description,
          releaseDate: moment(req.body.relaseDate).format('YYYY-MM-DD HH:mm:ss'),
          rating: req.body.rating,
          ticketPrice: req.body.ticketPrice,
          country: req.body.country,
          genre: req.body.genre,
          image: req.file.filename
        }
        try {
            const films = await knex.insert(postBody).into('films')
            res.status(200).json(films) 
        } catch (error) {
            res.json(error).status(500) 
            console.log('4==',error)
        }
        
      })

}


exports.viewAFilm=async(req, res, next)=>{

    console.log(req.query)
    var id= req.query.id
    await knex.select('*').from('films').where({'id': id})
    .then((film)=>{
        console.log(film)
        res.send(film).status(200)
    })

}


exports.getCountry=async(req, res, next)=>{
    await knex.select('*').from('countries')
    .then((countries)=>{
       // console.log(films)
        res.status(200).json(countries)
    })

}