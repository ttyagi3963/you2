import React from 'react';
import {Row, Container, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Promotion.css'

const Promotion = (props) =>{
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <div className="Promotion">
                        <div className="PromotionText">
                            <h1 className="Text">Are You Ready to Live the Life You <span className="bold">"REALLY"</span> Want?</h1>
                            <h2 className="Text">Make the Decision. Invest in  <span className="bold">Yourself!</span></h2>
                            <Link to="/work-with-azita">Lets Get Started Today</Link>
                        </div>
                    </div>
                    </Col>
            </Row>
        </Container>
    )
}

export default Promotion;