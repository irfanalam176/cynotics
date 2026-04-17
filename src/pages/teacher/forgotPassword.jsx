import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import forgotVector from "../../assets/svg/forget-vector.svg";

export default function TeacherForgotPassword() {
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
                                Forgot <span>Password</span>
                            </div>
                            <div className="descText">
                            Enter the email address associated with your account.
                            </div>
                            <div className="form" >
                                <Form action="email-verification">
                                    <Form.Control className='my-4' type='email' placeholder='Email Id' />
                                    <Form.Control className='myBtn primary' type='submit' value={"Reset password"} />
                                    <div className="text-center text-muted pt-4">
                                        Don’t have an account? <a href="#!" className="text-primary fw-bold text-uppercase">SignUp</a>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
