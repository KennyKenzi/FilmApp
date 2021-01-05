import React, {useReducer} from 'react';
import FilmContext from './filmContext';
import filmReducer from './filmReducer';
import apiCalls from '../../config/api'
import placeholderimage from '../../placeholder-image.png'
import data from '../../config/randomData'

import {
    LOAD_FILMS,
    TOGGLE_POPUP,
    GET_COUNTRIES,
    SET_CURRENT_FILM,
    ADD_FILM
} from '../types'

const FilmState = (props)=>{
    const initialState ={
        films: null,
        user: '',
        seenPopup : false,
        loading: true,
        imagedisplayed: placeholderimage,
        ticket : '',
        countries: null,
        genresList: data.genreData(),
        current_add: ""

    }
    

    const [state, dispatch] = useReducer(filmReducer, initialState)

    const getFilms = async(authtoken)=>{
        try {
            await apiCalls.getFilms(authtoken)
            .then((res)=>{
                dispatch({
                    type: LOAD_FILMS,
                    payload: res.data
                })
            })  
        } catch (err) {
            console.log(err)
        }
        
    }


    const togglePop  = () =>{
        dispatch({
            type: TOGGLE_POPUP
        })
    }

    const getCountryList =async()=>{
        const res = await apiCalls.getCountries()
        dispatch({
            type: GET_COUNTRIES,
            payload: res.data
        })
    }

    const setCurrentFilm = (film)=>{
        console.log(film)
        dispatch({
            type: SET_CURRENT_FILM,
            payload: film
        })
    }

    const addFilm = async (body)=>{
        const formBody = new FormData()
          
            formBody.append('name',body.name);
            formBody.append('description', body.description)
            formBody.append('releaseDate', body.date)
            formBody.append('rating',body.rating)
            formBody.append('ticketPrice',body.price)
            formBody.append('country',body.country)
            formBody.append('genre',body.genre)  
            formBody.append('file',body.file)
          console.log(body.file)
    
        await apiCalls.createFilm(formBody,{'Content-Type':'multipart/form-data'})
          
    
        dispatch({
            type: ADD_FILM
        })
       }



    return (
        <FilmContext.Provider
        value={{
            films: state.films,
            user: state.user,
            loading: state.loading,
            seenPopup: state.seenPopup,
            ticket: state.ticket,
            countries: state.countries,
            genresList: state.genresList,
            current_add : state.current_add,
            imagedisplayed: state.imagedisplayed,
            getFilms,
            getCountryList,
            togglePop,
            addFilm,
            setCurrentFilm
            
        }}
        >
            {props.children}
        </FilmContext.Provider>
    )
}
export default FilmState