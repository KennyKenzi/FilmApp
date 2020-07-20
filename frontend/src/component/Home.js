import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


class Home extends Component {
    state = { 
        redirect: '/films'
     }
    render() { 

        if (this.state.redirect) {
            return <Redirect to='/films' />
          }
        return ( 
        <div>Shouldn't be here</div>

         );
    }
}
 
export default Home;