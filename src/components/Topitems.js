import React, { Component } from 'react'
import json from '../Topsellers.json'
import { Container,Card,Row,Col } from 'react-bootstrap'
import Bestsell from './Bestsell'
import Topitem from './TopItem'
export class Topitems extends Component {
    render() {
        return (
            <Container>
                 <Row>
                     <Col md={4}>
                 <h2>Top sellers</h2>
                {json.topsell.map(pro=>
                
                    <Col md={12}>
                    <Card >
                        <Row>
                            <Col sm={5}>
                               
                    <Card.Img variant="top"  src={`/images/${pro.image}`} width="100px" height="150px"/></Col>
                    <Col>
                    <Card.Body>
                        <Card.Title>{pro.title}</Card.Title>
                        <img src="../images/star.jpg" alt="img" width="50px" height="50px"/>
                        <Card.Text>
                            {pro.text}
                            </Card.Text>
                            <div class="btn-toolbar" role="toolbar">
                    <div class="btn-group mr-2" role="group" >
                      <button type="button" class="btn btn-primary"><i class="fa fa-shopping-cart "></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-heart"></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-eye"></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-retweet"></i></button>
                    </div>
                    </div>
                        </Card.Body>
                        </Col>
                        </Row>
                        </Card>
                       </Col>
                      
                        )}
                        </Col>
                        <Col md={4}><Bestsell /></Col>
                        <Col md={4}><Topitem /></Col>
                        </Row>
            </Container>
        )
    }
}

export default Topitems
