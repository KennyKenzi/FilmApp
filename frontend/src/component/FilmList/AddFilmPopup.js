import React, { useState, useContext, useEffect} from "react";
import DatePicker from "react-datepicker";
import placeholderimage from '../../placeholder-image.png'
import apiCalls from '../../config/api'
import data from '../../config/randomData'
import FilmContext from '../../context/films/filmContext'

import "react-datepicker/dist/react-datepicker.css";
import { SET_CURRENT_FILM } from "../../context/types";

const AddFilmPopUp=(props)=> {

    const filmContext = useContext(FilmContext)

    const { countries, genresList, getCountryList, current_add, loading, setCurrentFilm, addFilm} = filmContext

    useEffect(()=>{ 
        (async()=>{  
          await getCountryList()
        })()
        //eslint-disable-next-line
    },[])
   
    const [newFilm, setNewFilm] = useState({
        name: '',
        description: '',
        ticket: '',
        date: '',
        rating: '',
        genre: '',
        country: '',
        imageLabel: '',
        imagedisplayed: placeholderimage
    })

    const {name, description, ticket, date, rating, genre, country, imageLabel, imagedisplayed} = newFilm

    const onChange=(e)=>{
        if(e.target.value || e.target.value ===""){
            if(e.target.name === 'rating'){
                var tag = parseInt(e.target.value)

                if(tag < 1 || tag > 5 || isNaN(e.target.value)){
                    setNewFilm({...newFilm, [e.target.name] : ""})
                }else{
                    setNewFilm({...newFilm, [e.target.name] : tag})
                }
            }else{
                setNewFilm({...newFilm, [e.target.name] : e.target.value}) 
            }
       }
       if (e.target.files){
        let image = e.target.files[0];
        setNewFilm({...newFilm,
            file: image,
            imagedisplayed:URL.createObjectURL(image),
            imageLabel: e.target.value
        }) 
    }
    setCurrentFilm(newFilm)
    }

    const handleDateSelect=(e)=>{
     setNewFilm({...newFilm, date: e})
    }

    const handleClick = () => {
        props.toggle();
    };


    const onSubmit=async(e)=>{
       e.preventDefault()
        addFilm(current_add)

        
     // window.location.reload(false);
    }


 const display=()=>{
      if(props.info === "addfilm"){
        return(
            <div>
                <form className="formPost" onSubmit={onSubmit} encType="multipart/form-data">
                    <div className="form-row overflow-auto">
                        <div className="form-group col-md-3">
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Film Name</label>
                            <input type="text" className="form-control" 
                                id="name" 
                                value ={name} 
                                name="name" 
                                placeholder="Name"
                                onChange={onChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1"></div>
                        <div className="form-group col-md-10" >
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" aria-label="With textarea"
                            id="description"
                            value={description}
                            name="description"
                            onChange={onChange}></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-4"></div>
                        <div className="form-group col-md-4">
                            <label htmlFor="date">Release Date</label>
                            <DatePicker
                                selected={date}
                               // onSelect={this.handleDateSelect} //when day is clicked
                                onChange={handleDateSelect} //only when value has changed
/>
                        </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group col-md-1"></div>
                        <div className="form-group col-md-5">
                            <label htmlFor="rating">Rating<div style={{fontSize: 10, display:"contents"}}>(rate from "1" to "5" only)</div></label>
                            
                            <input type="number" className="form-control" 
                              id="rating"
                              value={rating}
                              name="rating"
                              onChange={onChange}/>
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="price">Ticket Price</label>
                            <input type="number" className="form-control"
                              id="price"
                              value={ticket}
                              name="ticket"
                              onChange={onChange}/>
                        </div>
                    </div>

                    <div className="form-row">  
                    <div className="form-group col-md-1"></div>
                        <div className="form-group col-md-5">
                            <label htmlFor="genre">Genre</label>
                            <select id="genre" className="form-control"
                            value={genre}
                            name="genre"
                            onChange={onChange}>
                                <option selected>Choose...</option>
                                {
                                  genresList.map(el=>{
                                  return <option key={el.id}>{el.name}</option>
                                  })
                              }
                            </select>
                        </div>
                        <div className="form-group col-md-5">
                        <label htmlFor="country">Country</label>
                        <select id="country" className="form-control"
                            value={country}
                            name="country"
                            onChange={onChange}>
                                <option selected>Choose...</option>
                              {
                                  countries.map(el=>{
                                  return <option key={el.code}>{el.name}</option>
                                  })
                              }

                        </select>
                        </div>
                    </div>

                    <div>  
                        <div className="file-field form-group">
                            <div className="z-depth-1-half mb-4">
                                <img src={imagedisplayed} className="img-fluid avatar-pic" alt={placeholderimage}/>
                            </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-mdb-color btn-rounded float-left">
                                {/* <span>Choose file</span> */}
                                <input type="file" className="form-control-file"  name="file" value={imageLabel} onChange={onChange}></input>
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



  return (
   <div className="modal overflow-auto" style={{display: "block"}}>
    {/* <hr/> */}
     <div className="modal_content ">
     {/* {console.log('===',loading, countries)} */}
         {!loading && countries !== null ? display() : ""}
       
     <div className="close float-none"  onClick={handleClick}> <button style={{backgroundColor: "black"}}>&times;</button></div>
    </div>
   </div>
  );
}
export default AddFilmPopUp