const jwt = require('jsonwebtoken');
require ('dotenv').config()

exports.auth = (req, res, next) => {

  if (req.headers.authorization){
    
      try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const userId = decodedToken.userId;

        console.log(userId)
        console.log(req.body)
          if (req.body.length>1){
            if (req.body.userId && req.body.userId !== userId) {
              throw 'Invalid user ID';
            } else {
              return "It is a user"
              next();
              }
          } else{
            next()
          }
          
      }catch {
          res.status(401).json({
            error:'Invalid request!'
          });
          
  }
  }else{
    console.log('here')
    //next()
  }
  

};

exports.passwordMatchCheck = (req, res, next)=>{
  var p1=req.body.password
  var p2=req.body.password2
  console.log(req.body.password)
  console.log(req.body.password2)

  if(p1 === p2){
    next()
  }else{
    res.status(400).json({
      error: error,
      message: "Password does not match"
    })

    next
  }
}

exports.createAccessToken = (newUser)=>{
  return jwt.sign(
    { userId: newUser.id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '5m' });
}

exports.createRefreshToken = (newUser)=>{

  return jwt.sign(
    { userId: newUser.id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' });
}