import React ,{Component} from 'react';
import {Modal} from 'react-bootstrap'
import './Modal.css'

const MyModel =(props)=>{
   

  
        return (
            <Modal
                    show={props.open}
                    onHide={() => props.setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                          {props.heading}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {props.body}
                      </Modal.Body>
                     
                     
        </Modal>
        )

   
    
}


export default MyModel