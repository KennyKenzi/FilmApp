import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class FilmSection extends Component {
    state = {  }



    render() { 
        
        return ( 
            <div style={{marginBottom:50}}>
                 {/* <h1>Each Film is here</h1> */}
                 <div style={{display: "-webkit-inline-box"}}>
                  <h2 style={{marginRight:10}}>{this.props.data.name} </h2>
                  
                   <Link to={{pathname:"/viewfilm/" + this.props.data.name, state: this.props.data}} > <button type="button" className="btn btn-light" onClick={this.viewMore}>View More</button></Link>  
                 </div>
                 <h5>{this.props.data.releaseDate.slice(0,10)}</h5>
                <p>{this.props.data.description}</p> 

            </div>

         );
    }
}
 
export default FilmSection;