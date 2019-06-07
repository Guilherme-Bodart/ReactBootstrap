import React, { Component } from "react";
import { Navbar} from "react-bootstrap";

class AdminNavbarLogin extends Component {
  render() {
    
    return (
      <div>
        <Navbar bsPrefix="navbar">
          <Navbar.Brand className='logo' href="#home">MPT-Devices</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default AdminNavbarLogin;
