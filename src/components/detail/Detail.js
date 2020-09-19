import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import placeImg from '../Header/fakeData';
import logo from '../../Logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';

const Detail = () => {
    //using Link and id
    const {id} = useParams();
    const data = placeImg.find(element=>element.id === parseInt(id));
    const {name,img,description} = data;

    const [information,setInformation] = useState({
        origin:'',
        destination:'',
        date:'',
        date1:'',
        isRight:false,
    })

    const handleBlur = (e)=>{
        let isValid ;
        if(e.target.name === "origin"){
           isValid = /^[a-z\d]{5,12}$/i.test(e.target.value);
        }
        if(e.target.name === "destination"){
            isValid = /^[a-z\d]{5,12}$/i.test(e.target.value);
         }
         if(e.target.name === "date"){
             isValid = !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e.target.value);
         }
         if(e.target.name === "date1"){
            isValid = !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e.target.value);
        }
        if(isValid){
            const newInformation = {...information};
            newInformation[e.target.name] = e.target.value;
            setInformation(newInformation);
        }
    }
    const handleSubmit = (e)=>{
        console.log(information)
        if(information.origin && information.destination && information.date && information.date1){
            const newInformation = {...information};
            newInformation.isRight = true;
            setInformation(newInformation);
        }
        e.preventDefault();
    }
    
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
        <div >
                   
                    <h1 className="text" style={{color:'green'}}>{name}</h1>
                        <h3 className="text ">{description}</h3>
                    
         
               <form className="form" onSubmit={handleSubmit}>
                        <p>Origin :</p>
                        <input type="text " onBlur={handleBlur} className="field1" name="origin" placeholder="Enter your origin" required/>
                        <br/>
                        <br/>
                        <p>Destination :</p>
                        <input type="text" className="field1" onBlur={handleBlur} name="destination" placeholder="Enter your destination" required/>
                        <br/>
                        <br/>
                        <p>From &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To :</p>
                        <input type="date" onBlur={handleBlur}  className="field1" name="date" required/><input type="date" name="date1"className="field1" onBlur={handleBlur}  required/ ><br/><br/>
                        <input type="submit" className="btn btn-primary"  value="Submit"/><br/><br/>
                       { information.isRight && <Link to={`/place`}><button className="btn btn-primary">Start Booking</button></Link>}
              </form>
           </div>
          </div>
           
 
           
        
    );
};

export default Detail;