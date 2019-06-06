import React, { Component } from "react";
import { Container,Button,Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Typography extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuário:</Form.Label>
              <Form.Control type="email" placeholder="Usuário do Windows" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha:</Form.Label>
              <Form.Control type="password" placeholder="Senha do Windows" />
            </Form.Group>
            <NavLink
            to={"/admin/painelControle"}>
            <Button size="lg" variant="primary" type="submit">
              Enviar
            </Button>           
            </NavLink>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Typography;
