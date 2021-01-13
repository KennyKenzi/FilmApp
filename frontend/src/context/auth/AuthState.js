import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import apiCalls from '../../config/api'
import access from '../../config/accessToken'

import {
    GET_USER,
    REFRESH_TOKEN,
   // LOGOUT_USER,
} from '../types'

const AuthState = (props)=>{

    const initialState={
        user:"",
        authToken: access.getToken()
    }

   const [state, dispatch] = useReducer(authReducer, initialState)

   const getUser = async(authtoken)=>{
       try {
        const user = await apiCalls.getUser(authtoken) 
            dispatch({
                type: GET_USER,
                payload: user.data
            })
            // console.log(user.data)
       } catch (err) {
           console.log(err)
       }  
   }

   const refreshToken = async (authtoken)=>{
        const res = await apiCalls.refresh(authtoken)
        
            var data = res.data
            
            if(data.accessToken){ 
                access.setToken(data.accessToken)
                const pay = access.getToken()
                dispatch({
                    type: REFRESH_TOKEN,
                    payload: pay
                })
                console.log(pay)
            }
           
   }

   


   return (
    <AuthContext.Provider
    value={{
    user : state.user,
    authToken : state.authToken,
    refreshToken,
    getUser,  

        
        
    }}
    >
        {props.children}
    </AuthContext.Provider>
)

}
export default AuthState