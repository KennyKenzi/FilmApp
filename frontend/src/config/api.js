const axios = require("axios")

const backendUrl = 'http://localhost:4000'


var api ={
    signIn: backendUrl+'/login',
    register: backendUrl+'/register',
    films: backendUrl+'/films',
    comments: backendUrl+'/comments'
}


exports.login = async(body)=>{
    return await axios.post(api.signIn, body, {withCredentials: true})
}

exports.register = async(body)=>{
    return await axios.post(api.register,body, {withCredentials: true})
}

exports.getFilms = async(auth)=>{
    console.log(auth)
    return await axios.get(api.films, 
        { headers: {
          'Authorization': auth? 'Bearer ' + auth: "" 
        }, withCredentials: true}
    )
}
exports.createFilm = async(body)=>{
    return await axios.post(api.films, body)
}
exports.getComments = async()=>{
    return await axios.get(api.comments)
}
exports.postComment = async(body)=>{
    return await axios.post(api.comment, body)
}