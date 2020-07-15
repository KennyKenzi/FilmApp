const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_SELECTED_TOKEN_SECRET');
    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error:'Invalid request!'
    });
  }

};
exports.password = (req, res, next)=>{
  var p1=req.body.password
  var p2=req.body.password2
  console.log(req.body.password)
  console.log(req.body.password2)

  if(p1 === p2){
    next()
  }else{
    res.status(401).send({
      error: 'Password does not match'
    })

  }
}