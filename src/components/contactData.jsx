import React, {useState} from 'react';
import {Modal, Form, Col, Button, Row} from "react-bootstrap";
import 'react-phone-number-input/style.css'
//import PhoneInput from 'react-phone-number-input'

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const ContactData=({handleChangeTel, contactDataSelected, handleChange, editContactData, show, setShow})=> {

    const [value, setValue] = useState()

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
                <h3 className="mb-0">Contact details</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder=""
                            name="mail"
                            value={contactDataSelected && contactDataSelected.mail}
                            onChange={(e)=>handleChange(e)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formLinkedIn">
                        <Form.Label>Linkedin</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="linkedin"
                            value={contactDataSelected && contactDataSelected.linkedin}
                            onChange={(e)=>handleChange(e)}
                        />
                    </Form.Group>

                    <Row>
                        <Col xs={5}>
                            <Form.Label>Phone number</Form.Label>
                            {/*<Form.Control
                                type="email"
                                placeholder=""
                                name="telephone"
                                value={contactDataSelected && contactDataSelected.telephone}
                                onChange={(e)=>handleChange(e)}
                            />*/}
                            <PhoneInput
                                placeholder="Enter phone number"
                                name="telephone"
                                value={contactDataSelected && contactDataSelected.telephone}
                                onChange={(e)=>handleChangeTel(e)}
                                className="form-control"
                            />

                        </Col>
                    </Row>

                    <ul className="list-inline mt-4 float-right">
                        <li className="list-inline-item">
                            <Button variant="link" onClick={()=>setShow(false)}>
                                Cancel
                            </Button>
                        </li>
                        <li className="list-inline-item">
                            <Button variant="primary px-4" onClick={()=>editContactData()}>
                                Save
                            </Button>
                        </li>
                    </ul>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ContactData;