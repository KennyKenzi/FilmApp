import React, { Component } from 'react';
import {UserConsumer} from '../Context/UserContext'



class Navbar extends Component {
    state = { 

        user: false,
        button: '',
        redirectLogin: null,
        redirectLogout: null,
     }

    //  static contextType = UserContext

     componentDidMount=()=>{
         this.hideElement()

         console.log(this.props)
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
        // if (this.state.redirectLogin) {
        //     return <Redirect to={this.state.redirectLogin} />
        //   }
        //   if (this.state.redirectLogout) {
        //     return <Redirect to={this.state.redirectLogout} />
        //   }
        return ( 
            <div>

        <nav className="navbar navbar-light" style={{"backgroundColor":" #aaa9a9"}}>
                
                <div className="navbar ">
                    <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/films">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="/signin" onClick={this.clickButton}>{this.state.button}</a>
                    </li>

                    
                    </ul>
                </div>
                </nav>
            </div>
            
         );
    }
}
 
export default Navbar;