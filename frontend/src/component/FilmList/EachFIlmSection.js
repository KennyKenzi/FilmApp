import React from 'react';
import { Link } from 'react-router-dom';



const FilmSection = props=> {

        console.log(props.data)
        const {name, description}= props.data

        return ( 
            props.data ? 
            <div style={{marginBottom:50}}>
                    {/* <h1>Each Film is here</h1> */}
                    <div style={{display: "-webkit-inline-box"}}>
                    <h2 style={{marginRight:10}}>{name} </h2>
                    
                    <Link to={{pathname:"/viewfilm/" + name, state: props.data}} > <button type="button" className="btn btn-light" >View More</button></Link>  
                    </div>
                    {/* <h5>{this.props.data.releaseDate.slice(0,10)}</h5> */}
                <p>{description}</p> 
                </div>
                :
                <div>Test</div> 
                
         );
}
 
export default FilmSection;