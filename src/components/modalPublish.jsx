import React from 'react';
import {Modal, Form, Col, Button, Row, ListGroup} from "react-bootstrap";

import Check from '../assets/img/check.svg';

const ModalPublish=({show, setShow})=> {
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="rounded-xl"
            backdrop="static"
            keyboard={false}
            animation={false}
        >
            <Modal.Body>
                <div className="d-flex flex-column ">
                    <img src={Check} width={64} className="mx-auto mt-3 mb-4" alt="check"/>
                    <h4 className="text-center mb-3" style={{fontWeight:700}}>The Resume was published!</h4>
                    <p className="text-center mb-4">Now that the Resume has been published you can view it by consulting the talent information</p>
                    <Button variant="primary px-4 mx-auto mb-4" onClick={() => setShow(false)}>
                        Return to dashboard
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ModalPublish;