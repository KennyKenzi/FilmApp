import React, { Component } from "react";



export default class PopUp extends Component {

  handleClick = () => {

    this.props.toggle();
    //this.style("none")
  };



render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close"  onClick={this.handleClick}>&times;  testing testing  </span>
     <p>I'm A Pop Up!!!</p>
    </div>
   </div>
  );
 }
}