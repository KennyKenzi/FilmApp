import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import apiCalls from '../../config/api'

import {
    GET_USER
} from '../types'

const AuthState = (props)=>{

    const initialState={
        user:"",


    }

   const [state, dispatch] = useReducer(authReducer, initialState)

   const getUser = async(authtoken)=>{
       try {
        await apiCalls.getUser(authtoken)
        .then((user)=>{
            dispatch({
                type: GET_USER,
                payload: user.data
            })
        })
       } catch (err) {
           console.log(err)
       }
       
   }

   return (
    <AuthContext.Provider
    value={{
    user : state.user,
    getUser,
        
        
    }}
    >
        {props.children}
    </AuthContext.Provider>
)

}
export default AuthState