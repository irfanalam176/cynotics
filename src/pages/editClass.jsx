import React, { useState } from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'
import { Form, InputGroup, Table } from 'react-bootstrap'
import addIcon from "../assets/svg/add-icon.svg"
import trashIcon from "../assets/svg/trash-icon.svg"
import StudentDeleteModal from '../components/studentDeleteModal'
import MyModal, { MyModalTitle } from '../components/myModal'

export default function EditClass() {
    const [showModal, setShowModal] = useState(false);
    const [editTeacherModal, SetEditTeacherModal] = useState(false);

    const handleDeleteStudent = () => {
        setShowModal(true);
    };

    const closeModal = (confirmed) => {
        setShowModal(false);
        if (confirmed) {
            // Perform action for "Yes" option
        } else {
            // Perform action for "No" option
        }
    };



    return (
        <>
            <StudentDeleteModal showModal={showModal} closeModal={closeModal} />
            <MyModal showModal={editTeacherModal}>
                <MyModalTitle className={"fw-medium"} title={"Edit Teacher"} />

                <div className="mt-4 d-flex flex-column gap-3 px-3">
                    <Link to={"/admin/edit-teacher"} className='myBtn secondary bordered rounded-3'>
                        <i class="icon bg-primary fa-solid fa-trash"></i>
                        Remove teacher
                    </Link>
                    <Link to={"/admin/edit-teacher"} className='myBtn secondary bordered rounded-3'>
                        <i class="icon bg-primary fa-solid fa-recycle"></i>
                        replace teacher
                    </Link>
                </div>
            </MyModal>
            <Page roundedLG={true} pageTitle={"edit class"}>
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
                    <InputGroup className="mb-3">
                        <Form.Control value={"Asha Jain"} />
                        <InputGroup.Text className='bg-primary' onClick={()=>{SetEditTeacherModal(true)}}>
                            <i class="fa-solid fa-pen"></i>
                        </InputGroup.Text>
                    </InputGroup>
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
                    <div className="scrollY mt-3" style={{ maxHeight: "65vh" }}>
                        <Table responsive="sm" className='border tableMD'>
                            <thead>
                                <tr>
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
                                                <tr>
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
                </div>
            </Page>
        </>
    )
}
