import React, { useContext } from 'react';
import logo from '../../Logo.png';
import { userContext } from '../../App';
const Head = () => {
    const [loggedIn,setLoggedIn] = useContext(userContext);
    return (
        
            <div className="container">
        <nav className="navbar navbar-light bg-light">
                      <a href='/#' className="navbar-brand"><img className="logo" src={logo} alt="" srcset=""/></a>
                      <button className="btn btn primary" onClick={()=>setLoggedIn({})} >Sign Out</button>
        </nav>  
        </div>
    );
};

export default Head;