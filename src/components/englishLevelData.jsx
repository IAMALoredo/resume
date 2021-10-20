import React from 'react';
import {Modal, Form, Button, ListGroup} from "react-bootstrap";

const EnglishLevelData=({englishSelected, handleChange, editEnglish, show, setShow})=> {
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
                <h3 className="mb-0">English level</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formLevel" className="mb-4">
                        <Form.Label>Level</Form.Label>
                        <Form.Control
                            as="select"
                            name="level"
                            value={englishSelected && englishSelected.level}
                            onChange={(e)=>handleChange(e)}
                            custom
                        >
                            <option value="" disabled="">Choose...</option>
                            <option>Advance</option>
                            <option>Intermediate</option>
                            <option>Native</option>
                            <option>Upper-Intermediate</option>
                        </Form.Control>
                    </Form.Group>

                    <ul className="list-inline mt-4 float-right">
                        <li className="list-inline-item">
                            <Button variant="link" onClick={()=>setShow(false)}>
                                Cancel
                            </Button>
                        </li>
                        <li className="list-inline-item">
                            <Button variant="primary px-4" onClick={()=>editEnglish()}>
                                Save
                            </Button>
                        </li>
                    </ul>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EnglishLevelData;