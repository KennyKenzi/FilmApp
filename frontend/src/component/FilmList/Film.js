import React, { Component } from 'react';
import apiCalls from '../../config/api'
import Comments from './CommentSection'
import access from '../../config/accessToken'
import PopUp from '../FilmList/AddCommentPopup'


class Film extends Component {
    state = { 
        loading: false,
        user :"",
        seenPopup: false,
     }


    componentDidMount=async()=>{
        this.setState({loading: true}, async()=>{
            var authtoken = access.getToken()
            if(authtoken){   
                    apiCalls.getUser(authtoken).then((user)=>{
                        if (user.data === 'No User'){
                            this.setState({user: "" ,loading: false})          
                        }else {
                            this.setState({user: user.data[0], loading: false})   
                        }
                    })
            }else{
                console.log('here')
                apiCalls.refresh(authtoken)
                .then(res=>{
                    var data = res.data
                    if(data.accessToken){  
                        access.setToken(data.accessToken)
                        authtoken =   access.getToken()
                    }  
                    console.log('authtoken', authtoken, this.state.loading)
                        apiCalls.getUser(authtoken).then((user)=>{

                            if (user.data === 'No User'){
                                this.setState({user: "" ,loading: false})          
                            }else {
                                this.setState({user: user.data[0], loading: false})   
                            }
                      
                        })
                })
            }
        })

        this.setState({
            image:await apiCalls.getImages(this.props.location.state.image)
        })

        await apiCalls.getFilmComments(this.props.location.state.id)
        .then(async(res)=>{ 
            await this.setState({
                comments: res.data,
                // loading: false
            })
        })
    }



    togglePopup = () => {
        this.setState({
            seenPopup: !this.state.seenPopup
           });
    };

    addComment=()=>{
        this.togglePopup()
   }

    render() { 
        var film = this.props.location.state
        return ( 
            
            <div>
                Film Page
                <p>{this.state.user!==""? <>Welcome {this.state.user.firstName} {this.state.user.lastName}</>: ""}</p>
                <div>
                    <h1>
                        {film.name}
                    </h1>
                        <img src={this.state.image} alt=""/>
                    <div>
                        <div><p><b>{film.releaseDate.slice(0,10)}</b></p></div>
                    </div>
                    <div>
                        <p>{film.description}</p>
                    </div>
                    <div>
                        <div style={{fontSize:15}}>
                            
                            <p style={{marginBottom:0}}><b>Genre: </b>{film.genre}</p>
                            <p style={{marginBottom:0}}><b>Price: </b>{film.ticketPrice}</p>
                            <p style={{marginBottom:0}}><b>Rating: </b>{film.rating} star</p>
                            <p><b>Created in: </b>{film.Country}</p>
                            
                        </div> 
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Comments</h1>
                        {this.state.user!==""? <button type="button" className="btn btn-outline-dark btn-small" style={{inlineSize:'min-content', marginBottom:10}} onClick={this.addComment}>Add</button>: ""}
                    </div>

                    {this.state.seenPopup ? <PopUp toggle={this.togglePopup} filmid={film.id} userID={this.state.user.id}/> : null}


                    {this.state.loading ?  <div className="spinner"></div>: ""}
                    <div style={{width:'95%', display:'inline-block'}}>
    
                        {
                            this.state.comments? 
                            this.state.comments.map(element=>{
                            return<div key={element.id}><Comments data={element} /></div>
                            }): ""
                        }

                    </div>
                </div>
            </div>

         );
    }
}
 
export default Film;