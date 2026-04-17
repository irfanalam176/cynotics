import React, { useState } from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'
import MyModal, { MyModalButtons, MyModalTitle } from '../components/myModal'
import { Col, Row } from 'react-bootstrap';

export default function SelectedClass() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const closeModal = (confirmed) => {
        setShowModal1(false);
        // Handle the confirmed value (true or false) here according to your logic
        if (confirmed) {
            // alert("confirmed")
            setShowModal2(true);
        } else {
            alert("canceled")
        }
    };
    return (
        <>
            <MyModal showModal={showModal1} >
                <MyModalTitle title={"Are you sure you want to assign key(xyz, abc)"} />
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
                    <Row>
                        <Col xs={12} >
                            <input type="password" className='form-control py-2' placeholder='Admin Password' />
                        </Col>
                        <Col xs={9} className='mx-auto'>
                            <input className="mt-3 myBtn primary w-100" type="submit" value="submit"
                                onClick={
                                    () => {
                                        setShowModal2(false)
                                        setShowModal3(true)
                                    }
                                } />
                        </Col>
                    </Row>
                </form>
            </MyModal>

            <MyModal showModal={showModal3} >
                <MyModalTitle className={"fw-medium mb-3"} title={"Key Successfully Assigned"} />

                <MyModalButtons>
                    <Link className="mt-3 myBtn primary w-100" onClick={() => setShowModal3(false)} >
                        Okay
                    </Link>
                </MyModalButtons>
            </MyModal>

            <Page roundedLG={true} pageTitle={"10-A"}>
                <div className="py-3 scrollY" style={{ maxHeight: "80vh" }}>
                    <table className='table border tableMD'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    #
                                </th>
                                <th className='text-uppercase'>
                                    name
                                </th>
                                <th className='text-uppercase'>
                                    Teacher Name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [...Array(16)].map((e, i) => {
                                    return (
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                00{i + 1}
                                            </td>
                                            <td className='text-uppercase'>
                                                Doris Wilson
                                            </td>
                                            <td className='fw-medium text-uppercase'>
                                                Jason roy
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="bottomSection">
                    <Link to={"#!"} className='myBtn primary py-3 w-100' onClick={() => { setShowModal1(true) }}>Assign</Link>
                </div>

            </Page>
        </>
    )
}
