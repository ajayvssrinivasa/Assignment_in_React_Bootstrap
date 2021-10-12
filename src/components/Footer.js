import React, { Component } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
export class Footer extends Component {
    render() {
        return (
           <Container  style={{backgroundColor:"black"}} className="mb-5">
                <Row>
                   <Col sm={2}>
                <Button variant="warning"  size="lg"><i class="fas fa-facebook">   Facebook &nbsp;&nbsp;&nbsp;&nbsp;</i></Button></Col>
                <Col sm={2}>
                <Button variant="danger"  size="lg"><i class="fas fa-twitter">   Twitter&nbsp;&nbsp;&nbsp;&nbsp;</i></Button></Col>
                <Col sm={2}>
                <Button variant="success" size="lg"><i class="fas fa-instagram"> Instagram&nbsp;&nbsp;&nbsp;&nbsp;</i></Button></Col>
                <Col sm={2}>
                <Button variant="warning"  size="lg"><i class="fas fa-whatsapp">  Whatsapp&nbsp;&nbsp;&nbsp;&nbsp;</i></Button></Col>
                <Col sm={2}>
                <Button variant="danger"  size="lg"><i class="fas fa-dribble">   Telegram &nbsp;&nbsp;&nbsp;&nbsp;</i></Button></Col>
                <Col sm={2}>
                <Button variant="danger"  size="lg" ><i className="fas fa-twitter">   Twitter&nbsp;&nbsp;&nbsp;&nbsp;</i></Button></Col>
                </Row>
                <Container>
                
            <img src="../images/bpk_logo.PNG" width="100px" height="100px" style={{marginLeft:"600px"}} alt="img" /> 
            
            <h4 class="text-center text-white h41"><i class="fa fa-quote-left"></i>Happiness is a butterfly, which when pursued, 
                 is always beyond your grasp, but which, 
                    if you will sit down quietly, may alight upon you.
                    <i class="fa fa-quote-right"></i></h4> 
                <Container>
                
                <a href="/" class="btn " style={{marginLeft:"300px"}}>
                    <img src="../images/paypal.png" width="80px" height="40px" style={{backgroundColor: "white"}} alt="img"/></a>
                <a href="/" class="btn "><img src="../images/visa.png" width="80px" height="40px" alt="img"/></a>
                <a href="/" class="btn "><img src="../images/discover.jfif" width="80px" height="40px" alt="img"/></a>
                <a href="/" class="btn "><img src="../images/amex.jpg" width="80px" height="40px" alt="img"/></a>
                <a href="/" class="btn"><img src="../images/MasterCard_Logo.png" width="80px" height="40px" style={{backgroundColor: "white"}} alt="img"/></a>
                <a href="/" class="btn"><img src="../images/maestro.png" width="80px" height="40px" style={{backgroundColor: "white"}} alt="img"/></a>
                
                
                

                </Container>
         </Container>
     
           </Container>
        )
    }
}

export default Footer
