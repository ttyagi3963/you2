import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Facebook from '../../assets/images/facebook-1.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'
import Follow from '../../assets/images/follow.png'
import './footer.css'

const Footer =(props)=>{
    return(
        <Container fluid>
            <Row className="FooterContainer">
                <Container className="Footer">
                    <Row>
                    
                    
                        <Col xs={12} sm={12} style={{textAlign:'center'}}>
                        <img src={Follow} style={{display:'inline-block'}} className="Follow"/> 
                        </Col>
                        <Col xs={12} style={{textAlign:'center'}} className="social">
                            <img src={Facebook} />
                            <img src={Instagram} />
                            <img src={Twitter} />  
                        </Col>
                    </Row>
                </Container>
                </Row>
         </Container>
    )
}

export default Footer;