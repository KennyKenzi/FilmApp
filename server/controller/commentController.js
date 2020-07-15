const { knex } = require('../db/knex');
const {upload, multer} = require('../db/multer')

exports.getComments=async(req, res, next)=>{

    await knex.select('*').from('comments')
    .then((comments)=>{
        res.send(comments).status(200)
    })

}

exports.addComments=async(req, res, next)=>{

        var postBody = { 
            filmID: req.body.filmID,
            userID: req.body.userID,
            comment: req.body.comment,
            date: req.body.date
        }
        try {
            const comment = await knex.insert(postBody).into('films')
            res.json(comment).status(200) 
        } catch (error) {
            res.json(error).status(500) 
            console.log('4==',err)
        }
        

}