import React, { useState } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    //usestate for google and facebook
    const [detail,setDetail] = useState({
        isSignIn : false,
    })
    const [fbDetail,setfbDetail] = useState({
        isSignIn : false,
    })

//firebase Provider
    const provider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();

    const hadleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(provider)
        .then(result=> {
           const newDetail = {...detail};
           newDetail.isSignIn = true;
           setDetail(newDetail);
        })}

    const hadleGoogleSignOut = ()=>{
        const newDetail = {...detail};
        newDetail.isSignIn = false;
        setDetail(newDetail);}



   const handleFbSignIn =()=>{
     firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        const newDetail = {...fbDetail};
        newDetail.isSignIn = true;
        setfbDetail(newDetail);
        console.log(result.user)
        })
   }

    const handleFbSignOut = ()=>{
       const newDetail = {...fbDetail};
       newDetail.isSignIn = false;
       setfbDetail(newDetail);
   }

     

    const handleFieldInput = (e)=>{
       
        if(e.target.name === "email")
        {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            
        }
        if(e.target.name === "password")
        {
            const isPasswordValid = (e.target.value).length>6 && ( /[a-z]\d|\d[a-z]/i).test( e.target.value);
        }
        
    }
   
    return (
        <div >
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
             
              <div>
                  {
                  detail.isSignIn?<button className="btn1"  onClick={hadleGoogleSignOut}>Sign Out </button>:
                  <button className="btn1"   onClick={hadleGoogleSignIn}>Sign In </button>
                  }<br/><br/>
                  {fbDetail.isSignIn?<button className="btn1"   onClick={handleFbSignOut}>Sign Out</button>:
                  <button className="btn1"  onClick={handleFbSignIn}>Sign In</button>}
              </div>
            
        </div>
    );
};

export default Login;