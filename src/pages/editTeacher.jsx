import React, { useState } from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'
import { Col, Row, Table } from 'react-bootstrap'
import MyModal, { MyModalButtons, MyModalTitle } from '../components/myModal'

export default function EditTeacher() {
    const [replaceTeacherModal, setReplaceTeacherModal] = useState(false);
    const [removeTeacherModal, SetRemoveTeacherModal] = useState(false);

    const closeReplaceTeacherModal = (confirmed) => {
        setReplaceTeacherModal(false);
        if (confirmed) {
            // Perform action for "Yes" option
        } else {
            alert("replace canceled")
            // Perform action for "No" option
        }
    };
    const closeRemoveTeacherModal = (confirmed) => {
        SetRemoveTeacherModal(false);
        if (confirmed) {
            // Perform action for "Yes" option
        } else {
            alert("remove canceled")
            // Perform action for "No" option
        }
    };



    return (
        <>
            {/* REPLACE MODAL */}
            <MyModal showModal={replaceTeacherModal}>
                <MyModalTitle className={"fw-medium"} title={"Are you sure to Replace Teacher?"} />
                <MyModalButtons>
                    <Link to={"#YES"} className='myBtn primary' onClick={() => closeReplaceTeacherModal(true)}>
                        yes
                    </Link>
                    <Link to={"#NO"} className='myBtn primary' onClick={() => closeReplaceTeacherModal(false)}>
                        no                    </Link>
                </MyModalButtons>
            </MyModal>

            {/* REMOVE MODAL */}
            <MyModal showModal={removeTeacherModal}>
                <MyModalTitle className={"fw-medium"} title={"Are you sure to Remove Teacher?"} />
                <MyModalButtons>
                    <Link to={"#YES"} className='myBtn primary' onClick={() => closeRemoveTeacherModal(true)}>
                        yes
                    </Link>
                    <Link to={"#NO"} className='myBtn primary' onClick={() => closeRemoveTeacherModal(false)}>
                        no
                    </Link>
                </MyModalButtons>
            </MyModal>

            <Page roundedLG={true} pageTitle={"edit teacher"}>
                <div className="dashboardSection">
                    <div className='buttonsContainer'>
                        <Link to="#!" className="myBtn secondary bordered" onClick={() => SetRemoveTeacherModal(true)}>
                            <i className="icon bg-primary fa-solid fa-trash"></i>
                            Remove Teacher
                        </Link>
                        <Link to="#!" className="myBtn secondary bordered" onClick={() => setReplaceTeacherModal(true)}>
                            <i className="icon bg-primary fa-solid fa-recycle"></i>
                            Replace Teacher
                        </Link>
                    </div>
                    <div className="scrollY mt-3" style={{ maxHeight: "80vh" }}>
                        <Row>
                            <Col xs="9" className='mx-auto'>
                                <Table responsive="sm" className='border tableMD'>
                                    <thead>
                                        <tr className='text-center'>
                                            <th></th>
                                            <th>Teacher Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [...Array(21)].map((e, i) => {
                                                return (
                                                    <>
                                                        <tr className='text-center'>
                                                            <td><input type="checkbox" /></td>
                                                            <td>Doris Wilson</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Page>
        </>
    )
}
