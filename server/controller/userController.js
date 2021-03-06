var bcrypt = require('bcrypt')
var moment = require('moment')
const { knex } = require('../db/knex');
const jwt = require('jsonwebtoken');
const auth = require('./auth');
const { connect } = require('../routes/users');
require('dotenv').config()



exports.register =(req, res,next)=>{
console.log(req.body)
        bcrypt.hash(req.body.password, 10).then(
            async(hash) => {
                const user = {
                    username: req.body.username,
                    password: hash,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
                };

                try {
                    await knex.insert(user).into('users')
                    .then(() => {
                            console.log('===>',user)
                            res.status(201).json({
                            message: 'User added successfully!'
                        });
                        })}      
                catch (error) {
                        res.status(500).json({  
                            error: error,
                            message: "Could not save information"
                    });
                }
            }
        );
};

      

exports.login =async(req, res,next)=>{
    if(req.body){
        try {
            await knex.select('*').from('users').where({'username':req.body.username})
            .then((user) => {
                const newUser = user[0]
                if (!newUser) {
                    console.log('no user')
                    return res.status(401).json({
                        error: new Error('User not found!'),
                        message: 'No user/password'
                    });
                }
                try {
                    
                    bcrypt.compare(req.body.password, newUser.password)
                    .then((valid) => {
                            if (!valid) {                
                                return res.status(401).json({
                                    error: new Error('Incorrect password!'),
                                    message: 'No user/password'
                                });
                            }
                            res.cookie(
                                "jid", 
                                auth.createRefreshToken(newUser),
                                { maxAge: 900000, httpOnly: false}
                            )
                            res.status(200).json({
                                userId: newUser.id,
                                token: auth.createAccessToken(newUser)
                            })
                            next()
                    })
                }catch (error) {
                    res.status(500).json({
                        error: error
                    });
                }
            })

        }catch (error) {
            res.status(500).json({
                error: error
            });
                            
        }

    }else {
        res.status(400).json({
            error: "No parameters included"
        });
    }
 
}



exports.refreshToken=async(req, res, next)=>{

    const refreshtoken = req.cookies.jid;
    // console.log(refreshtoken)


    if (!refreshtoken){
        return res.send({ok: false, accessToken: ''})
    } 

    
         const blacklist = await knex.select('token').from('token').where({'token': refreshtoken})
        if(blacklist[0]){
            if(blacklist[0].token.length > 1){
                return res.send({ok: false, accessToken: ''})
            }else {
                console.log('does not exist')
                }
            }    
            
    

    let payload = null;
    try{
        payload = jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET)
    } catch(err){
        console.log(err)
        return res.send({ok: false, accessToken: ''})
    }
        // console.log('payload',payload)
        const user = await knex.select('*').from('users').where({'id':payload.userId})

        res.cookie('jid', 
        auth.createRefreshToken(user[0]), 
        { maxAge: 900000, httpOnly: false})

    if(!user){
        return res.send({ok: false, accessToken: ""})
    }
    return res.send({ok: true, accessToken: auth.createAccessToken(user[0])})
    


}

exports.user=async(req, res, next)=>{

    console.log('user is from user in usercontroller',req.user)
    if(!req.user){ 
        return res.status(200).send('No User')
    }
    try {
        const user = await knex.select('firstName', 'lastName', 'id').from('users').where({'id':req.user})
        return res.status(200).json(user)
    } catch (error) {
        console.log('error @ userController ==>', error)
    }

}

exports.commentUser = async(req, res, next)=>{
    console.log(req.params.id)
    var id = req.params.id
    try {
        const user = await knex.select('firstName', 'lastName').from('users').where({'id':id})
        return res.status(200).json(user)
    } catch (error) {
        console.log('error @ userCommentUserController ==>', error)
    }
    next();
}

exports.logout = async(req, res, next)=>{
    
    const token = {token: req.body.jid}
    const refreshtoken = req.cookies.jid;

    // console.log(token)
    // console.log(refreshtoken)
    try {
        await knex.insert(token).into('token')
        .then(() => {
                res.status(201).json({
                message: 'Token blacklisted!'
            });
        })}      
    catch (error) {
            res.status(500).json({  
                error: error,
                message: "Could not save information"
        });
    }
    next()
}
