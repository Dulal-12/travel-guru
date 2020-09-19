import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Detail from './components/detail/Detail';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookingPlace from './components/BookingPlace/BookingPlace';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Head from './components/Head/Head';
export const userContext = createContext();


function App() {

  const [loggedIn,setLoggedIn] = useState({});
  return (
    <userContext.Provider value={[loggedIn,setLoggedIn]}>
  
    <Router>
      <Head></Head>
   
          <Switch>
                 <Route exact path='/'>
                       <Header/>
                 </Route>

                 <Route path = '/detail/:id'>
                       <Detail/>
                 </Route>

                 <PrivateRoute path = '/place/:id'>
                        <BookingPlace/>
                 </PrivateRoute>
                 <Route path="/Login">
                     <Login/>
                 </Route>

                 <Route path="*">
                     <Error/>
                 </Route>

            </Switch>
           
    </Router>
    
    </userContext.Provider>
  )
}
export default App;
