import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import './PersonalDevelopment.css'

const PersonalDevelopment = (props) =>{
    return(
        <Container className="PersonalDevelopment">
            <Row>
             <Col sm={4}  xs={12} className="PersonalContent">
                <div className="Heading Personal">
                    Personal Development
                </div>
                <div className="PersonalBody">
                    <ul>
                        <li>Do you want something more out of life?</li>
                        <li>Have you tried to make changes in the past... but without success?</li>
                        <li> Do you have a specific goal but dont know how to achieve it?</li>
                       
                    </ul>
                    <a className="button">Read More</a>
                    
                </div>
             </Col> 
             <Col sm={4}  xs={12} className="CorporateContent">
                <div className="Heading">
                        Corporate Coaching and Development
                </div>
                <div className="PersonalBody">
                    <ul>
                <li>Do you want something more out of life?</li>
                        <li>Is your Team stuck getting the same results year in and year out?</li>
                        <li>Is your Income not where you'll like it to be?</li>
                        <li>Are you ready for a quantum leap?</li>
                 </ul>
                 <a className="button">Read More</a>       
                    
                </div>
             </Col> 
             <Col sm={4}  xs={12} className="OneContent">
             <div className="Heading">
                 Work With Azita Beheshti<br />
                 One - on - One!
                 </div>
                 <div className="PersonalBody" style={{textAlign:'center'}}>
                <Link className="button" to="/work-with-azita">Lets Get Started Today</Link>
                </div>
              </Col> 
              </Row>  
        </Container>
    )
}

export default PersonalDevelopment