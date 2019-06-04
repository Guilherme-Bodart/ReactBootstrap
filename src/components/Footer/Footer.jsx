import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Navbar>
          <Navbar.Brand className="copyright" href="#pablo">Home</Navbar.Brand>
          <Navbar.Brand className="copyright" href="#pablo">Company</Navbar.Brand>
          <Navbar.Brand className="copyright" href="#pablo">Portfolio</Navbar.Brand>
          <Navbar.Brand className="copyright" href="#pablo">Blog</Navbar.Brand>
                         
          <p className="copyright ml-auto">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.creative-tim.com?ref=lbr-footer">
              Creative Tim
            </a>
            , made with love for a better web
          </p>
          </Navbar>
        </Container>
      </footer>
    );
  }
}

export default Footer;
