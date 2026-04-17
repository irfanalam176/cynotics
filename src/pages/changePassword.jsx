import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import forgotVector from "../assets/svg/forget-vector.svg";

export default function ChangePassword() {
    return (
        <>
            <div className='text-center pt-4'>
                <img src={forgotVector} alt="forget vector" />
            </div>
            <Container className='px-0 pt-5'>
                <Row>
                    <Col sm={"12"}>
                        <div className="myContainer" style={{minHeight: "calc(100vh - 276px)"}}>
                            <div className="title">
                                create new <span>Password</span>
                            </div>
                            <div className="form mt-3">
                                <Form action="/admin/login">
                                    <Form.Control className='my-4' type='passwrod' placeholder='New Password' />
                                    <Form.Control className='my-4' type='passwrod' placeholder='Confirm Password' />
                                    <Form.Control className='myBtn primary' type='submit' value={"Submit"} />
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
