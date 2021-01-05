import {
    LOAD_FILMS,
    TOGGLE_POPUP,
    GET_COUNTRIES,
    SET_CURRENT_FILM,
    ADD_FILM
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

        case TOGGLE_POPUP:
            return{
                ...state,
                seenPopup: !state.seenPopup
            }
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload
            }
        case SET_CURRENT_FILM:
            return{
                ...state,
                current_add: action.payload,
                loading: false
            }

        default:
            return state     
    }
}