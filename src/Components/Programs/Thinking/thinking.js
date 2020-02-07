import  React from 'react'
import {Row, Container, Col, Button} from 'react-bootstrap';
import ThinkingIntoResults from '../../../assets/images/thinking-into-results-1.jpg'
import DiscoveryForm from '../../../Container/DiscoveryForm/DiscoveryForm'
import './thinking.css'

const Thinking = () =>{
    return (
        <Container className="Thinking">
            <Row style={{    marginTop: '30px'}}>
                <Col xs={12}>
                    <h1>Thinking Into Results</h1>
                    <h2>Increase Empowerment & Purpose in Your Work</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} className="leftSection">
                        <p><img src={ThinkingIntoResults} alt="Thinking Into Results" style={{float:'left'}}></img> Regardless of what you have previously accomplished, 
                            it is nothing compared to where you can still go. 
                            If you’ve been wondering ‘what next?’ or ‘is this as good as it gets?’ 
                            and you are ready to accomplish more in less time with less effort, it’s 
                            time to begin <span className="bold">Thinking Into Results.</span></p>
                        
                            <p>The program is divided into 12 sessions that 
                    begin with learning how to set quantum-leap goals. 
                    The program then looks at your habits, efficiency, and
                     productivity to understand – and vanquish – previous barriers to your success. 
                     The final sessions help you develop the new mindset that empowers you, enabling you to
                      analyze challenges, see the opportunity, and then act on that opportunity.</p>
                      
                       <h3 className="red">Why stop at just good enough?</h3>
                       <h4><a className="red">Contact us</a> or 
                       <a className="red"> sign up for a quick discovery session </a>
                       with Azita Beheshti for more information.
                       </h4>
                      
                </Col>
                <Col xs={12} sm={6}>
                   
                       
                        < DiscoveryForm formType="thinking" />
                    






                </Col>
            </Row>
        </Container>
    )
}


export default Thinking;