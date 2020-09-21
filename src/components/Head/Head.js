import React, { useContext } from 'react';
import logo from '../../Logo.png';
import { userContext } from '../../App';
import {  Link } from 'react-router-dom';
const Head = () => {
    const [loggedIn,setLoggedIn] = useContext(userContext);
    return (
        
            <div className="container">
        <nav className="navbar navbar-light bg-light">
            <Link to='/#' className="navbar-brand"><img className="logo" src={logo} style={{height:'80px'}} alt="" srcset=""/></Link>
            <button className="btn btn primary" onClick={()=>setLoggedIn({})} >Sign Out</button>
        </nav>  
        </div>
    );
};

export default Head;