import React from 'react';
import {Navbar} from "react-bootstrap";

const Header=({nameTalent, setNameTalent, toastSystem, setToastSystem, publish, setPublish}) =>{
    return (
        <div className="sticky-top">
            <Navbar className="bg-white shadow-sm">
                <div>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="#/">Talents</a></li>
                        <li className="list-inline-item align-middle text-black-50"><span className="material-icons material-icons-outlined md-20">navigate_next</span></li>
                        <li className="list-inline-item"><span>New talent</span></li>
                    </ul>
                    {nameTalent.length ===0 &&<h3 className={`mb-0 ${nameTalent.length === 0 ? 'text-black-50' : ''}`}>Name talent</h3>}
                    <h3 className={`mb-0`}>{nameTalent.charAt(0).toUpperCase() + nameTalent.slice(1)}</h3>
                </div>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <ul className="list-inline d-flex my-auto">
                            <li className="list-inline-item text-right mr-4 my-auto">
                                <ul className="list-inline mr-4">
                                    <li className="list-inline-item mr-5 d-none d-lg-inline-block d-xl-inline-block">
                                        {toastSystem === true &&<small className="text-truncate"><span className="material-icons md-16 mr-1"
                                                                                style={{verticalAlign: 'sub'}}>save</span> Last
                                            update as draft 11 Oct, 2021 13:45 pm</small>}
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <button className="btn btn-light border px-3" onClick={e=>{e.preventDefault(); setToastSystem(true);}}>Save as draft</button>
                                    </li>
                                    <li className="list-inline-item">
                                        <button className="btn btn-primary px-4" onClick={e=>{e.preventDefault(); setPublish(true);}}>Publish</button>
                                    </li>
                                </ul>
                            </li>
                            <li className="list-inline-item my-auto">
                                <span className="material-icons-outlined mt-2">close</span>
                            </li>
                        </ul>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;