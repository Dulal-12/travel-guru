import React from 'react';
import './Login.css';
const Login = () => {

    const handleFieldInput = (e)=>{
       
        if(e.target.name === "email"){
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            
        }
        if(e.target.name === "password"){
            const isPasswordValid = (e.target.value).length>6 && ( /[a-z]\d|\d[a-z]/i).test( e.target.value);
        }
        
    }
   
    return (
        <div>
             <form className="description">
                 <h1 style={{ fontFamily: 'Satisfy'}}>Login Form</h1>
                        <p>Email :</p>
                        <input type="email" name="email" onBlur={ handleFieldInput}id="email" placeholder="Useremail"/>
                        <br/>
                        <br/>
                        <p>Password:</p>
                        <input type="password" name="password" onBlur={ handleFieldInput} id="password" placeholder="Userpassword"/>
                        <br/>
                        <br/>
                        <input type="submit" className="btn btn-primary" value="Submit"/>
              </form>
        </div>
    );
};

export default Login;