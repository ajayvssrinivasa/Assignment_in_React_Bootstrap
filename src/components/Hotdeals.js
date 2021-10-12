import React, { Component } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
export class Hotdeals extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
            <img src="../images/ce31.jpg" class="ml" width="500px" height="600px" alt="img" />
            </Col>
            <Col>
            <Container>
            <h6 > HOT DEALS</h6><br/>
            <Row>
                <Col sm={2}>
                    <button type="button" class="btn btn-primary rounded-circle "></button>
                </Col>
                <Col sm={2}>
                    <button type="button" class="btn btn-warning rounded-circle"></button>
                </Col>
                <Col sm={2}>
                    <button type="button" class="btn btn-dark rounded-circle"></button>
                </Col>
            </Row>
            <br/>
           <h2 >TOP TEXTILES EVER </h2><br/>
            <img src="../images/star.jpg"   width="200px" height="100px" alt="stars"/><br/>
            <h3 class="text-danger">$230.00</h3><br/>
           <p>
            A shopping cart on an online retailer's site is a piece of software that facilitates the purchase of a product or service. 
            It accepts the customer's payment and organizes the distribution of that information to the merchant, 
            payment processor and other parties.
           </p>
        
           <div class="row ">
               <label>&nbsp;&nbsp;&nbsp;&nbsp;Color&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <Col sm={2}>
                <button type="button" class="btn btn-primary rounded-circle"></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-warning rounded-circle"></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-dark rounded-circle"></button>
            </Col>
               
           </div>
           <br/>
           <div class="btn-toolbar" role="toolbar">
            <div class="btn-group mr-2" role="group" ><label> Size &nbsp;&nbsp;&nbsp;</label>
              <button type="button" class="btn btn-light">S</button>
              <button type="button" class="btn btn-light">M</button>
              <button type="button" class="btn btn-light">L</button>
              <button type="button" class="btn btn-light">XL</button>
            </div>
            </div><br/>
            <Row>
            <Col sm={2}>
                <button type="button" class="btn btn-primary bou1"><h2>25</h2>
                <i>days</i></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-primary"><h2>14</h2><i>hours</i></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-primary"><h2>57</h2><i>Mintues</i></button>
            </Col>
            <Col sm={2}>
                <button type="button" class="btn btn-primary"><h2>42</h2><i>Seconds</i></button>
            </Col>
        </Row>
       </Container>
               </Col> </Row>
        </Container>
        )
    }
}

export default Hotdeals
