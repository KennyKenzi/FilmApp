import React, { Component } from "react";



export default class AddFIlmPopUp extends Component {


    state={
        

    }

    onChange=()=>{
        console.log('changed')
    }

    handleClick = () => {
    this.props.toggle();
    };


    onSubmit=(e)=>{
        e.preventDefault()
      console.log('Film submitted')
    }


    display=()=>{
      if(this.props.info === "addfilm"){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Film Name</label>
                            <input type="text" className="form-control" 
                                id="name" 
                                value ={this.state.name} 
                                name="name" 
                                placeholder="Name"
                                onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1"></div>
                        <div className="form-group col-md-10" >
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" aria-label="With textarea"
                            id="description"
                            value={this.state.description}
                            name="description"
                            onChange={this.onChange}></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-4"></div>
                        <div className="form-group col-md-4">
                            <label htmlFor="date">Release Date</label>
                            <input type="text" className="form-control" 
                              id="date"
                              value={this.state.date}
                              name="date"
                              onChange={this.onChange}/>
                        </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group col-md-1"></div>
                        <div className="form-group col-md-5">
                            <label htmlFor="rating">Rating</label>
                            <input type="text" className="form-control" 
                              id="rating"
                              value={this.state.rating}
                              name="rating"
                              onChange={this.onChange}/>
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="price">Ticket Price</label>
                            <input type="text" className="form-control"
                              id="price"
                              value={this.state.price}
                              name="price"
                              onChange={this.onChange}/>
                        </div>
                    </div>

                    <div className="form-row">  
                    <div className="form-group col-md-1"></div>
                        <div className="form-group col-md-5">
                            <label htmlFor="genre">Genre</label>
                            <select id="genre" className="form-control"
                            value={this.state.genre}
                            name="genre"
                            onChange={this.onChange}>
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-5">
                        <label htmlFor="country">Country</label>
                        <select id="country" className="form-control"
                            value={this.state.country}
                            name="country"
                            onChange={this.onChange}>
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                    </div>
                    <div style={{display:'inline-block', marginBottom:10}}>
                     <button type="submit" className="btn btn-primary" >Add</button>   
                    </div>
                    
                    {/* </div> */}
                </form>
            </div>
        )
      }else return(
          <div>
              <p>Please sign in to add new film</p>
          </div>
    )
      
    }




render() {
  return (
   <div className="modal" style={{display: "block"}}>
    <hr/>
     <div className="modal_content">
     {this.display()} 
     <div className="close float-none"  onClick={this.handleClick}> <button style={{backgroundColor: "black"}}>&times;</button></div>
    </div>
   </div>
  );
 }
}