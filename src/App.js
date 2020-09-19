import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/detail/Detail';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header></Header>
        </Route>
        <Route path = '/detail/:id'>
          <Detail></Detail>
        </Route>
        <Route path = '/place'>
          <Login></Login>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  
 
 

     
    
  )

}

export default App;
