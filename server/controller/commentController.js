const { knex } = require('../db/knex');
const {upload, multer} = require('../db/multer')

exports.getComments=async(req, res, next)=>{

    await knex.select('*').from('comments')
    .then((comments)=>{
        res.send(comments).status(200)
    })

}
exports.getAComment=async(req, res, next)=>{
    console.log(req.params)
    var id= req.params.id

    await knex.select('*').from('comments').where({'filmID': id})
    .then((comments)=>{
        res.send(comments).status(200)
    })

}


exports.addComments=async(req, res, next)=>{


        var postBody = { 
            filmID: req.body.filmID, 
            userID: req.body.userID,
            comment: req.body.comment,
            createdAt: req.body.createdAt
        }

        console.log(postBody)

        try {
            const comment = await knex.insert(postBody).into('comments')
            res.json(comment).status(200) 
        } catch (error) {
            res.json(error).status(500) 
            console.log('4==',error)
        }
        

}