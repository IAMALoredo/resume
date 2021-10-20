import React from 'react';
import {Modal, Form, Col, Button, Row} from "react-bootstrap";
import TextareaAutosize from 'react-textarea-autosize';

const SoftSkillEdit=({softSkillSelected, handleChange, editSoftSkill, show, setShow})=> {
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
                <h3 className="mb-0">Edit Certification</h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formLinkedIn">
                        <Form.Label>Skill</Form.Label>
                        <Form.Control
                            as="select"
                            name="skill"
                            value={softSkillSelected && softSkillSelected.skill}
                            onChange={(e)=>handleChange(e)}
                            custom
                        >
                            <option value="" disabled="">Choose...</option>
                            <option>Communication</option>
                            <option>Teamwork</option>
                            <option>Problem-solving</option>
                            <option>Time management</option>
                            <option>Critical thinking</option>
                            <option>Decision-making</option>
                            <option>Organizational</option>
                            <option>Stress management</option>
                            <option>Adaptability</option>
                            <option>Conflict management</option>
                            <option>Leadership</option>
                            <option>Creativity</option>
                            <option>Resourcefulness</option>
                            <option>Persuasion</option>
                            <option>Openness to criticism</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formLinkedIn">
                        <Form.Label>Recommended by</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="name"
                            value={softSkillSelected && softSkillSelected.name}
                            onChange={(e)=>handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formLinkedIn">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="position"
                            value={softSkillSelected && softSkillSelected.position}
                            onChange={(e)=>handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formChallenge">
                        <Form.Label>Quote</Form.Label>
                        <TextareaAutosize
                            cacheMeasurements
                            name="quote"
                            value={softSkillSelected && softSkillSelected.quote}
                            onChange={(e)=>handleChange(e)}
                            className="form-control text-area-autosize"
                        />
                    </Form.Group>



                    <ul className="list-inline mt-4 float-right">
                        <li className="list-inline-item">
                            <Button variant="link" onClick={()=>setShow(false)}>
                                Cancel
                            </Button>
                        </li>
                        <li className="list-inline-item">
                            <Button variant="primary px-4" onClick={()=>editSoftSkill()}>
                                Save
                            </Button>
                        </li>
                    </ul>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default SoftSkillEdit;