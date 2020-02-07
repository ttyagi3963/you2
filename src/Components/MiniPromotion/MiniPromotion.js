import React from 'react';
import {Row, Container, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './MiniPromotion.css'

const MiniPromotion =(props)=>{
    return(
        <Container>
        <Row>
            <Col xs={12} className="MiniPromotionText">
             <h1>Azita Beheshti can not only help you define your life’s goals,<br />but help you to achieve them.</h1>
                <h3>Are you looking to eliminate your debt, lose weight, excel in your career, start your own business?<br />
                  Azita will show you how to live your best life.</h3>
                  <Link className="red-button" to="/contact-azita"> Contact Azita Now</Link>
            </Col>
        </Row>
        </Container>
    )
}

export default MiniPromotion