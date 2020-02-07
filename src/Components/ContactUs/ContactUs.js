import React, { Component} from 'react';
import {Row, Container, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom' 
import ContactForm from '../../Container/ContactForm/ContactForm' 
import './ContactUs.css'




const ContactUs = () =>{
    return(
        <div className="ContactUs">
            <Container>
                <Row>
                    <Col xs={12} sm={5} style={{padding:'15px'}}>
                        <div className="heading">
                        <h1>Contact Us</h1>
                        </div>
                        <div className="body">
                        <p>Whether you are looking to improve your career, lose weight, get out of 
                        debt or simply improve your results, I’d be happy to answer any of your 
                        questions and talk to you about how I can help you to achieve your goals.
                        </p>
                        <p>
                        Interested in a quick Discovery Session Call with Azita Beheshti? 
                        Simply <Link className="red bold" to="/complimentary-session">Click Here </Link>
                        to Book a <Link className="red bold" to="/complimentary-session">Free Session</Link>.
                        </p>
                        <p>
                        For all other comments or questions, 
                        please complete the Contact Us form on this page 
                        and a member of our staff will 
                        respond as quickly as possible.
                        </p>
​


                        </div>
                    </Col>
                    <Col xs={12} sm={7} style={{padding:'15px'}}>
                            <ContactForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs