import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import FilmList from './component/FilmList/FilmListPage'
import SignIn from './component/SignIn'
import Register from './component/Register'
import Navbar from './component/Navbar'
import axios from 'axios'
import access from './config/accessToken'
import { UserProvider } from './Context/UserContext'



function App() {
useEffect(()=>{
  console.log('hereeee')
  axios.post('http://localhost:4000/api/refresh_token', {}, {withCredentials: true})
  .then(async(res)=>{
    var data = res.data
    console.log(data)
    await access.setToken(data.accessToken)
    await console.log(access.getToken())
    
  })
})
console.log(access.getToken())


  return (
    
    <div className="App">
      <UserProvider>
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <Navbar/>
      </header>

      <div className="App-body">

        <BrowserRouter >
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
        </BrowserRouter>
        </div>
        </UserProvider>
      </div>
  );
}

export default App;
