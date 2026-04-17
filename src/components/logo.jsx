import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../assets/svg/logo.svg";


export default function Logo() {
    return (
        <Container className='logo'>
            <Row>
                <Col sm={"12"} className='text-center'>
                    <img src={logo} alt="" />
                </Col>
            </Row>
        </Container>
    )
}
