import React, { Component } from 'react';
import apiCalls from '../../config/api'
import Comments from './CommentSection'


class Film extends Component {
    state = { 
        loading: false
     }


    componentDidMount=async()=>{
        this.setState({
            loading: true
        })

        this.setState({
            image:await apiCalls.getImages(this.props.location.state.image)
        })

        await apiCalls.getFilmComments(this.props.location.state.id)
        .then(async(res)=>{
            await this.setState({
                comments: res.data,
                loading: false
            })
        })
    }


    render() { 
        console.log(this.state.comments)
        var film = this.props.location.state
        return ( 

            <div>
                Film Page
                <div>
                    <h1>
                        {film.name}
                    </h1>
                        <img src={this.state.image}/>
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
                <h1>Comments</h1>
                <h2>Coming soon...when i have the time</h2>
                {this.state.loading ?  <div className="spinner"></div>: ""}
                <div>
{/* 
                    {
                        this.state.comments? 
                        this.state.comments.map(element=>{
                            return<div key={element.id}><Comments data={element}/></div>
                        }): ""
                    } */}
                      {
                        this.state.comments? 
                        this.state.comments.forEach(element=>{
                            return<div key={element.id}><Comments data={element}/></div>
                        }): ""
                    }

                    
                </div>
            </div>

         );
    }
}
 
export default Film;