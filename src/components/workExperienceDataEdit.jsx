import React, {useState, useEffect} from 'react';
import {Modal, Form, Col, Button, Row, ListGroup} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextareaAutosize from 'react-textarea-autosize';

const WorkExperienceData=({experienceSelected, handleChange, edit, show, setShow})=> {

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
                <h3 className="mb-0">Work Experience</h3>
            </Modal.Header>
            <Modal.Body>
                 <form>
                    <Form.Row>
                        <ul className="list-inline">
                            <li className="list-inline-item mr-5">
                                <Form.Label>Start date</Form.Label>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Form.Control
                                            as="select"
                                            name="startDateMonth"
                                            value={experienceSelected && experienceSelected.startDateMonth}
                                            onChange={(e)=>handleChange(e)}
                                            custom
                                        >
                                            <option value="" disabled="">Month</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </Form.Control>
                                    </li>
                                    <li className="list-inline-item">
                                        <Form.Control
                                            as="select"
                                            name="startDateYear"
                                            value={experienceSelected && experienceSelected.startDateYear}
                                            onChange={(e)=>handleChange(e)}
                                            custom
                                        >
                                            <option value="" disabled="" hidden="">Year</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>
                                            <option value="1973">1973</option>
                                            <option value="1972">1972</option>
                                            <option value="1971">1971</option>
                                            <option value="1970">1970</option>
                                            <option value="1969">1969</option>
                                            <option value="1968">1968</option>
                                            <option value="1967">1967</option>
                                            <option value="1966">1966</option>
                                            <option value="1965">1965</option>
                                            <option value="1964">1964</option>
                                            <option value="1963">1963</option>
                                            <option value="1962">1962</option>
                                            <option value="1961">1961</option>
                                            <option value="1960">1960</option>
                                            <option value="1959">1959</option>
                                            <option value="1958">1958</option>
                                            <option value="1957">1957</option>
                                            <option value="1956">1956</option>
                                            <option value="1955">1955</option>
                                            <option value="1954">1954</option>
                                            <option value="1953">1953</option>
                                            <option value="1952">1952</option>
                                            <option value="1951">1951</option>
                                            <option value="1950">1950</option>
                                            <option value="1949">1949</option>
                                            <option value="1948">1948</option>
                                            <option value="1947">1947</option>
                                            <option value="1946">1946</option>
                                            <option value="1945">1945</option>
                                            <option value="1944">1944</option>
                                            <option value="1943">1943</option>
                                            <option value="1942">1942</option>
                                            <option value="1941">1941</option>
                                            <option value="1940">1940</option>
                                            <option value="1939">1939</option>
                                            <option value="1938">1938</option>
                                            <option value="1937">1937</option>
                                            <option value="1936">1936</option>
                                            <option value="1935">1935</option>
                                            <option value="1934">1934</option>
                                            <option value="1933">1933</option>
                                            <option value="1932">1932</option>
                                            <option value="1931">1931</option>
                                            <option value="1930">1930</option>
                                            <option value="1929">1929</option>
                                            <option value="1928">1928</option>
                                            <option value="1927">1927</option>
                                            <option value="1926">1926</option>
                                            <option value="1925">1925</option>
                                            <option value="1924">1924</option>
                                            <option value="1923">1923</option>
                                            <option value="1922">1922</option>
                                            <option value="1921">1921</option>
                                        </Form.Control>
                                    </li>
                                </ul>
                            </li>
                            <li className="list-inline-item">
                                <Form.Label>End date</Form.Label>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Form.Control
                                            as="select"
                                            name="endDateMonth"
                                            value={experienceSelected && experienceSelected.endDateMonth}
                                            onChange={(e)=>handleChange(e)}
                                            custom
                                        >
                                            <option value="" disabled="">Month</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </Form.Control>
                                    </li>
                                    <li className="list-inline-item">
                                        <Form.Control
                                            as="select"
                                            name="endDateYear"
                                            value={experienceSelected && experienceSelected.endDateYear}
                                            onChange={(e)=>handleChange(e)}
                                            custom
                                        >
                                            <option value="" disabled="" hidden="">Year</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>
                                            <option value="1973">1973</option>
                                            <option value="1972">1972</option>
                                            <option value="1971">1971</option>
                                            <option value="1970">1970</option>
                                            <option value="1969">1969</option>
                                            <option value="1968">1968</option>
                                            <option value="1967">1967</option>
                                            <option value="1966">1966</option>
                                            <option value="1965">1965</option>
                                            <option value="1964">1964</option>
                                            <option value="1963">1963</option>
                                            <option value="1962">1962</option>
                                            <option value="1961">1961</option>
                                            <option value="1960">1960</option>
                                            <option value="1959">1959</option>
                                            <option value="1958">1958</option>
                                            <option value="1957">1957</option>
                                            <option value="1956">1956</option>
                                            <option value="1955">1955</option>
                                            <option value="1954">1954</option>
                                            <option value="1953">1953</option>
                                            <option value="1952">1952</option>
                                            <option value="1951">1951</option>
                                            <option value="1950">1950</option>
                                            <option value="1949">1949</option>
                                            <option value="1948">1948</option>
                                            <option value="1947">1947</option>
                                            <option value="1946">1946</option>
                                            <option value="1945">1945</option>
                                            <option value="1944">1944</option>
                                            <option value="1943">1943</option>
                                            <option value="1942">1942</option>
                                            <option value="1941">1941</option>
                                            <option value="1940">1940</option>
                                            <option value="1939">1939</option>
                                            <option value="1938">1938</option>
                                            <option value="1937">1937</option>
                                            <option value="1936">1936</option>
                                            <option value="1935">1935</option>
                                            <option value="1934">1934</option>
                                            <option value="1933">1933</option>
                                            <option value="1932">1932</option>
                                            <option value="1931">1931</option>
                                            <option value="1930">1930</option>
                                            <option value="1929">1929</option>
                                            <option value="1928">1928</option>
                                            <option value="1927">1927</option>
                                            <option value="1926">1926</option>
                                            <option value="1925">1925</option>
                                            <option value="1924">1924</option>
                                            <option value="1923">1923</option>
                                            <option value="1922">1922</option>
                                            <option value="1921">1921</option>
                                        </Form.Control>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Form.Row>

                    <Form.Group controlId="formCompany">
                        <ul className="list-inline d-flex mb-0">
                            <li className="list-inline-item mr-auto my-auto">
                                <Form.Label>Company</Form.Label>
                            </li>
                            <li className="list-inline-item ml-auto my-auto">
                                <Form.Check
                                    custom
                                    name="iamExperience"
                                    type="checkbox"
                                    defaultChecked={experienceSelected && experienceSelected.iamExperience}
                                    onChange={(e)=>handleChange(e)}
                                    label={`IAM Experience`}
                                />
                            </li>
                        </ul>
                        <Form.Control
                            type="text"
                            name="company"
                            value={experienceSelected && experienceSelected.company}
                            onChange={(e)=>handleChange(e)}
                            placeholder=""
                        />
                    </Form.Group>

                    <Form.Group controlId="formIndustry">
                        <Form.Label>Industry</Form.Label>
                        <Form.Control
                            as="select"
                            name="industry"
                            value={experienceSelected && experienceSelected.industry}
                            onChange={(e)=>handleChange(e)}
                            custom
                        >
                            <option>Choose...</option>
                            <option>Aerospace</option>
                            <option>Automotive</option>
                            <option>Chemical</option>
                            <option>Computer</option>
                            <option>Construction</option>
                            <option>Defense</option>
                            <option>Education</option>
                            <option>Electrical power</option>
                            <option>Electronics</option>
                            <option>Energy</option>
                            <option>Financial services</option>
                            <option>Food</option>
                            <option>Health care</option>
                            <option>Hospitality</option>
                            <option>Human capital</option>
                            <option>Human resources</option>
                            <option>Industrial robot</option>
                            <option>Information</option>
                            <option>Insurance</option>
                            <option>Internet</option>
                            <option>Low to medium tech</option>
                            <option>Media & Entertainment</option>
                            <option>Mining</option>
                            <option>Petroleum</option>
                            <option>Pharmaceutical</option>
                            <option>Real state</option>
                            <option>Retail</option>
                            <option>Semiconductor</option>
                            <option>Ship building</option>
                            <option>Software</option>
                            <option>Sport</option>
                            <option>Steel</option>
                            <option>Telecommunication</option>
                            <option>Textile</option>
                            <option>Transport</option>
                            <option>Water</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                            as="select"
                            name="role"
                            value={experienceSelected && experienceSelected.role}
                            onChange={(e)=>handleChange(e)}
                            custom
                        >
                            <option>Choose...</option>
                            <option>Backend Engineer</option>
                            <option>Frontend Engineer</option>
                            <option>Fullstack Engineer</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formChallenge">
                        <Form.Label>Project / Challenge description</Form.Label>
                        <TextareaAutosize
                            cacheMeasurements
                            name="challenge"
                            value={experienceSelected && experienceSelected.challenge}
                            onChange={(e)=>handleChange(e)}
                            className="form-control text-area-autosize"
                        />
                    </Form.Group>

                    <Form.Group controlId="formActivities">
                        <ul className="list-inline d-flex mb-0">
                            <li className="list-inline-item mr-auto my-auto">
                                <Form.Label>Activities</Form.Label>
                            </li>
                            <li className="list-inline-item ml-auto my-auto">
                                <Form.Check
                                    custom
                                    name="remote"
                                    type="checkbox"
                                    defaultChecked={experienceSelected && experienceSelected.remote}
                                    onChange={(e)=>handleChange(e)}
                                    label={`Remote work`}
                                />
                            </li>
                        </ul>
                        <TextareaAutosize
                            cacheMeasurements
                            name="activities"
                            value={experienceSelected && experienceSelected.activities}
                            onChange={(e)=>handleChange(e)}
                            className="form-control text-area-autosize"
                        />
                    </Form.Group>

                    <h5 className="py-3">Review and mark the technologies used on the project</h5>

                    <Form.Group controlId="formMainTech">
                        <Form.Label>Main technology</Form.Label>
                        <Form.Control
                            as="select"
                            name="mainTech"
                            value={experienceSelected && experienceSelected.mainTech}
                            onChange={(e)=>handleChange(e)}
                            custom>
                            <option>Choose...</option>
                            <option>.NET</option>
                            <option>Angular</option>
                            <option>C/C++</option>
                            <option>Java</option>
                            <option>Javascript</option>
                            <option>NodeJs</option>
                            <option>PHP</option>
                            <option>Python</option>
                            <option>React</option>
                            <option>Ruby</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formAddtionalTach">
                        <Form.Label>Additional technologies</Form.Label>
                        <Form.Control
                            as="select"
                            name="additionalTech"
                            value={experienceSelected && experienceSelected.additionalTech}
                            onChange={(e)=>handleChange(e)}
                            custom>
                            <option>Choose...</option>
                            <option>.NET</option>
                            <option>Angular</option>
                            <option>C/C++</option>
                            <option>Java</option>
                            <option>Javascript</option>
                            <option>NodeJs</option>
                            <option>PHP</option>
                            <option>Python</option>
                            <option>React</option>
                            <option>Ruby</option>
                        </Form.Control>
                    </Form.Group>

                    <div className="sticky-bottom border-top">
                        <ul className="list-inline mt-4 mb-2 float-right">
                            <li className="list-inline-item">
                                <Button variant="link" onClick={() => setShow(false)}>
                                    Cancel
                                </Button>
                            </li>
                            <li className="list-inline-item">
                                <Button variant="primary px-4" onClick={()=>edit()}>
                                    Save
                                </Button>
                            </li>
                        </ul>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default WorkExperienceData;