import React, {useState} from 'react';
import {Modal, Form, Col, Button, Media} from "react-bootstrap";
import Avatar from '../assets/img/avatar-red.svg';
import NoAvatar from '../assets/img/avatar/no-avatar.png';
import man1 from "../assets/img/avatar/man1_t1.png";
import man2 from "../assets/img/avatar/man2_t1.png";
import man3 from "../assets/img/avatar/man3_t1.png";
import man4 from "../assets/img/avatar/man4_t1.png";
import man5 from "../assets/img/avatar/man5_t1.png";
import man6 from "../assets/img/avatar/man1_t2.png";
import man7 from "../assets/img/avatar/man2_t2.png";
import man8 from "../assets/img/avatar/man3_t2.png";
import man9 from "../assets/img/avatar/man4_t2.png";
import man10 from "../assets/img/avatar/man5_t2.png";
import man11 from "../assets/img/avatar/man1_t3.png";
import man12 from "../assets/img/avatar/man2_t3.png";
import man13 from "../assets/img/avatar/man3_t3.png";
import man14 from "../assets/img/avatar/man4_t3.png";
import man15 from "../assets/img/avatar/man5_t3.png";

const DataRequired =({setActiveAvatar, activeAvatar, dataRequiredSelected, handleChange, editDataRequired, show, setShow})=> {
    const [printFirstName, setPrintFirstName] = useState('');
    const [printLastName, setPrintLastName] = useState('');

    const [sectionAvatar, setSectionAvatar] = useState(false);

    const handlePrintFirstName=(e)=>{
        const firstPrintableName = e.target.value;
        return setPrintFirstName(firstPrintableName);
    }

    const handlePrintLastName=(e)=>{
        const lastPrintableName = e.target.value.substring(0, 1).toUpperCase() + '.';
        return setPrintLastName(lastPrintableName);
    }

    const handlePrintableName=()=>{
        return `${printFirstName.charAt(0).toUpperCase() + printFirstName.slice(1)} ${printLastName}`;
    }

    
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
                {sectionAvatar === false &&<h3 className="mb-0">Data required</h3>}
                {sectionAvatar === true &&<h3 className="mb-0">Select avatar</h3>}
            </Modal.Header>
            <Modal.Body>
                {sectionAvatar === false && <Form>

                    <Form.Group as={Col} className="p-0" controlId="formFirstName">
                        <Form.Label>Avatar</Form.Label>
                        <Media>
                            {activeAvatar === true &&<div className="container-avatar mt-2 mr-3 mb-3">
                                <img src={Avatar} width={164} alt="avatar"/>
                            </div>}
                            {activeAvatar === false && <div className="container-no-avatar mt-2 mr-3 mb-3">
                                <img src={NoAvatar} width={82} alt="avatar"/>
                            </div>}
                            <Media.Body>
                                <button className="btn btn-light border mt-4" onClick={event => {event.preventDefault(); setSectionAvatar(!sectionAvatar);}}>Change</button>
                            </Media.Body>
                        </Media>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="firstName"
                                value={dataRequiredSelected && dataRequiredSelected.firstName}
                                onChange={(e) => {
                                    handleChange(e)
                                    handlePrintFirstName(e)
                                }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="lastName"
                                value={dataRequiredSelected && dataRequiredSelected.lastName}
                                onChange={(e) => {
                                    handleChange(e)
                                    handlePrintLastName(e)
                                }}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formLastName">
                        <Form.Label>Printable name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="printName"
                            value={dataRequiredSelected && dataRequiredSelected.printName || handlePrintableName()}
                            onFocus={e => e.target.select()}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                            as="select"
                            name="role"
                            value={dataRequiredSelected && dataRequiredSelected.role}
                            onChange={(e) => handleChange(e)}
                            custom
                        >
                            <option value="" disabled="">Choose...</option>
                            <option>Backend Engineer</option>
                            <option>Business Analyst</option>
                            <option>Dev Ops</option>
                            <option>Frontend Engineer</option>
                            <option>Fullstack Engineer</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formSeniority">
                        <Form.Label>Seniority</Form.Label>
                        <Form.Control
                            as="select"
                            name="level"
                            value={dataRequiredSelected && dataRequiredSelected.level}
                            onChange={(e) => handleChange(e)}
                            custom
                        >
                            <option value="" disabled="">Choose...</option>
                            <option>Mid Level</option>
                            <option>Senior</option>
                            <option>Tech Lead</option>
                        </Form.Control>
                    </Form.Group>

                    <ul className="list-inline mt-4 float-right">
                        <li className="list-inline-item">
                            <Button variant="link" onClick={() => setShow(false)}>
                                Cancel
                            </Button>
                        </li>
                        <li className="list-inline-item">
                            <Button variant="primary px-4" onClick={() => editDataRequired()}>
                                Save
                            </Button>
                        </li>
                    </ul>
                </Form>

                }
                {sectionAvatar === true && <div className="d-flex">
                    <ul className="list-unstyled">
                        <li><span className="caption d-block mb-2 text-black-50">Gender</span></li>
                        <li>
                            <Form.Check
                                custom
                                type="radio"
                                label="Male"
                                name="gender"
                                id={`male`}
                                defaultChecked={true}
                            />
                            <Form.Check
                                custom
                                type="radio"
                                label="Female"
                                name="gender"
                                className="mt-2"
                                id={`female`}
                            />
                        </li>
                        <li className="mt-4"><span className="caption d-block mb-2 text-black-50">Clothes</span></li>
                        <li>
                            <Form.Check
                                custom
                                type="radio"
                                label="Red"
                                name="clothes"
                                id={`red`}
                                defaultChecked={true}
                            />
                            <Form.Check
                                custom
                                type="radio"
                                label="Green"
                                name="clothes"
                                className="mt-2"
                                id={`green`}
                            />
                            <Form.Check
                                custom
                                type="radio"
                                label="Blue"
                                name="clothes"
                                className="mt-2"
                                id={`blue`}
                            />
                        </li>
                    </ul>
                    <ul className="list-inline avatar-list-selection ml-5">
                        <li className="list-inline-item">
                            <a href="#/" onClick={(e) => {
                                e.preventDefault();
                                setSectionAvatar(!sectionAvatar);
                                setActiveAvatar(true);
                            }}><img src={man6} width={64} alt="man 1"/></a>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man7} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man8} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man9} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man10} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man1} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man2} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man3} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man4} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man5} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man11} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man12} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man13} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man14} width={64} alt="man 1"/></span>
                        </li>
                        <li className="list-inline-item">
                            <span><img src={man15} width={64} alt="man 1"/></span>
                        </li>
                    </ul>

                </div>}

            </Modal.Body>
        </Modal>
    );
}

export default DataRequired;