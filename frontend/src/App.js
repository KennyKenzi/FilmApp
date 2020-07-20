import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import FilmList from './component/FilmList/FilmListPage'
import SignIn from './component/SignIn'
import Register from './component/Register'
import Navbar from './component/Navbar'
import axios from 'axios'
//import Cookies from 'js-cookie'


function App() {
useEffect(()=>{
  //console.log('hereeee')
  axios.post('http://localhost:4000/refresh_token', {credentials: true})
  .then((r)=>{
    console.log(r)
  })
})

  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <Navbar/>
      </header>

      <div className="App-body">

        <BrowserRouter>
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
      </div>
  );
}

export default App;
