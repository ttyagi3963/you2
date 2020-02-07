import  React from 'react'
import {Row, Container, Col, Button} from 'react-bootstrap';

import DiscoveryForm from '../../Container/DiscoveryForm/DiscoveryForm'
import './Customize.css'

const Customize = () =>{
    return (
        <Container className="Customize">
            <Row style={{    marginTop: '30px'}}>
                <Col xs={12}>
                    <h1>Let’s Customize a Program For You!</h1>
                    <h2>Complimentary Discovery Session with Azita.</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} className="leftSection">
                        <p>Before deciding your next steps, let’s determine if this coaching/consulting program is for you with a no-obligation Discovery Call. The only requirements are that you be open and honest about what you desire for yourself and/or for your team.
                         </p>
                        
                            
                       <h3 className="red">Why stop at just good enough?</h3>
                       <h4><a className="red">Contact us</a> or 
                       <a className="red"> sign up for a quick discovery session </a>
                       with Azita Beheshti for more information.
                       </h4>
                      
                </Col>
                <Col xs={12} sm={6}>
                        < DiscoveryForm formType="Customize" />
                </Col>
            </Row>
        </Container>
    )
}


export default Customize;