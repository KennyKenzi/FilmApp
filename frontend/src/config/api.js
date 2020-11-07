const axios = require("axios")

const backendUrl = 'http://localhost:4000/api'
const imgUrl = 'http://localhost:4000/'
//const backendUrl= 'http://192.168.8.101:4000/api'





var api ={
    signIn: backendUrl+'/login',
    register: backendUrl+'/register',
    films: backendUrl+'/films',
    comments: backendUrl+'/comments',
    user: backendUrl+ '/user',
    refresh:backendUrl + '/refresh_token',
    country: backendUrl+ '/countries',
    filmcomments: backendUrl +'/filmComment',
    commentUser: backendUrl+'/comment/user',
    image : imgUrl,
    logout: backendUrl+'/logout'
}






exports.login = async(body)=>{
    return await axios.post(api.signIn, body, {withCredentials: true})
}

exports.register = async(body)=>{
    return await axios.post(api.register,body,  {withCredentials: true})
}

exports.getFilms = async(auth)=>{
    return await axios.get(api.films, { headers: { 'Authorization': auth? 'Bearer ' + auth: "" }, withCredentials: true}
    )
}

exports.getUser = async(auth)=>{
    return await axios.get(api.user, { headers: {'Authorization': auth? 'Bearer ' + auth: ""}, withCredentials: true}
    )
}
exports.createFilm = async(body, auth)=>{
    return await axios.post(api.films, body, { headers: {
        'Authorization': auth? 'Bearer ' + auth: "" 
      }})
}


exports.getFilmComments = async(id)=>{
    return await axios.get(api.filmcomments +"/"+ id)
}

exports.postComment = async(body, auth)=>{
    return await axios.post(api.comments, body, { headers: {
        'Authorization': auth? 'Bearer ' + auth: "" 
      }})
}

exports.getCommentUser = async(id, auth)=>{
    return await axios.get(api.commentUser+'/'+id, { headers: {
        'Authorization': auth? 'Bearer ' + auth: "" 
      }})
}

exports.refresh = async(auth)=>{
    return await axios.post(api.refresh, {}, { headers: {
        'Authorization': auth? 'Bearer ' + auth: "" 
      }, withCredentials: true})
}
exports.getCountries = async()=>{
    return await axios.get(api.country)
}
exports.getImages = async(img)=>{
    return  api.image +"images/" + img
}

exports.logout = async(auth)=>{
    return await axios.post(api.logout, auth)
}