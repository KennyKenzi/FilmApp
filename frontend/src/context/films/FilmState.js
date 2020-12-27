import React, {useReducer} from 'react';
import FilmContext from './filmContext';
import filmReducer from './filmReducer';
import apiCalls from '../../config/api'

import {
    LOAD_FILMS,
} from '../types'

const FilmState = (props)=>{
    const initialState ={
        films: null,
        user: '',
        seenPopup : null,
        loading: true
    }
    

    const [state, dispatch] = useReducer(filmReducer, initialState)

    const getFilms = async(authtoken)=>{
        try {
            console.log(authtoken)
            await apiCalls.getFilms(authtoken)
            .then((res)=>{
                dispatch({
                    type: LOAD_FILMS,
                    payload: res.data
                })
                console.log(res.data)
            })  
        } catch (err) {
            console.log(err)
        }
        
    }



    return (
        <FilmContext.Provider
        value={{
            films: state.films,
            user: state.user,
            loading: state.loading,
            getFilms,
            
        }}
        >
            {props.children}
        </FilmContext.Provider>
    )
}
export default FilmState