import React, { Component } from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
export class Instagram extends Component {
    render() {
        return (
            <Container>
                <h1 class="text-center">Instagram</h1>
            <p class="text-center">------------o  @@@@@@@   o-----------</p>
            <Row>
                <Col sm={2}>
                <img src="../images/in1.jpg" width="220px" height="250px"  alt="img"/>
                </Col>
                <Col sm={2}>
                <img src="../images/in2.jpg" width="220px" height="250px" alt="img"/>
                    </Col>
                     <Col sm={2}>
                     <img src="../images/in3.jpg" width="220px" height="250px" alt="img" />
                    </Col>
                    <Col sm={2}>
                    <img src="../images/in4.jpg" width="220px" height="250px" alt="img" />
                    </Col>
                    <Col sm={2}>
                    <img src="../images/in5.jpg" width="220px" height="250px"alt="img" />
                    </Col> <Col sm={2}>
                    <img src="../images/in6.jpg" width="220px" height="250px"alt="img" />
                    </Col>
            </Row>
            </Container>
        )
    }
}

export default Instagram
