var bcrypt = require('bcrypt')
var moment = require('moment')
const { knex } = require('../db/knex');
const jwt = require('jsonwebtoken')



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
                .then((data) => {
                        console.log(data)
                          res.status(201).json({
                          user: data,
                          message: 'User added successfully!'
                      });
                    }
                  )} 
            
                  catch (error) {
                    res.status(500).json({
                    error: error
                  });
            }
           
          }
        );
      };

      

exports.login =async(req, res,next)=>{
      
    console.log( req.body)

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
                            bcrypt.compare(req.body.password, newUser.password).then(
                                (valid) => {
                                    if (!valid) {
                                        
                                        return res.status(401).json({
                                            error: new Error('Incorrect password!'),
                                            message: 'No user/password'
                                        });
                                    }
                                   
                                    const token = jwt.sign(
                                        { userId: newUser.id },
                                        'RANDOM_SELECTED_TOKEN_SECRET',
                                        { expiresIn: '24h' });
                                    res.status(200).json({
                                        userId: newUser.id,
                                        token: token
                                    });
                                }
                            )
                        }catch (error) {
                                res.status(500).json({
                                    error: error
                                });
                            }
                    }
                )
            }catch (error) {
                res.status(500).json({
                    error: error
                });
                    
        }

   
}