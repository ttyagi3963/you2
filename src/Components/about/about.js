import  React from 'react'
import {Row, Container, Col, Button} from 'react-bootstrap';
import Azita from '../../assets/images/azita.JPG'
import './about.css'

const About = () =>{
    return (
        <Container className="About">
            <Row style={{    marginTop: '30px'}}>
                <Col xs={12}>
                    <h1> Meet Azita Beheshti</h1>
                    <h2>Coach.Philanthropist.Entrepreneur.</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={4} style={{    textAlign:'center'}}>
                        <img src={Azita} className="Azita" alt="azita" />
                </Col>
                <Col xs={12} sm={8}>
                <p>Azita Beheshti is an entrepreneur, philanthropist and a life and business coach.</p>

<p>Working side by side with Bob Proctor, the legendary human performance expert and star of “The Secret,” 
    Azita Beheshti serves as a leadership and management consultant to individuals and business teams everywhere.</p>

    <p>In today’s fast-moving world, the words “leadership” and “management” no longer just belong to that 
        guy in the big corner office.

Today – more than ever – a true leader is anyone … people in all walks of life who have chosen to focus on 
developing themselves, consciously honing their strengths, and learning how to leap higher and higher 
because of the confidence and trust they’ve learned to place in themselves. Azita Beheshti helps people develop the leader within, which parlays to every aspect of improved leadership 
    in their lives.</p>


<p>As an accomplished Proctor Gallagher consultant with Bob Proctor, 
    Azita Beheshti combines her own leadership and management success tips 
    with two globally renowned programs, <span className="bold">Thinking Into Results</span> and the new  <span className="bold">Lead the Field Program</span>.
</p>
<p>Azita can be hired for seminars and workshops, and coaches in person and over the phone in both individual and group/business team settings. </p>

<h4>For a limited time Azita is giving away a FREE 30 min session.</h4>
<div class="button">
<a className="book">Book a Free Discovery Session</a>
</div>



                </Col>
            </Row>
        </Container>
    )
}


export default About;