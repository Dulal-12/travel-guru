import React from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';

const Booking = (props) => {
    const {name,img,description,id} = props.place;

    return (
        <div className="booking container">
                <div className="card mb-3" >
                <div className="text-center">
                        <img src={img} className="rounded img-style" alt="..."/>
                </div>
                <div className="card-body text-style">
                        <h2 className="card-title text">{name}</h2>
                        <p className="card-text text">{description}</p>
                      <Link to ={`/detail/${id}`}>  <button className="btn btn-primary">Booking</button></Link>
                </div>
                </div>
        </div>
    );
};
export default Booking;