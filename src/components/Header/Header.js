import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import placeImg from './fakeData';
import Booking from '../Booking/Booking';

const Header = () => {
 
  return (
   
    <>
    {
      placeImg.map(place=><Booking place={place} ></Booking>)
    }
   
  </>
  )
};
export default Header; 