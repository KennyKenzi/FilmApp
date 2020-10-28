import React, { Component } from 'react';
import apiCalls from '../../config/api'



class Comments extends Component {
    state = {  }

    componentDidMount=async()=>{
        await apiCalls.getCommentUser(this.props.data.userID)
        .then((res)=>{
            this.setState({
                commentUser: res.data[0]
            })
            
        })
    }

    
    
    render() { 
        console.log(this.state.commentUser)
        return ( 
            <div style={{width:'95%', display:'inline-block', borderRadius:20, backgroundColor:'white', marginBottom:10}}>
                <p>{this.props.data.comment}</p>
                <div style={{fontSize:'60%'}}> 
                    {/* {this.state.commentUser? <p style={{marginBottom:0}}>-{this.state.commentUser.firstName}</p>: ""} */}
                    <p style={{marginBottom:0}}>{this.props.data.createdAt.slice(0,10)+' '+ this.props.data.createdAt.slice(11,16)}</p>  
                </div>
                
            </div>
         );
    }
}
 
export default Comments;