import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Logo.png';
import './Header.css';
import placeImg from './fakeData';
import Booking from '../Booking/Booking';



const Header = () => {
 
   
  return (
    //Navbar section for travel guru
    <>
    <div className="container">
        <nav className="navbar navbar-light bg-light">
                  <a href='/#' className="navbar-brand"><img className="logo" src={logo} alt="" srcset=""/></a>
                 <form className="form-inline">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 </form>
        </nav>    
   
    {/* As a props pass fakedata */}
    {
      placeImg.map(place=><Booking place={place} ></Booking>)
    }
   
    
     </div>
  </>
  )
};

export default Header; 