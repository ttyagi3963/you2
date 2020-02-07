import  React from 'react'
import {Row, Container, Col, Button} from 'react-bootstrap';

import DiscoveryForm from '../../Container/DiscoveryForm/DiscoveryForm'
import './Work.css'

const Work = () =>{
    return (
        <Container className="Work">
            <Row style={{    marginTop: '30px'}}>
                <Col xs={12}>
                    <h1>Work With Kelly</h1>
                    <h2>Take Control of Your Life.</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} className="leftSection">
                       <p>When that zing suddenly occurred, you felt more alive, even a bit giddy.

                                When you bring Azita Beheshti on as a coach/consultant in your world, those lightbulb moments start looking more like a 
                                fireworks show. Concepts you might never have grasped are suddenly crystal clear, and goals that had always 
                                thwarted you turn into one success after another, lining up like obedient soldiers.
                         </p>
                        
                            <p>Whether you choose to bring Azita into your workplace, or prefer one-on-one focus on your own life’s goals, you’re going to discover a brighter, more illuminated result.</p>
                       <h3 className="red">Why stop at just good enough?</h3>
                       <h4><a className="red">Contact us</a> or 
                       <a className="red"> sign up for a quick discovery session </a>
                       with Azita Beheshti for more information.
                       </h4>
                      
                </Col>
                <Col xs={12} sm={6}>
                        < DiscoveryForm formType="Work-with-Azita" />

                </Col>
            </Row>
        </Container>
    )
}


export default Work;