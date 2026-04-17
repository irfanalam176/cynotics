import React, { useState } from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'
import { Tab, Table, Tabs } from 'react-bootstrap'
import addIcon from "../../assets/svg/add-icon.svg"
import trashIcon from "../../assets/svg/trash-icon.svg"

import StudentDeleteModal from '../../components/studentDeleteModal'


export default function TeacherDashboard() {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteStudent = () => {
        setShowModal(true);
    };

    const closeModal = (confirmed) => {
        setShowModal(false);
        // Handle the confirmed value (true or false) here according to your logic
        if (confirmed) {
            // Perform action for "Yes" option
        } else {
            // Perform action for "No" option
        }
    };


    return (
        <>
            <StudentDeleteModal showModal={showModal} closeModal={closeModal} />
            <Page roundedLG={true} pageTitle={"classes"}>
                <div className="dashboardSection">
                    <Tabs
                        defaultActiveKey="classes"
                        id="dashboardTabs"
                        className="mb-3"
                    >
                        <Tab eventKey="classes" title="Classes">
                            <div className="tags scrollX mb-3">
                                <span className="tag me-2 active">10-A</span>
                                <span className="tag me-2">10-B</span>
                                <span className="tag me-2">10-c</span>
                                <span className="tag me-2">10-d</span>
                                <span className="tag me-2">10-e</span>
                                <span className="tag me-2">10-f</span>
                                <span className="tag me-2">10-g</span>
                                <span className="tag me-2">10-h</span>
                            </div>
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>P(12)</th>
                                        <th>C(10)</th>
                                        <th>B(6)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="manageClasses" title="Manage Classes">
                            <div className='buttonsContainer'>
                                <Link to="#!" className="myBtn secondary bordered">
                                    <img src={addIcon} alt="" className="me-2" />
                                    Add Student
                                </Link>
                                <Link to="#!" className="myBtn secondary bordered" onClick={handleDeleteStudent}>
                                    <img src={trashIcon} alt="" className="me-2" />
                                    Remove Student
                                </Link>
                            </div>
                            <Table responsive="sm" className='mt-4'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>#</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>001</td>
                                        <td>Doris Wilson</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </div>
            </Page>
        </>
    )
}
