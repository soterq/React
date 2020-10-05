import React, { Component } from 'react';
import { Nav,Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";


class NavigationBar extends Component {
  render() { 
    const navStyle ={
      color: 'black'
  
    };
    return (
        <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/tasklist">Task List</Nav.Link>
      <Nav.Link href="/spender">Spender</Nav.Link>
      <Nav.Link href="/taskForm">TaskForm</Nav.Link>
    </Nav>
  </Navbar>
        </div>);
  }
}
 
export default NavigationBar
