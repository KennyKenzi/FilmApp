import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import FilmList from './component/FilmList/FilmListPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar/> */}
      </header>

      <div className="App-body">

        <BrowserRouter>
          <div>
            <Switch>
              {/* <Route path="/" component={Home} exact/> */}
              <Route path="/film" component={FilmList}/>
              {/* <Route path="/addpost" component={AddFilm}/>
              <Route path="/allposts" component={film}/> */}
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
