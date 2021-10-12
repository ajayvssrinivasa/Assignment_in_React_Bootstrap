import React, { Component } from 'react'
import { Carousel,Button, Container } from 'react-bootstrap';
export class Header1 extends Component {
    render() {
        return (
          <Container>
            <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/image4.jpg"
                alt="First slide" height="400px"
              />
              <Carousel.Caption>
                <h3>The world of extrem sports</h3>
                <p>SAVE 20% ON ALL PRODUCTS</p>
                <Button variant="success">Shop now</Button>{' '}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/image2.jpg"
                alt="Second slide"  height="400px"
              />
          
              <Carousel.Caption>
              <h3>The world of extrem sports</h3>
                <p>SAVE 20% ON ALL PRODUCTS</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/image3.jpg"
                alt="Third slide"  height="400px"
              />
          
              <Carousel.Caption>
              <h3>The world of extrem sports</h3>
                <p>SAVE 20% ON ALL PRODUCTS</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Container>
        )
    }
}

export default Header1;
