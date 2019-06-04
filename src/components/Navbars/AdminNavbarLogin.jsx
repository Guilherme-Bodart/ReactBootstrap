import React, { Component } from "react";
import { Navbar,Button,FormControl,Form, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class AdminNavbarLogin extends Component {
  render() {
    
    return (
      <div>
        <Navbar bsPrefix="navbar" bg="dark" variant="dark">
        <Navbar.Brand className='logo' href="#home">MPT-Devices</Navbar.Brand>
    </Navbar>
      </div>
    );
  }
}

export default AdminNavbarLogin;
