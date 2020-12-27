import {
    GET_USER
} from '../types'

// eslint-disable-next-line
export default (state, action)=>{
    switch(action.type){
        case GET_USER:
            return{
                ...state, 
                user: action.payload,
                loading: false
            }
        default:
            return state     
    }
}