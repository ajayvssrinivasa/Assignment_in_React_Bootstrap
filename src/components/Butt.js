import React, { Component } from 'react'
import {Container,Button,Row,Col} from 'react-bootstrap'
export class Butt extends Component {
    render() {
        return (
           <Container>
               <Row>
                   <Col md={4}>
                <Button variant="warning"  size="lg"><i class="fa fa-plane">   FREE SHIPPING WORLD WIDE</i></Button></Col>
                <Col md={4}>
                <Button variant="danger"  size="lg"><i class="fa fa-refresh">   100% - MONEY BACK-48 HOURES</i></Button></Col>
                <Col md={4}>
                <Button variant="success" size="lg"><i class="fa fa-dribble">  24/7 ONLINE CUSTOMER SUPPORT</i></Button></Col>
                </Row>
           </Container>
        )
    }
}

export default Butt

