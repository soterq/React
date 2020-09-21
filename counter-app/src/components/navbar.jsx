import React, { Component } from 'react';
// import {BroswerRoute as Route , Switch, Link , Redirect, Router} from 'react-router-dom';
import {Link} from "react-router-dom";

import App from '../App'
import TaskList from './taskList'

class NavBar extends Component {
 
  render() { 
    const navStyle ={
      color: 'black'
  
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <h1>Nav Bar</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className ="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <Link style={navStyle}to="/home">
          <li className="nav-item active">
          {/* <button className="btn btn-outline-success" type="button"> */}
            {/* </button> */}
            Home
          </li>
         </Link>
        <Link style={navStyle}to="/tasklist">
          <li className="nav-item active">
          {/* <button className="btn btn-outline-success" type="button"> */}
            {/* </button> */}
            TaskList
          </li>
         </Link>
         <Link style={navStyle}to="/spender">
          <li className="nav-item active">
          {/* <button className="btn btn-outline-success" type="button"> */}
            {/* </button> */}
            Spender
          </li>
         </Link>
         
        </ul>
      </div>
    </nav>
  
  );
  }
}
 
export default NavBar
