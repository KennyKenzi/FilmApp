import React, { Component } from 'react';
import apiCalls from '../config/api'


class Register extends Component {
    state = { 

        firstName: '',
        lastName: '',
        username: '',
        password: '',
        password2: ''
     }

    onChange=(e)=>{
        if(e.target.value){
            this.setState({ [e.target.name] : e.target.value})
        }
     }

    onSubmit=async(e)=>{
        e.preventDefault()
        console.log(this.state)
        await apiCalls.register(this.state).then((data)=>{
        console.log(data)
            this.setState({
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                password2: ''
            })
        })
    }
    onCancel=()=>{
        console.log('For now, just print cancel')
    }

    render() { 
        return ( 
           
        <div>

            <form onSubmit={this.onSubmit} className="theborderish">
                <div className="container" style={{width: "50%", fontSize: "70%"}}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <span style={{display: "flex"}}>
                    <label htmlFor="firstName" style={{alignSelf: "center", margin:"1%"}}><b>FirstName</b></label>
                    <input type="text" placeholder="Enter First Name" name="firstName" value={this.state.firstName} required onChange={this.onChange}/>

                    <label htmlFor="lastName" style={{alignSelf: "center", margin:"1%"}} ><b>LastName</b></label>
                    <input type="text" placeholder="Enter Last Name" name="lastName" value={this.state.lastName} required onChange={this.onChange} />
                    </span>

                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" value={this.state.username} required onChange={this.onChange} />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={this.state.password} required onChange={this.onChange}/>

                    <label htmlFor="password2t"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="password2" value={this.state.password2} required onChange={this.onChange}/>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn btn btn-danger" onClick={this.onCancel}>Cancel</button>
                        <button type="submit" className="signupbtn btn btn-success ">Register</button>
                    </div>
                    <p>Not a new user?? <a href='/signin'> Sign in </a>here</p>    
                </div>
            </form>
        </div>
            
         )
    }
}
 
export default Register;



   
