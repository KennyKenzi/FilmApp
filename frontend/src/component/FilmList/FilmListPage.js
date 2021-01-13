import React, { useContext, useEffect, Fragment } from 'react';
import FilmSection from './EachFIlmSection'
import apiCalls from '../../config/api'

import PopUp from "./AddFilmPopup"; 
import access from '../../config/accessToken'
import FilmContext from '../../context/films/filmContext'
import AuthContext from '../../context/auth/authContext'

const FilmListPage =()=> {

    const filmContext = useContext(FilmContext)
    const authContext = useContext(AuthContext)

    const {getFilms, films, seenPopup, loading, togglePop} = filmContext
    const {getUser, user} = authContext


    useEffect(()=>{

      (async()=>{
            var authtoken = access.getToken()
            if(authtoken){   
                    await getFilms(authtoken)
                    await getUser(authtoken)                      
            }else{
                apiCalls.refresh(authtoken)
                .then (async(res)=>{

                    var data = res.data
                    if(data.accessToken){  
                        access.setToken(data.accessToken)
                        authtoken =   access.getToken()  
                    }  
                    await getFilms(authtoken)   
                    await getUser(authtoken)
                                         
                })
            }
        })()
        // })
    // eslint-disable-next-line
    },[])


    const togglePopup = async() => {
        await togglePop()
    };

    const addFilm=()=>{
         if(user !== "" && user !== "No User"){
                console.log('there is a user logged in')
            togglePopup()
         }else {
             console.log('there is no one here')
            togglePopup()
         }
    }

    const clickLogout=async()=>{
  
        var res = await apiCalls.logout(document.cookie)
        console.log(res)
        console.log(document.cookie.jid)
        window.location.reload(false);
    }


          return (  
              
            <Fragment> 
                    {
                    loading ?  (<div className="spinner"></div>):
                    <div>
                         <div style={{marginBottom: 20}}>
                              <p style={{display:"contents"}}>{user!=="" && user !== "No User"? <>Welcome {user[0].firstName} {user[0].lastName}</>: <>Welcome Guest</>}</p> 
                                 {user!=="" && user !== "No User" ? <button type="button" className="btn btn-danger" style={{width: "auto", marginLeft: 20}} onClick={clickLogout}>Logout</button> :""}
                                
                         </div>


                        <div style={{marginBottom: 30}}>
                            <h1 style={{marginRight:10, display: "contents"}}>
                            Film List
                            </h1>
                            <button style={{width: "auto"}} type="button" className="btn btn-primary" onClick={addFilm} >Add Film</button>
                        </div>
                            {seenPopup ? <PopUp toggle={togglePopup} info={user !== "" && user !== "No User" ?'addfilm':"" } position="middle" /> : null}

                        <div style={{maxWidth:'70%', display:'inline-block'}}>
                                { films.map(element=> (                             
                                    <div key={element.id}  >
                                        <FilmSection  data={element}/>
                                    </div>)
                            ) }
                        </div>

                            </div>
                }
                                        
               
            </Fragment>
                          
        )
}
 
export default FilmListPage;