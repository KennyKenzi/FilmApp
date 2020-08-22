import React, { Component } from 'react';
import FilmSection from './EachFIlmSection'
import apiCalls from '../../config/api'
import accessToken from '../../config/accessToken'
import PopUp from "./Popup"; 


class FilmListPage extends Component {
    state = { 

        testArray: [],
        user : "",
        loading: false,
        seenPopup: false
     }


     componentDidMount=async(e)=>{

        this.setState({loading: true}, async()=>{

            var authtoken = await accessToken.getToken()
            console.log('auth token', authtoken)

            await apiCalls.getFilms(authtoken).then(async(data)=>{
                this.setState({testArray: data.data})
                
                await apiCalls.getUser(authtoken).then((user)=>{
                    if (user.data === 'No User'){
                        this.setState({user: "" ,loading: false})          
                    }else {
                        this.setState({user: user.data[0], loading: false})   
                    }
                      
                })
            })
        })
     }

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
            // this.togglePopup()
         }
     }


    render() { 
          return ( 
            <div>
            <div style={{display: "-webkit-inline-box"}}>
                <h1 style={{marginRight:10}}>
                Film List
                </h1>
                <button type="button" className="btn btn-primary" onClick={this.addFilm} >Add Film</button>
            </div>
            <PopUp toggle={this.togglePopup} styles={ "block"} />
            {this.state.seenPopup ? <PopUp toggle={this.togglePopup}/> : null}
            
            {this.state.loading ?  <div className="spinner"></div>: ""}
            <p>{this.state.user? <>Welcome {this.state.user.firstName} {this.state.user.lastName}</>: ""}</p>

                {this.state.testArray.map(element => {
                        return<div key={element.id}><FilmSection data={element}/></div>
                    })}

            </div>

         );
    }
}
 
export default FilmListPage;