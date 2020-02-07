import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Thinking from '../../assets/images/thinking-into-results-1.jpg'
import Leadership from '../../assets/images/leadership.png'
import './Benefits.css'

const Benefits = (props) =>{
    return (
        <Container className="Benefits">
                <Row>
                    <Col xs={12}>
                        <div className="heading">Azita Beheshti's Coaching Programs</div>
                    </Col>
                </Row>
                  <Row>
                    <Col xs={12} sm={6}>
                    
                    <div className="Thinking">
                        <div className="image">
                            <img src={Thinking} />
                        </div>
                        <div className="body">
                            <p><span className="bold">Thinking Into Results</span> is a comprehensive 
                            consultant-guided program designed to facilitate positive,
                            profound, permanent changes in any area of your life.
                            </p>
                            <div style={{textAlign:'center'}}>
                            <Link to="/thinking-into-results" className="btn btn-primary ContactButton"> Learn More</Link>       
                             </div>    
                    
                                {/* <ul className="BenefitsList">
                                    <li><FontAwesomeIcon icon={faCheck} color="#2caee6"/> &nbsp;&nbsp;&nbsp;Debt Elimination</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="#2caee6"/> &nbsp;&nbsp;&nbsp; Career Development</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="#2caee6"/> &nbsp;&nbsp;&nbsp; Weight Loss</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="#2caee6"/> &nbsp;&nbsp;&nbsp; A New Home</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="#2caee6"/> &nbsp;&nbsp;&nbsp; Wealth Creation</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="#2caee6"/> &nbsp;&nbsp;&nbsp; OR ANY GOAL YOU CHOOSE!</li>
                                </ul>
                    
                            <span className="bold">Thinking Into Results</span> is a one-of-a-kind system based on 
                                    over 75 years of intensive research into the science and mechanics of
                                    personal achievement: what really makes successful people successful! */}

                        </div>

                    
                    </div>
                    </Col>
                <Col xs={12} sm={6}>
                <div className="LeadTheField">
                <div className="image">
                            <img src={Leadership} />
                        </div>
                        <div className="body">
                            <p><span className="bold">Lead the Field </span> 
                             is about winning in EVERY aspect of your life, whether you’re leading a business team of thousands or initially trying to get clear on your priority goals and actions steps.
                             </p>
                             <div style={{textAlign:'center'}}>
                                <Link to="/lead-the-field" className="btn btn-primary ContactButton"> Learn More</Link>       
                             </div>
                                    
                        </div>

                </div>
                </Col>
                
                </Row>
                
            </Container>
    )
}

export default Benefits;