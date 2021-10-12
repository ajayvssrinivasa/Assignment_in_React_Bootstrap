import React, { Component } from 'react'
import { Container,Nav } from 'react-bootstrap'
export class Features extends Component {
    render() {
        return (
            <Container>
                 <h1 class="text-center">Featured collections</h1>
            <p class="text-center">------------o  @@@@@@@   o-----------</p>
            <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">New Arrival</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/">Clothing</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/">Hats</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/" >
        Shoes
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/">
        Bags
      </Nav.Link>
    </Nav.Item>
  </Nav>
            </Container>
           
        )
    }
}

export default Features
