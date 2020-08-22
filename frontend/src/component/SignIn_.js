import React, {useState, useEffect  } from 'react';
import apiCalls from '../config/api'
import accessToken from '../config/accessToken'
import { Link } from 'react-router-dom';




const SignIn = (props) => {
    const [value, setValue] = useState({
        username: "",
        password: ""
    })
    const [data, setData] = useState([])


    // useEffect(()=>{    
    //     apiCalls.getUser(accessToken.getToken())
    //     console.log(accessToken.getToken())
    // },[])


   const onChange=(e)=>{

       if(e.target.value){

            setValue( {...value, [e.target.name]:e.target.value})
       }
    }

   const onSubmit=async(e)=>{
       var payLoad= {
           username: value.username,
           password: value.password
       }

       e.preventDefault()

               await apiCalls.login(payLoad)
               .then((res)=>{
                    setData(res.data)
                    accessToken.setToken(res.data.token)
                    props.history.push(`/films`);
               }, 
                   (err)=>{
                       console.log(err.response)
                   } 
                   
               )
    }

    

    return ( 
        <div>
     
        <form className="theborderish" onSubmit={onSubmit}>
        <div className="container" style={{width: "30%", fontSize: "70%"}}>
            <h1>Sign In</h1>
            <p>Please Log in.</p>
            <hr/>

            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" value={value.username} required onChange={onChange}/>

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" value={value.password} required onChange={onChange}/>

            <div className="clearfix">
                <button type="submit" className="signupbtn btn btn-success ">Sign In</button>
            </div>
            <p>Dont have an account <Link to="/register" > Register </Link>  here
                
            </p>
            
        </div>
    </form>

        
    </div>
    
     );




}
 
export default SignIn;