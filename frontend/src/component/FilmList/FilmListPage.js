import React, { Component } from 'react';
import FilmSection from './EachFIlmSection'
import Navbar from '../Navbar'





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
            <p>
                test
                {this.state.testArray.map(element => {
                        return<div><FilmSection/></div>
                    })}
            </p>

            </div>

         );
    }
}
 
export default FilmListPage;