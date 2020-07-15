import React, { Component } from 'react';
import FilmSection from './EachFIlmSection'




class FilmListPage extends Component {
    state = { 

        testArray: [1, 2, 3, 4, 5, 6, 7, 8]
     }


    render() { 
        return ( 
            <div>
            <h1>
                Film List
            </h1>
            {this.state.testArray.forEach(element => {
                return<div><FilmSection/></div>
            })}
            </div>

         );
    }
}
 
export default FilmListPage;