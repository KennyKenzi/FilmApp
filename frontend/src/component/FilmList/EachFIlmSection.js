import React, { Component } from 'react';



class FilmSection extends Component {
    state = {  }


    render() { 
        return ( 
            <div>
                 <h1>Each Film is here</h1>
                <p>{this.props.data.name}</p>

            </div>

         );
    }
}
 
export default FilmSection;