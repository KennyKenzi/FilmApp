import React, { Component } from 'react';
import apiCalls from '../../config/api'



class Film extends Component {
    state = {  }


    componentDidMount=async()=>{

        this.setState({
            image:await apiCalls.getImages(this.props.location.state.image)
        })
    }


    render() { 
        console.log(this.props.location.state)
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
                        <div style={{display:"inline-flex", }}><p style={{marginRight:20}}>{film.releaseDate.slice(0,10)}</p><p>{film.Country}</p></div> 
                    </div>
                    <div>
                        <p>{film.description}</p>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default Film;