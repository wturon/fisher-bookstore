import React, { Component } from "react";
import "./App.css";
import {Navbar , Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";  
import Routes from "./Routes";

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">Fisher Bookstore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbars-nav" />
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem>
              <Nav.Link href="./Books">Books</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="./Authors">Authors</Nav.Link>
            </NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}