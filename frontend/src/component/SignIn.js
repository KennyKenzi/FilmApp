import React, { Component } from 'react';
import apiCalls from '../config/api'
import accessToken from '../config/accessToken'


class SignIn extends Component {
    state = { 

        username: '',
        password: ''
     }

     onChange=(e)=>{
        if(e.target.value){
            this.setState({ [e.target.name] : e.target.value})
        }

     }

    onSubmit=async(e)=>{
        var payLoad= {
            username: this.state.username,
            password: this.state.password
        }
        e.preventDefault()

                await apiCalls.login(payLoad)
                .then((res)=>{

                        accessToken.setToken(res.data.token)
                        console.log(document.cookie)
                        this.props.history.push(`/films`);
                    }, 
                    (err)=>{
                        console.log(err.response)
                    } 
                    
                )
               

    }

    render() { 
        return ( 
           
            <div>
     
                <form className="theborderish" onSubmit={this.onSubmit}>
                <div className="container" style={{width: "30%", fontSize: "70%"}}>
                    <h1>Sign In</h1>
                    <p>Please Log in.</p>
                    <hr/>

                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" value={this.state.username} required onChange={this.onChange}/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={this.state.password} required onChange={this.onChange}/>

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



   
