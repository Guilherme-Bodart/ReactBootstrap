import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import controle from "assets/img/controle-ar.png";


class Icons extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md="12">Ae</Col>
            <Col md="12">Ae</Col>
            <Col md="12">Ae</Col>
            <Col md="12">Ae</Col>
            <Col md="12">Ae</Col>
            <Col md="12">Ae</Col>
            <Col md="12">Ae</Col>
            <Col md={{ offset: 4}}>
              <Image src={controle}  />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Icons;
