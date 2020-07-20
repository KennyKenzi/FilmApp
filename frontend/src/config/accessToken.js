let accessToken = ''


exports.setToken  = (token)=>{
     accessToken = token
}

exports.getToken  = ()=>{
    return accessToken
}