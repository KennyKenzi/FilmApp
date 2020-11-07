import React, { Component } from 'react';
import FilmSection from './EachFIlmSection'
import apiCalls from '../../config/api'

import PopUp from "./AddFilmPopup"; 
import access from '../../config/accessToken'

class FilmListPage extends Component {
    state = { 

        testArray: [],
        user : "",
        loading: false,
        seenPopup: false
    }


    componentDidMount=(async()=>{

        this.setState({loading: true}, async()=>{
            
            var authtoken = access.getToken()
            if(authtoken){   
                await apiCalls.getFilms(authtoken)
                .then((data)=>{
                    this.setState({testArray: data.data})

                    apiCalls.getUser(authtoken).then((user)=>{
                        console.log(user)
                        if (user.data === 'No User'){
                            this.setState({user: "" ,loading: false})          
                        }else {
                            this.setState({user: user.data[0], loading: false})   
                        }
                    })
                })
            }else{

                console.log('here')
                apiCalls.refresh(authtoken)
                .then(res=>{
                    console.log('here2')
                    var data = res.data
                    if(data.accessToken){  
                        access.setToken(data.accessToken)
                        authtoken =   access.getToken()
                    }  
                    console.log('authtoken', authtoken, this.state.loading)
                    apiCalls.getFilms(authtoken)
                    .then((data)=>{
                        this.setState({testArray: data.data})

                        apiCalls.getUser(authtoken).then((user)=>{
                            console.log(user)
                            if (user.data === 'No User'){
                                this.setState({user: "" ,loading: false})          
                            }else {
                                this.setState({user: user.data[0], loading: false})   
                            }
                      
                        })
                    })  
                })
            }
        })
    })

    togglePopup = () => {
        this.setState({
            seenPopup: !this.state.seenPopup
           });
    };

    addFilm=()=>{
         if(this.state.user !== ""){
                console.log('there is a user logged in')
            this.togglePopup()
         }else {
             console.log('there is no one here')
            this.togglePopup()
         }
    }



    render() { 
        
          return (     
            <div>
                <div>
                
                <div style={{display: "-webkit-inline-box"}}>
                    <h1 style={{marginRight:10}}>
                    Film List
                    </h1>
                    <button type="button" className="btn btn-primary" onClick={this.addFilm} >Add Film</button>
                </div>
                {/* <PopUp toggle={this.togglePopup} styles={ "block"} /> */}
                {this.state.seenPopup ? <PopUp toggle={this.togglePopup} info={this.state.user ?'addfilm':"" } position="middle" /> : null}
                
                {this.state.loading ?  <div className="spinner"></div>: ""}
                <p>{this.state.user!==""? <>Welcome {this.state.user.firstName} {this.state.user.lastName}</>: ""}</p>
    
                    {this.state.testArray.map(element => {
                            return<div style={{maxWidth:'70%', display:'inline-block'}} key={element.id}><FilmSection data={element}/></div>
                        })}
                    </div>
              
                
            </div>

         )
    }
}
 
export default FilmListPage;