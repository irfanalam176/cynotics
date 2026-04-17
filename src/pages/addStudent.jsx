import React, { useState } from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import MyModal, { MyModalButtons, MyModalTitle } from '../components/myModal'

export default function AddStudent() {
    const [addStudentModal, setAddStudentModal] = useState(false);
    const [removeStudentModal, SetRemoveStudentModal] = useState(false);

    const closeAddStudentModal = (confirmed) => {
        setAddStudentModal(false);
        if (confirmed) {
            // Perform action for "Yes" option
        } else {
            alert("replace canceled")
            // Perform action for "No" option
        }
    };
    const closeRemoveStudentModal = (confirmed) => {
        SetRemoveStudentModal(false);
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
            <MyModal showModal={addStudentModal}>
                <MyModalTitle className={"fw-medium"} title={"Are you sure you want to add this students?"} />
                <MyModalButtons>
                    <Link to={"#YES"} className='myBtn primary' onClick={() => closeAddStudentModal(true)}>
                        yes
                    </Link>
                    <Link to={"#NO"} className='myBtn primary' onClick={() => closeAddStudentModal(false)}>
                        no                    </Link>
                </MyModalButtons>
            </MyModal>

            {/* REMOVE MODAL */}
            <MyModal showModal={removeStudentModal}>
                <MyModalTitle className={"fw-medium"} title={"Are you sure you want to remove this students?"} />
                <MyModalButtons>
                    <Link to={"#YES"} className='myBtn primary' onClick={() => closeRemoveStudentModal(true)}>
                        yes
                    </Link>
                    <Link to={"#NO"} className='myBtn primary' onClick={() => closeRemoveStudentModal(false)}>
                        no
                    </Link>
                </MyModalButtons>
            </MyModal>

            <Page roundedLG={true} pageTitle={"10-A"}>
                <div className="dashboardSection">
                    <div className="scrollX tags mt-4">
                        <Link to={"#10-A"} className="tag me-2 active">10-A</Link>
                        <Link to={"#10-B"} className="tag me-2">10-B</Link>
                        <Link to={"#10-C"} className="tag me-2">10-c</Link>
                        <Link to={"#10-D"} className="tag me-2">10-d</Link>
                        <Link to={"#10-E"} className="tag me-2">10-e</Link>
                        <Link to={"#10-F"} className="tag me-2">10-f</Link>
                        <Link to={"#10-G"} className="tag me-2">10-g</Link>
                        <Link to={"#10-H"} className="tag me-2">10-h</Link>
                    </div>
                    <div className='buttonsContainer'>
                        <Link to="#!" className="myBtn secondary bordered" onClick={() => setAddStudentModal(true)}>
                            <i className="icon bg-primary fa-solid fa-plus"></i>
                            Add Student
                        </Link>
                        <Link to="#!" className="myBtn secondary bordered" onClick={() => SetRemoveStudentModal(true)}>
                            <i className="icon bg-primary fa-solid fa-trash"></i>
                            Remove Student
                        </Link>
                    </div>
                    <div className="scrollY mt-3" style={{ maxHeight: "65vh" }}>
                        <Table responsive="sm" className='border tableMD'>
                            <thead>
                                <tr className='text-center'>
                                    <th></th>
                                    <th>#</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [...Array(21)].map((e, i) => {
                                        return (
                                            <>
                                                <tr className='text-center'>
                                                    <td><input type="checkbox" /></td>
                                                    <td>00{i + 1}</td>
                                                    <td>Doris Wilson</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                    <div className="bottomSection">
                        <Link className='myBtn primary py-3 w-100' onClick={() => setAddStudentModal(true)}>
                            Add student
                        </Link>
                    </div>
                </div>
            </Page>
        </>
    )
}
