import React, { Component } from 'react'
import json from '../Topitems.json'
import { Container,Card,Row,Col } from 'react-bootstrap'
export class Topitem extends Component {
    render() {
        return (
            <Container>
                <h2>Top Items</h2>
                {json.topitems.map(pro=>
                
                    <Col md={12}>
                    <Card >
                        <Row>
                            <Col sm={5}>
                                
                    <Card.Img variant="top"  src={`/images/${pro.image}`} width="100px" height="150px"/></Col>
                    <Col sm={5}>
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
            </Container>
        )
    }
}

export default Topitem
