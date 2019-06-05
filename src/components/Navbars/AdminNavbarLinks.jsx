import React, { Component } from "react";
import { Navbar,Button,FormControl,Form, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class AdminNavbarLinks extends Component {
  render() {
  
    return (
      <div>
        <Navbar bsPrefix="navbar">
          
        <Navbar.Brand className='logo' href="#home">MPT-Devices</Navbar.Brand>
   
        
        <Nav className="ml-auto">   
        <Nav.Link><tr className="menu" href="#home">Home</tr></Nav.Link>
        <Nav.Link><tr className="menu" href="#features">Features</tr></Nav.Link>
        <Nav.Link><tr className="menu" href="#pricing">Pricing</tr></Nav.Link>    
        </Nav>
       
        <Form inline>
            <FormControl size="sm" type="text" placeholder="Search" />
            <Button variant="outline-info">Procurar</Button>
        </Form>        
        <NavLink to={"/admin/login"} >
          <Button
          variant="outline-primary"
          >Deslogar
          </Button></NavLink>  
    </Navbar>
      </div>
    );
  }
}

export default AdminNavbarLinks;
