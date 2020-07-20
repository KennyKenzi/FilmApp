import React, { Component } from 'react';
import FilmSection from './EachFIlmSection'
import apiCalls from '../../config/api'
import accessToken from '../../config/accessToken'



class FilmListPage extends Component {
    state = { 

        testArray: [],
        user : "",
        loading: false
     }


     componentDidMount=async(e)=>{

        this.setState({loading: true}, async()=>{

            var authtoken = accessToken.getToken()
            console.log('auth token', authtoken)

            await apiCalls.getFilms(authtoken).then(async(data)=>{
                this.setState({testArray: data.data})
                
                await apiCalls.getUser(authtoken).then((user)=>{
                    if (user === 'No User'){
                        this.setState({user: "" ,loading: false})          
                    }else {
                        this.setState({user: user.data[0], loading: false})   
                    }
                      
                })
            })
        })
     }



    render() { 
          return ( 
            <div>

            <h1>
                Film List
            </h1>
            
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