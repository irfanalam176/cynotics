import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import forgotVector from "../assets/svg/verify-vector.svg";

export default function CodeVerification() {
    return (
        <>
            <div className='text-center pt-4' style={{transform: "translateY(70px)"}}>
                <img src={forgotVector} alt="forget vector" />
            </div>
            <Container className='px-0 pt-5'>
                <Row>
                    <Col sm={"12"}>
                        <div className="myContainer" style={{ minHeight: "calc(100vh - 227px)" }}>
                            <div className="title mt-4">
                                Verification <span>Code</span>
                            </div>
                            <div className="descText">
                                Please enter the 4 digit code sent to
                                +91 96******02
                            </div>
                            <div className="form">
                                <Form action="/admin/dashboard">
                                    <div className="codeVerificationInputGroup py-3">
                                        <Form.Control type='number' value={4} />
                                        <Form.Control type='number' value={9} />
                                        <Form.Control type='number' />
                                        <Form.Control type='number' />
                                    </div>
                                    <div className="link mt-4 mb-3">
                                        <a href="">Resend Code</a>
                                    </div>
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
