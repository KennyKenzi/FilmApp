import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import placeholderimage from '../../placeholder-image.png'
import moment from 'moment'
import apiCalls from '../../config/api'
import access from '../../config/accessToken'

import "react-datepicker/dist/react-datepicker.css";
import { AccessTime } from "@material-ui/icons";

export default class AddCommentPopUp extends Component {

  
    state={
       comment: '',

    }

    componentDidMount=async()=>{

    }

    onChange=(e)=>{
        this.setState({ [e.target.name] : e.target.value}) 

    }

    handleClick = () => {
        this.props.toggle();
    };


    onSubmit=async(e)=>{

    e.preventDefault()
    const auth = access.getToken()

     const postBody ={
         comment : this.state.comment,
         createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
         userID: this.props.userID,
         filmID: this.props.filmid
     }

      console.log(postBody)

      await apiCalls.postComment(postBody, auth)
      .then(()=>{
          this.handleClick()
      }, )
        
      
    }


    display=()=>{
      
        return(
            <div>
                <form className="formPost" onSubmit={this.onSubmit} >

                    <div className="form-row">
                        <div className="form-group col-md-1"></div>
                        <div className="form-group col-md-10" >
                            <label htmlFor="comment">Comment</label>
                            <textarea className="form-control" aria-label="With textarea"
                            id="comment"
                            value={this.state.comment}
                            name="comment"
                            onChange={this.onChange}></textarea>
                        </div>
                    </div>

                    
                    <div style={{display:'inline-block', marginBottom:10}}>
                     <button type="submit" className="btn btn-primary" >Add</button>   
                    </div>
                    
                    {/* </div> */}
                </form>
            </div>
        )
      
    }




render() {
  return (
   <div className="modal overflow-auto" style={{display: "block"}}>
    {/* <hr/> */}
     <div className="modal_content ">
     {this.display()} 
     <div className="close float-none"  onClick={this.handleClick}> <button style={{backgroundColor: "black"}}>&times;</button></div>
    </div>
   </div>
  );
 }
}