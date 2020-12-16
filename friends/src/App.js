import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login"
import {FriendsList} from "./components/FriendsList"
import {React, useEffect} from 'react'

import {BrowserRouter as Router,Route,Redirect, Switch } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute"



function App() {

  


  return (
    <Router>
        <div className="App">
    <Switch>      
    <Redirect exact from="/" to="/login" />
    <Route exact path= "/login" component={Login}/>
    <PrivateRoute exact path="/friendslist" component={FriendsList} />
    </Switch>
    </div>
    

    </Router>
  );
}

export default App;
