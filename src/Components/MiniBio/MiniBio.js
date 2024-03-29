import React  from 'react'
import Azita from '../../assets/images/azita.JPG'
import {Link} from 'react-router-dom' 
import { Col, Container, Row, Button } from 'react-bootstrap'

import './MiniBio.css'

const MiniBio = (props) =>{
    return(
        
            <Container className="MiniBio">
                <Row>
                <Col xs={12} sm={6} style={{textAlign:"center"}}>
                   <img src={Azita} />
                </Col>
                <Col xs={12} sm={6} style={{textAlign:"center"}}>
                <h1>When you develop the leader within, it affects every aspect of your life!</h1>
                    <h3>Working in partnership with Bob Proctor, 
                        the legendary human performance expert and star 
                        of "The Secret," Azita Beheshti serves as a leadership 
                        and management consultant to individuals and business teams 
                        everywhere.</h3>
                        <Link type="button" className="blue-button ContactButton" to="/contact-azita"> Contact Azita Now</Link>
                </Col>
                </Row>
                
            </Container>
       
    )
}

export default MiniBio