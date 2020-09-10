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
    return (   <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
       
          <button class="btn btn-outline-success" type="button">
            <Link to="/">Home</Link>
            </button>

          </li>
          {/* <li class="nav-item">
             <button class="btn btn-outline-success" type="button">
            <Link to="/taskList">TaskList</Link>
            </button>

          </li> */}
        </ul>
      </div>
    </nav>
      <Switch>
      <Route exact path="/" component ={App}></Route>
      {/* <Route exact path="/taskList" component ={TaskList}></Route> */}

      </Switch>
    </Router>
  
  
    // <nav className="navbar navbar-light bg-light">
    //   <a className="navbar-brand" href="#">
    // Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    // </a>
    // </nav>
  
  
  );
  }
}
 
export default NavBar
// ;

// //Stateless Functional Component
// const NavBar = ({ totalCounters }) =>{
//   return ( 
  
   
//   );
// };


// export default NavBar
// ;