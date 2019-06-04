import React, { Component } from "react";
import { Navbar,Button,FormControl,Form, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class AdminNavbarLinks extends Component {
  render() {
    
    return (
      <div>
        <Navbar bsPrefix="navbar" bg="dark" variant="dark">
        <Navbar.Brand className='logo' href="#home">MPT-Devices</Navbar.Brand>
        
        <Nav className="ml-auto" bsPrefix="navbar-expand">   
        <tr><Nav.Link  href="#home">Home</Nav.Link></tr>
        <tr><Nav.Link href="#features">Features</Nav.Link></tr>
        <tr><Nav.Link href="#pricing">Pricing</Nav.Link></tr>      
        </Nav>
       
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>        
        <tr><NavLink to={"/admin/login"} >
          <Button
          variant="outline-primary"
                >
          Sair</Button></NavLink></tr>  
    </Navbar>
      </div>
    );
  }
}

export default AdminNavbarLinks;
