import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Logo from '../components/logo'
import loginVector from "../assets/svg/login-vector.svg";
import microscopeImage from "../assets/svg/microscope.svg";
import { Link } from 'react-router-dom';

export default function AdminLogin() {
    return (
        <>
            <div className='position-absolute' style={{ zIndex: -999 }}>
                <img src={loginVector} alt="" />
            </div>
            <div style={{ height: "20em" }}>
                <Logo />
            </div>
            <Container className='px-0 pt-5'>
                <Row>
                    <Col sm={"12"}>
                        <div className="myContainer" style={{ paddingTop: "7em", minHeight: "calc(100vh - 336px)" }}>
                            <div className="containerImage">
                                <div className="bg"></div>
                                <div className="img">
                                    <img src={microscopeImage} alt="" />
                                </div>
                            </div>
                            <div className="title fw-bold mb-5">
                                Admin Login
                            </div>
                            <div className="form">
                                <Form action="/admin/code-verification" method='get'>
                                    <Form.Control type='text' placeholder='User Name' />
                                    <Form.Control className='my-3' type='password' placeholder='Password' />
                                    <Link className="d-block text-end text-muted mb-3" to="/admin/forgot-password">Forgot Password?</Link>
                                    <Form.Control className='myBtn primary' type='submit' value={"Login"} />
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
