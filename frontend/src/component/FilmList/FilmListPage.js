import React, { Component } from 'react';
import FilmSection from './EachFIlmSection'
import apiCalls from '../../config/api'
import accessToken from '../../config/accessToken'
import axios from 'axios'



class FilmListPage extends Component {
    state = { 

        testArray: []
     }


     componentDidMount=async()=>{
        var authtoken = accessToken.getToken()
        await apiCalls.getFilms(authtoken).then((data)=>{
           this.setState({testArray: data.data})
           console.log(document.cookie)
        //    axios.post('http://localhost:4000/refresh_token')
        //    .then((r)=>{
        //      console.log(r)
        //    })
        })

     }

    render() { 
       

        return ( 
            <div>

            <h1>
                Film List
            </h1>

                {this.state.testArray.map(element => {
                        return<div key={element.id}><FilmSection data={element}/></div>
                    })}

            </div>

         );
    }
}
 
export default FilmListPage;