import React, { Component } from 'react';
// import {BroswerRoute as Route , Switch, Link , Redirect, Router} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Pages
import App from '../App'
import TaskList from './taskList'

class NavBar extends Component {
 
  render() { 
    const navStyle ={
      color: 'white'
  
    };
    return (
    <Router>  
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
       
          <button class="btn btn-outline-success" type="button">
            <Link style={navStyle}
            to="/home">Home</Link>
            </button>

          </li>
         
        </ul>
      </div>
    </nav>


      <Switch>
      <Route exact path="/home" component ={App}></Route>
   
      </Switch>
    </Router>
  
  
  );
  }
}
 
export default NavBar
