import React, { Component } from 'react'
import { Container,Carousel} from 'react-bootstrap'
export class Bottom extends Component {
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
              
                        <img src="../images/sp2.jpg" class="rounded-circle"width="100px" height="100px" alt="img"/> 
                <h4 class="text-center text-dark"><i><q>Whenever you see a successful person you only see the public glories, 
                   never the private sacrifices to reach them. 
               </q></i></h4> <h3 class="text-center text-white"> Vaibhav Shah</h3> <p class="text-center"> motivational speaker</p> 
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/image2.jpg"
                alt="Second slide"  height="400px"
              />
          
              <Carousel.Caption>
              <img src="../images/sp2.jpg" class="rounded-circle" width="100px" height="100px"  alt="img"/> 
              <h4 class="text-center text-dark"><i><q>Try not to become a person of success, but rather try to become a person of value. 
               </q></i></h4>    <h3 class="text-center text-white"> Albert Einstein</h3> <p class="text-center"> motivational speaker</p> 
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../images/image3.jpg"
                alt="Third slide"  height="400px"
              />
          
              <Carousel.Caption>
              <img src="../images/sp2.jpg" class="rounded-circle"  width="100px" height="100px" alt="img" /> 
                <h4 class="text-center text-dark"><i><q>A successful man is one who can lay a firm foundation with the bricks others have thrown at him.
               </q></i></h4>     <h3 class="text-center text-white">David Brinkley </h3> <p class="text-center"> motivational speaker</p> 
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
           </Container>
        )
    }
}

export default Bottom
