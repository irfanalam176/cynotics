import React, { useState } from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'
import { ListGroup, Tab, Table, Tabs } from 'react-bootstrap'

import addIcon from "../assets/svg/add-icon.svg"
import trashIcon from "../assets/svg/trash-icon.svg"
import MyModal, { MyModalButtons, MyModalTitle } from '../components/myModal'


export default function Dashboard() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const closeModal = (confirmed) => {
        setShowModal1(false);
        if (confirmed) {
            setShowModal2(true);
        } else {
            alert("canceled")
        }
    };

    return (
        <>
            <MyModal showModal={showModal1} >
                <MyModalTitle className={"fw-medium"} title={"Are you sure to remove teacher from list"} />
                <MyModalButtons>
                    <Link className="myBtn primary" onClick={() => closeModal(true)}>
                        yes
                    </Link>
                    <Link className="myBtn primary" onClick={() => closeModal(false)}>
                        no
                    </Link>
                </MyModalButtons>
            </MyModal>
            <MyModal showModal={showModal2} >
                <MyModalTitle className={"fw-medium mb-3"} title={"Admin Password"} />

                <form action="" onSubmit={(e) => { e.preventDefault(); }}>
                    <input type="password" className='form-control py-2' placeholder='Admin Password' />
                    <input className="mt-3 myBtn primary w-100" type="submit" value="submit"
                        onClick={
                            () => {
                                setShowModal2(false)
                            }
                        } />
                </form>
            </MyModal>

            <Page roundedLG={true} pageTitle={"Dashboard"}>
                <div className="dashboardSection">
                    <Tabs
                        defaultActiveKey="teacher"
                        id="dashboardTabs"
                        className="mb-3 threeItemsTab"
                    >
                        <Tab eventKey="teacher" title="Teacher">
                            <div className='buttonsContainer'>
                                <Link to="/admin/add-teacher" className="myBtn secondary bordered">
                                    <img src={addIcon} alt="" className="me-2" />
                                    Add Teacher
                                </Link>
                                <Link to="#!" className="myBtn secondary bordered" onClick={() => setShowModal1(true)}>
                                    <img src={trashIcon} alt="" className="me-2" />
                                    Remove Teacher
                                </Link>
                            </div>
                            <ListGroup className='custom mt-2 gap-2 scrollY' style={{ maxHeight: "75vh" }}>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Doris Wilson
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Amy Smith
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    A. T. Whitecotton
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Doris Wilson
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Amy Smith
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    A. T. Whitecotton
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Doris Wilson
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Amy Smith
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    A. T. Whitecotton
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Doris Wilson
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Amy Smith
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    A. T. Whitecotton
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Doris Wilson
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Amy Smith
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    A. T. Whitecotton
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Doris Wilson
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    Amy Smith
                                    <input type="checkbox" />
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    A. T. Whitecotton
                                    <input type="checkbox" />
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab>

                        <Tab eventKey="classes" title="Classes">
                            <div className="tags scrollX mt-2">
                                <span className="tag me-2 active">10-A</span>
                                <span className="tag me-2">10-B</span>
                                <span className="tag me-2">10-c</span>
                                <span className="tag me-2">10-d</span>
                                <span className="tag me-2">10-e</span>
                                <span className="tag me-2">10-f</span>
                                <span className="tag me-2">10-g</span>
                                <span className="tag me-2">10-h</span>
                            </div>
                            <Table className='border tableMD' responsive="sm">
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
                                        <Link to={"/admin/chemistry"}>
                                            <td>Doris Wilson</td>
                                        </Link>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <Link to={"/admin/chemistry"}>
                                            <td>Doris Wilson</td>
                                        </Link>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <Link to={"/admin/chemistry"}>
                                            <td>Doris Wilson</td>
                                        </Link>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <Link to={"/admin/chemistry"}>
                                            <td>Doris Wilson</td>
                                        </Link>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <Link to={"/admin/chemistry"}>
                                            <td>Doris Wilson</td>
                                        </Link>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <Link to={"/admin/chemistry"}>
                                            <td>Doris Wilson</td>
                                        </Link>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                    <tr>
                                        <td>001</td>
                                        <Link to={"/admin/chemistry"}>
                                            <td>Doris Wilson</td>
                                        </Link>
                                        <td>6/6</td>
                                        <td>8/2</td>
                                        <td>3/3</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="manageClass" title="manage class">
                            <div className='buttonsContainer p-0'>
                                <Link to="/admin/create-class" className="myBtn secondary bordered">
                                    <img src={addIcon} alt="" className="me-2" />
                                    create class
                                </Link>
                                <Link to="/admin/edit-class" className="myBtn secondary bordered">
                                    <img src={addIcon} alt="" className="me-2" />
                                    edit class
                                </Link>
                                <Link to="/admin/delete-class" className="myBtn secondary bordered">
                                    <img src={trashIcon} alt="" className="me-2" />
                                    delete class
                                </Link>
                            </div>
                            <div className="scrollY mt-3" style={{ maxHeight: "75vh" }}>
                                <Table className='border tableMD' responsive="sm">
                                    <thead>
                                        <tr className='text-center'>
                                            <th className='text-uppercase'>Class</th>
                                            <th className='text-uppercase'>teacher</th>
                                            <th className='text-uppercase'>strength</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [...Array(7)].map((e) => {
                                                return (<>
                                                    <tr className='text-center'>
                                                        <td>10-A</td>
                                                        <Link to={"/admin/chemistry"}>
                                                            <td>Doris Wilson</td>
                                                        </Link>
                                                        <td>75</td>
                                                    </tr>
                                                    <tr className='text-center'>
                                                        <td>002</td>
                                                        <Link to={"/admin/chemistry"}>
                                                            <td>Amy Smith</td>
                                                        </Link>
                                                        <td>78</td>
                                                    </tr>
                                                    <tr className='text-center'>
                                                        <td>003</td>
                                                        <Link to={"/admin/chemistry"}>
                                                            <td>Sarah Norris</td>
                                                        </Link>
                                                        <td>45</td>
                                                    </tr>
                                                </>)
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </Page>
        </>
    )
}
