import React, { useContext } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import hotel1 from'../../Image/Rectangle 26.png';
import hotel2 from'../../Image/Rectangle 27.png';
import logo from '../../Logo.png';
import './BookingPlace.css';
import { userContext } from '../../App';
import { useParams } from 'react-router-dom';
import placeImg from '../Header/fakeData';
import StarRateIcon from '@material-ui/icons/StarRate';
const BookingPlace = () => {

    const [loggedIn,setLoggedIn] = useContext(userContext);
    
    const {id} = useParams();
    const data = placeImg.find(element=>element.id === parseInt(id));
    const {name} = data;
    return (
        <div >
            
        <div className="top">
            <h1>Welcome {name}</h1>
        </div>
        <div className="row hotel">
            <div className="col-md-2 col-sm-4 ">
                <img src={hotel1} alt="" srcset="" className="img" />
            </div>
            <div className="col-md-4 col-sm-4 hotel-detail">
                <h3>Light bright airy stylish apt & safe peaceful stay</h3>
                <p>4 Guests 2 bedrooms 2 beds 2 baths wifi air condition kitchen</p>
                <present> <StarRateIcon style={{color:'yellow'}}/><StarRateIcon style={{color:'yellow'}}/><StarRateIcon style={{color:'yellow'}}/>4.9(20)  $34/night $167/total</present>
            </div>
            </div>

            <div className="row hotel">
            <div className="col-md-2 col-sm-4 ">
                <img src={hotel2} alt="" srcset="" className="img" />
            </div>
            <div className="col-md-4 col-sm-4 hotel-detail">
                <h3>Apartment in Lost Paronoma</h3>
                <p>4 Guests 2 bedrooms 2 beds 2 baths wifi air condition kitchen</p>
                <p>Cancellation fexibility available</p>
                <present><StarRateIcon style={{color:'yellow'}}/><StarRateIcon style={{color:'yellow'}}/> 4.8(10)  $54/night $167/total</present>
            </div>
            </div>
    
        </div>
    );
};

export default BookingPlace;