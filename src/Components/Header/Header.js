import React from 'react';
import {Row, Container, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {Nav, NavDropdown,Navbar} from 'react-bootstrap'

import './Header.css'



const Header = (props) =>{
   return(
      
          
    <Container fluid>
    <Row>
      <Col xs={12}>
            <div className="AboveTop">
                    Contact Azita | <FontAwesomeIcon icon={faPhone} /> 310-702-4929
            </div>
              <Container>
                  <Row>
                    <Col xs={12}>                         
                  


                      <Navbar  expand="lg" className="justify-content-between">
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                                              <Nav.Link href="/">Home</Nav.Link>
                                              <Nav.Link href="/about-azita">About</Nav.Link>
                                              <Nav.Link href="/work-with-azita">Work With Azita</Nav.Link>
                                            
                                              <NavDropdown title="Programs" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/thinking-into-results">Thinking Into Action</NavDropdown.Item>
                                                <NavDropdown.Item href="/lead-the-field">Lead The Field</NavDropdown.Item>                          
                                              </NavDropdown>
                                              <Nav.Link href="/complimentary-session">Complimentary Session</Nav.Link>
                                              <Nav.Link href="/contact-azita">Contact</Nav.Link>
                                            </Nav>
                        </Navbar.Collapse>
                      </Navbar>
                    

                        
                   
                    </Col>
                  </Row>
              </Container>
      </Col>
    </Row>
     </Container>  
   )
}

export default Header;