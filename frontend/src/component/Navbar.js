import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import accessToken from '../config/accessToken'


class Navbar extends Component {
    state = { 

        user: false,
        button: '',
        redirectLogin: null,
        redirectLogout: null,
     }

    //  static contextType = UserContext

    componentDidMount=async()=>{


        //  var auth = accessToken.getToken()
        //  console.log(auth)
        //     if (auth){
        //         this.setState({
        //             user : true,
        //             token: auth
        //         })
        //         console.log('herererererr')
        //     }else{

        //     }

        //  this.setState({loading: true}, async()=>{

        //     var authtoken = accessToken.getToken()
        //     console.log('auth token', authtoken)

        //     await apiCalls.getFilms(authtoken).then(async(data)=>{
        //         this.setState({testArray: data.data})
                
        //         await apiCalls.getUser(authtoken).then((user)=>{
        //             if (user === 'No User'){
        //                 this.setState({user: "" ,loading: false})          
        //             }else {
        //                 this.setState({user: user.data[0], loading: false})   
        //             }
                      
        //         })
        //     })
        // })
    }
           
     hideElement=()=>{
        if(this.state.user){
            this.setState({button: 'Logout'})
        }else{
            this.setState({button: 'SignIn/Register'})
        }

    }

    clickButton=(e)=>{
        // e.preventDefault()

    }

    render() {
     console.log(this.state)
        return ( 
            <div>

        <nav className="navbar navbar-light" style={{"backgroundColor":" #aaa9a9"}}>
                
                <div className="navbar ">
                    <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/films" > Home </Link> 
                    </li>
                    <li className="nav-item ">
                        {/* <a className="nav-link" href="/signin" onClick={this.clickButton}>{this.state.button}</a> */}
                        <Link to="/signin" > Sign In/ Register </Link> 
                    </li>

                    
                    </ul>
                </div>
                </nav>
            </div>
            
         );
    }
}
 
export default Navbar;