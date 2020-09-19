import React, { useState, useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    //usestate for google and facebook
    const [detail,setDetail] = useState({
        isSignIn : false,
    })
    const [fbDetail,setfbDetail] = useState({
        isSignIn : false,
    })

    const [user,setUser] = useState({
        email:'',
        password:'',
        name:'',
        error:'',
        isValid:false,
        success:'',
    })

    const [newUser,setNewUser] = useState(false);
    const [loggedIn,setLoggedIn] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

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
       
        let isValid = true;
        if(e.target.name === "email")
        {
             isValid = /\S+@\S+\.\S+/.test(e.target.value);
            
        }
        if(e.target.name === "password")
        {
             isValid = (e.target.value).length>6 && ( /[a-z]\d|\d[a-z]/i).test( e.target.value);
        }
        if(isValid){
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
        
    }
    const handleSubmit = (e)=>{
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res=>{
                const newUser = {...user};
                newUser.error = '';
                newUser.success = "Successful Your Signing Process";
                newUser.isValid=true;
                setUser(newUser);
                updateName(user.name);
            })
            .catch(error=> {
                const newUser = {...user};
                newUser.error = error.message;
                newUser.success = '';
                newUser.isValid=false;
                setUser(newUser);
                
                
              });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res=>{
                const newUser = {...user};
                newUser.error = '';
                newUser.success = "Successful Your Signing Process";
                newUser.isValid=true;
                setUser(newUser);
                setLoggedIn(newUser);
                history.push(from);
            })
            .catch(error=> {
                const newUser = {...user};
                newUser.error = error.message;
                newUser.success = '';
                newUser.isValid=false;
                setUser(newUser);
                
                
              });
        }


        e.preventDefault();
    }
    const updateName = name=>{
        var user = firebase.auth().currentUser;

                user.updateProfile({
                name: name,
                }).then(function() {
                // Update successful.
                }).catch(function(error) {
                // An error happened.
                });
    }
   
    return (
        <div >
             <form className="description" onSubmit={handleSubmit}>
                 <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
                 <label htmlFor="newUser">Sign Up</label>
                 <h1 style={{ fontFamily: 'Satisfy'}}>Login Form</h1>
                       {newUser&&
                        <input type="text" name="text" onBlur={ handleFieldInput}id="text" placeholder="Username" required/>}
                        <p>Email :</p>
                        <input type="email" name="email" onBlur={ handleFieldInput}id="email" placeholder="Useremail" required/>
                        <br/>
                        <br/>
                        <p>Password:</p>
                        <input type="password" name="password" onBlur={ handleFieldInput} id="password" placeholder="Userpassword" required/>
                        <br/>
                        <br/>
                       {newUser ?<input type="submit" className="btn btn-primary"  value="Sign Up"/>:<input type="submit" className="btn btn-primary"  value="Sign in"/>}
                        {user.isValid?<p style={{fontSize:'18px'}}>{user.success}</p>:<p style={{fontSize:'18px'}}>{user.error}</p>}
                        
              </form>
             
              <div>
                  
              <EmailIcon style={{margin:"0px 730px",color:"blue",}}/>{
                  detail.isSignIn?<button className="btn btn-primary btn1"  onClick={hadleGoogleSignOut}>Sign Out </button>:
                  <button className="btn btn-primary btn1 "   onClick={hadleGoogleSignIn}>Sign In </button>
                  }<br/><br/>
                <FacebookIcon style={{margin:"0px 730px",color:"blue",}}/> {fbDetail.isSignIn?<button className="btn btn-primary btn1"  onClick={handleFbSignOut}> Sign Out</button>:
                  <button className="btn btn-primary btn1"  onClick={handleFbSignIn}>Sign In</button>}
              </div>
                
        </div>
    );
};

export default Login;