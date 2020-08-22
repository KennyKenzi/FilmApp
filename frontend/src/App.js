import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import FilmList from './component/FilmList/FilmListPage'
import SignIn from './component/SignIn_'
import Register from './component/Register'
import Navbar from './component/Navbar'
import axios from 'axios'
import access from './config/accessToken'



function App() {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    // loaded = false
    console.log('here')
    axios.post('http://localhost:4000/api/refresh_token', {}, {withCredentials: true})
    .then(res=> {
      console.log('here2')
      var data = res.data
      if(data.accessToken){  
        access.setToken(data.accessToken)
        console.log('here 3',access.getToken())
      }

      setLoading(true)
      
    })
  })


  return (
    
    <div className="App">
      <BrowserRouter >
        <header className="App-header">
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <Navbar/>
        </header>


        <div className="App-body">

            <div>
              <Switch>
                <Route path="/" component={Home} exact/> 
                <Route path="/films" component={FilmList}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/register" component={Register}/>
                {/* <Route path="/allposts" component={film}/> */}
                {/* <Route path="/unpublished" component={UnPublishedPost}/> */}

                <Route component={Error}/>
              </Switch>
            </div>  
            </div>
        </BrowserRouter>
       
      </div>
  );
}

export default App;
