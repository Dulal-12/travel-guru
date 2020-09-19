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
    {
      placeImg.map(place=><Booking place={place} ></Booking>)
    }
   
  </>
  )
};
export default Header; 