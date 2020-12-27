import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import FilmList from './component/FilmList/FilmListPage'
import SignIn from './component/SignIn_'
import Register from './component/Register'
import Navbar from './component/Navbar'
import Film from './component/FilmList/Film'
import FilmState from './context/films/FilmState'
import AuthState from './context/auth/AuthState'




const App = () => {

  return (
   
      <div className="App">
        <AuthState>
        <FilmState>
        <Router >
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
                  <Route path="/viewfilm" component={Film}/>
                  {/* <Route path="/unpublished" component={UnPublishedPost}/> */}

                  <Route component={Error}/>
                </Switch>
              </div>  
              </div>
          </Router>
        </FilmState>  
        </AuthState>  
        </div>
      
  );
}

export default App;
