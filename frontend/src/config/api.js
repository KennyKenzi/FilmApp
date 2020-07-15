const axios = require("axios")

const backendUrl = 'http://localhost:4000'


var api ={
    signIn: backendUrl+'/login',
    register: backendUrl+'/register'
}

exports.login = async(body)=>{
    await axios.post(api.signIn,body)
}

exports.register = async(body)=>{
    await axios.post(api.register,body)
}