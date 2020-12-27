import React, { useContext, useEffect, useState, Fragment } from 'react';
import FilmSection from './EachFIlmSection'
import apiCalls from '../../config/api'

import PopUp from "./AddFilmPopup"; 
import access from '../../config/accessToken'
import FilmContext from '../../context/films/filmContext'

const FilmListPage =()=> {

    const filmContext = useContext(FilmContext)

    const {getFilms, films, user, seenPopup, loading} = filmContext

    // state = { 

    //     testArray: [],
    //     user : "",
    //     loading: false,
    //     seenPopup: false
    // }

    useEffect(()=>{

      (async()=>{
            var authtoken = access.getToken()
            if(authtoken){   

                    await getFilms(authtoken)
                    .then(()=>{
                        apiCalls.getUser(authtoken).then((user)=>{
                            console.log(user)
                            if (user.data === 'No User'){    
                            }else {
                                console.log('User: ',user.data[0])  
                            }
                        })
                    })

            }else{
                apiCalls.refresh(authtoken)
                .then (async(res)=>{
                    var data = res.data
                    if(data.accessToken){  
                        access.setToken(data.accessToken)
                        authtoken =   access.getToken()
                    }  
                    //  console.log('authtoken', authtoken, this.state.loading)
                    console.log('auth: ', authtoken)

                    // apiCalls.getFilms(authtoken)
                    // .then((data)=>{
                    //     this.setState({testArray: data.data})
                    await getFilms(authtoken)
                    .then(async()=>{
                       await apiCalls.getUser(authtoken).then((user)=>{
                            console.log(user.data[0])
                            if (user.data === 'No User'){                                     
                                console.log('No user again')
                                console.log(films) 
                            }else {
                                console.log('User again: ' , user.data[0])
                            }
                        })
                    })


                    // })  
                })
            }
        })()
        // })
    // eslint-disable-next-line
    },[])


    const togglePopup = () => {
        this.setState({
            seenPopup: !this.state.seenPopup
           });
    };

    const addFilm=()=>{
         if(user !== ""){
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
                              <p style={{display:"contents"}}>{user!==""? <>Welcome {user.firstName} {user.lastName}</>: <>Welcome Guest</>}</p> 
                                 {user!==""? <button type="button" className="btn btn-danger" style={{width: "auto", marginLeft: 20}} onClick={clickLogout}>Logout</button> :""}
                                
                         </div>


                        <div style={{marginBottom: 30}}>
                            <h1 style={{marginRight:10, display: "contents"}}>
                            Film List
                            </h1>
                            <button style={{width: "auto"}} type="button" className="btn btn-primary" onClick={addFilm} >Add Film</button>
                        </div>
                            {seenPopup ? <PopUp toggle={togglePopup} info={user ?'addfilm':"" } position="middle" /> : null}

                        
                           { films.map(element=> (                             
                                    <div key={element.id} style={{maxWidth:'70%', display:'inline-block'}} >
                                        <FilmSection  data={element}/>
                                    </div>)
                            ) }
                            </div>
                }
                                        
               
            </Fragment>
                          
        )
}
 
export default FilmListPage;