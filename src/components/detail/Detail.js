import React from 'react';
import { useParams } from 'react-router-dom';
import placeImg from '../Header/fakeData';
import logo from '../../Logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';

const Detail = () => {
    //using Link and id
    const {id} = useParams();
    const data = placeImg.find(element=>element.id === parseInt(id));
    const {name,img,description} = data;

    return (
        //Using Navbar using bootstrap
        <div className="container">
           <nav className="navbar navbar-dark bg-light " >
                  <a href='/#' className="navbar-brand"><img className="logo" src={logo} alt="" srcset=""/></a>
                 <form className="form-inline">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                 </form>
        </nav>  

        {/* description and form  */}
        <div className="row">
                    <div className="col-md-4 description">
                    <h1 className="text" style={{color:'green'}}>{name}</h1>
                        <h3 className="text ">{description}</h3>
                    </div>
           <div className="mcol-md-6">
               <form className="description">
                        <p>Origin :</p>
                        <input type="text" placeholder="Enter your origin"/>
                        <br/>
                        <br/>
                        <p>Destinarion :</p>
                        <input type="text" placeholder="Enter your destination"/>
                        <br/>
                        <br/>
                        <p>From &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To :</p>
                        <input type="date"/><input type="date"/>
                        <button className="btn btn-primary">Start Booking</button>
              </form>
           </div>
           </div>
           </div>
 
           
        
    );
};

export default Detail;