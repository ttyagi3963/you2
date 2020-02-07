import  React from 'react'
import {Row, Container, Col, Button} from 'react-bootstrap';
import LeadTheField from '../../../assets/images/leadership.png'
import DiscoveryForm from '../../../Container/DiscoveryForm/DiscoveryForm'
import './Lead.css'

const Leading = () =>{
    return (
        <Container className="Lead">
            <Row style={{    marginTop: '30px'}}>
                <Col xs={12}>
                    <h1>Lead The Field</h1>
                    <h2>Discovering the Leader in Yourself… For Your Life.</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} className="leftSection">
                        <p><img src={LeadTheField} alt="Thinking Into Results" style={{float:'left'}}></img> Lead the
                         Field may be a strange title for a program. 
                         You might think it’s only about winning in sales or 
                         developing a competitive edge. But this program is really 
                         the exact OPPOSITE of competitive-edge thinking.
                         </p>
                        
                            <p>Lead the Field is about winning in EVERY aspect of 
                                your life, whether you’re leading a business team of 
                                thousands or initially trying to get clear on your 
                                priority goals and actions steps.</p>
                                <p>Recently, Bob Proctor re-recorded the entire Lead the Field program, this time weaving in hundreds of examples, expanded lessons and universal truths that Bob has learned and taught in his programs.</p>
                      
                       <h3 className="red">Why stop at just good enough?</h3>
                       <h4><a className="red">Contact us</a> or 
                       <a className="red"> sign up for a quick discovery session </a>
                       with Azita Beheshti for more information.
                       </h4>
                      
                </Col>
                <Col xs={12} sm={6}>
                        < DiscoveryForm formType="leading" />

                </Col>
            </Row>
        </Container>
    )
}


export default Leading;