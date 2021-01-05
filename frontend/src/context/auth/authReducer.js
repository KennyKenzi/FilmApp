import {
    GET_USER,
    REFRESH_TOKEN,
    LOGOUT_USER
} from '../types'

// eslint-disable-next-line
export default (state, action)=>{
    switch(action.type){
        case GET_USER:
            return{
                ...state, 
                user: action.payload,  
            }

        case REFRESH_TOKEN:
            return{
                ...state,
                authToken: action.payload
                }
        default:
            return state     
    }
}