import React, { Component } from 'react'
import {Nav,Navbar,Container } from 'react-bootstrap'

export class Navbar1 extends Component {
    render() {
        return (
          <Container>
            <Navbar collapseOnSelect   expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src="../images/bpk_logo.PNG" alt="img" />SHOP</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      <Nav.Link href="/" to="/">Home</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="/contact" to="/contact">Contact</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link><i className="fa fa-search"></i></Nav.Link>
      <Nav.Link><i className="fa fa-shopping-cart"></i></Nav.Link>
      <Nav.Link><i className="fa fa-bars"></i></Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
  </Container>

        )
    }
}

export default Navbar1
