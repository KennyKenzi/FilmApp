import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import placeholderimage from '../../placeholder-image.png'
import moment from 'moment'
import apiCalls from '../../config/api'

import "react-datepicker/dist/react-datepicker.css";

export default class AddFIlmPopUp extends Component {

  
    state={
        imagedisplayed: placeholderimage,
        ticket: "",
        countries: [],
        genresList:[
            {name:"Comedy", id:1},
            {name:"Fantasy", id:2},
            {name:"Crime", id:3},
            {name:"Drama", id:4},
            {name:"Music", id:5},
            {name:"Adventure", id:6},
            {name:"History", id:7},
            {name:"Thriller", id:8},
            {name:"Animation", id:9},
            {name:"Family", id:10},
            {name:"Mystery", id:11},
            {name:"Biography", id:12},
            {name:"Action", id:13},
            {name:"Film-Noir", id:14},
            {name:"Romance", id:15},
            {name:"Sci-Fi", id:16},
            {name:"War", id:17},
            {name:"Western", id:18},
            {name:"Horror", id:19},
            {name:"Musical", id:20},
            {name:"Sport", id:21}
        ]
    }

    componentDidMount=async()=>{
       await apiCalls.getCountries()
        .then((res)=>{
            this.setState({countries: res.data})
        })
    }

    onChange=(e)=>{
        if(e.target.value || e.target.value ===""){
            if(e.target.name === 'rating'){
                var tag = parseInt(e.target.value)
                console.log(e.target.value)
                console.log(tag)
                if(tag < 1 || tag > 5 || isNaN(e.target.value)){
                    console.log('t1')
                    this.setState({ [e.target.name] : ""})
                }else{
                    console.log('t2')
                    this.setState({ [e.target.name] : tag})

                }
            }else{
                console.log('t3')
                this.setState({ [e.target.name] : e.target.value}) 

            }
       }
       if (e.target.files){
        let image = e.target.files[0];

        this.setState({
            file: image,
            imagedisplayed:URL.createObjectURL(image),
            imageLabel: e.target.value
        }) 
    }
    }

    handleDateSelect=(e)=>{

     this.setState({date: e})
    }

    handleClick = () => {
    this.props.toggle();
    };


    onSubmit=async(e)=>{
        e.preventDefault()

     const formBody = new FormData()
      
        formBody.append('name',this.state.name);
        formBody.append('description', this.state.description)
        formBody.append('releaseDate', this.state.date)
        formBody.append('rating',this.state.rating)
        formBody.append('ticketPrice',this.state.price)
        formBody.append('country',this.state.country)
        formBody.append('genre',this.state.genre)  
        formBody.append('file',this.state.file)
      console.log(this.state.file)
      console.log(formBody)
      await apiCalls.createFilm(formBody,{'Content-Type':'multipart/form-data'})
      .then(()=>{
          this.handleClick()

            // this.setState({
            //     name: "",
            //     description: "",
            //     date: "",
            //     rating: "",
            //     price: "",
            //     country: "",
            //     genre: "",
            //     imageLabel: "",
            //     imagedisplayed:placeholderimage
            // })
      })

      
    }


    display=()=>{
      if(this.props.info === "addfilm"){
        return(
            <div>
                <form className="formPost" onSubmit={this.onSubmit} encType="multipart/form-data">
                    <div className="form-row overflow-auto">
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
                            <DatePicker
                                selected={this.state.date}
                               // onSelect={this.handleDateSelect} //when day is clicked
                                onChange={this.handleDateSelect} //only when value has changed
/>
                        </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group col-md-1"></div>
                        <div className="form-group col-md-5">
                            <label htmlFor="rating">Rating<div style={{fontSize: 10, display:"contents"}}>(rate from "1" to "5" only)</div></label>
                            
                            <input type="number" className="form-control" 
                              id="rating"
                              value={this.state.rating}
                              name="rating"
                              onChange={this.onChange}/>
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="price">Ticket Price</label>
                            <input type="number" className="form-control"
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
                                {
                                  this.state.genresList.map(el=>{
                                  return <option key={el.id}>{el.name}</option>
                                  })
                              }
                            </select>
                        </div>
                        <div className="form-group col-md-5">
                        <label htmlFor="country">Country</label>
                        <select id="country" className="form-control"
                            value={this.state.country}
                            name="country"
                            onChange={this.onChange}>
                                <option selected>Choose...</option>
                              {
                                  this.state.countries.map(el=>{
                                  return <option key={el.code}>{el.name}</option>
                                  })
                              }

                        </select>
                        </div>
                    </div>

                    <div>  
                        <div className="file-field form-group">
                            <div className="z-depth-1-half mb-4">
                                <img src={this.state.imagedisplayed} className="img-fluid avatar-pic" alt={placeholderimage}/>
                            </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-mdb-color btn-rounded float-left">
                                {/* <span>Choose file</span> */}
                                <input type="file" className="form-control-file"  name="file" value={this.state.imageLabel} onChange={this.onChange}></input>
                            </div>
                        </div>
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