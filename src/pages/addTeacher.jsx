import React from 'react'
import Page from './Page'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

export default function AddTeacher() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    return (
        <Page roundedLG={false} pageTitle={"Add Teacher"}>
            <div className="py-2">
                <Row>
                    <Col xs="11" className='mx-auto'>
                        <form action="" className='d-flex flex-column gap-3' onSubmit={handleFormSubmit}>
                            <input type="text" className="form-control" placeholder="Teacher's Name" />
                            <input type="email" className="form-control" placeholder="Teacher's Email Id" />
                            <input type="text" className="form-control" placeholder='Date Of Birth' />
                            <input type="text" className="form-control" placeholder="Teacher's Phone Number" />
                            <div className="bottomSection">
                                <Link to={"/admin/assign-class"} className='myBtn primary py-3 w-100'>
                                    Cerate Profile
                                </Link>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Page>
    )
}
