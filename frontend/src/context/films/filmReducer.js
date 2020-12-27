import {
    LOAD_FILMS,
} from '../types'


// eslint-disable-next-line
export default (state, action)=>{
    switch(action.type){
        case LOAD_FILMS:
            return{
                ...state, 
                films: action.payload,
                loading: false
            }
        default:
            return state     
    }
}