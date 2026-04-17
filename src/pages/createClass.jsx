import React, { useState } from 'react'
import Page from './Page'
import { Col, Row } from 'react-bootstrap';
import MyModal, { MyModalButtons, MyModalTitle } from '../components/myModal';
import { Link } from 'react-router-dom';

export default function CreateClass() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // at the end
        setShowModal(true);
    }
    return (
        <>
            <MyModal showModal={showModal}>
                <MyModalTitle title={"Class Created Successfully"} />
                <MyModalButtons className={"mt-5"}>
                    <Link to={"#!"} className='myBtn primary' onClick={()=>{setShowModal(false)}}>ok</Link>
                </MyModalButtons>
            </MyModal>
            <Page roundedLG={false} pageTitle={"Add Teacher"}>
                <div className="py-2">
                    <Row>
                        <Col xs="11" className='mx-auto'>
                            <form action="" className='d-flex flex-column gap-3' onSubmit={handleSubmit}>
                                <input type="text" className="form-control" placeholder="Enter Class Category" />
                                <input type="text" className="form-control" placeholder="Enter Class Division" />
                                <select className="form-control" name="" id="">
                                    <option disabled selected>
                                        Select Teacher
                                    </option>
                                    <option value="1">Teacher 1</option>
                                    <option value="2">Teacher 2</option>
                                    <option value="3">Teacher 3</option>
                                    <option value="4">Teacher 4</option>
                                </select>
                                <div className="bottomSection">
                                    <input type='submit' className='myBtn primary py-3 w-100' value={"Cerate Class"} />
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Page>
        </>
    )
}
