import React from 'react';
import {Modal, Form, Col, Button, Row, ListGroup} from "react-bootstrap";

const ModalAdviserCertification=({certificationSelected, removeCertification, show, setShow})=> {
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-60w"
            backdrop="static"
            keyboard={false}
            animation={false}
        >
            <Modal.Header className="border-0">
                <h3 className="mb-0">Remove Certification</h3>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to remove the certification <strong>{certificationSelected && certificationSelected.degree}</strong> ?</p>
                <div className="sticky-bottom ">
                    <ul className="list-inline mt-4 mb-2 float-right">
                        <li className="list-inline-item">
                            <Button variant="link" onClick={() => setShow(false)}>
                                Cancel
                            </Button>
                        </li>
                        <li className="list-inline-item">
                            <Button variant="primary px-4" onClick={()=>removeCertification()}>
                                Yes
                            </Button>
                        </li>
                    </ul>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ModalAdviserCertification;