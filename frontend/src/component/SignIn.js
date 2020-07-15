import React, { Component } from 'react';
import Navbar from './Navbar'
import apiCalls from '../config/api'


class SignIn extends Component {
    state = { 


     }

     onChange=(e)=>{
        if(e.target.value){
            this.setState({ [e.target.name] : e.target.value})
        }
     }

    onSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        apiCalls.login(this.state)
    }

    render() { 
        return ( 
           
            <div>
     
                <form className="theborderish" onSubmit={this.onSubmit}>
                <div className="container" style={{width: "50%"}}>
                    <h1>Sign In</h1>
                    <p>Please Log in.</p>
                    <hr/>

                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Email" name="username" required onChange={this.onChange}/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required onChange={this.onChange}/>

                    <div className="clearfix">
                        <button type="submit" className="signupbtn btn btn-success ">Sign In</button>
                    </div>
                    <p>Dont have an account <a href='/register'>Register </a>here</p>
                    
                </div>
            </form>

                
            </div>
            
         )
    }
}
 
export default SignIn;



   
