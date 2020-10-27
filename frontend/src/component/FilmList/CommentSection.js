import React, { Component } from 'react';




class Comments extends Component {
    state = {  }

    
    render() { 
        console.log(this.props)
      
       console.log(this.props.comments)
        return ( 
            <div>
                comments
                {/* <div>{this.props.comments.comment}</div> */}
                <div>{this.props.comments.createdAt}</div>
            </div>
         );
    }
}
 
export default Comments;