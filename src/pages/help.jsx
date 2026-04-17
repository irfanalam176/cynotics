import React from 'react'
import Page from './Page'
import { Col, Container, Row } from 'react-bootstrap'
import helpImage from "../assets/svg/help.svg"
import { Link } from 'react-router-dom'

export default function Help() {
    return (
        <Page roundedLG={true} pageTitle={"help"} showProfileImage={false}>
            <Container>
                <Row>
                    <Col lg={12} className='mt-4 text-center'>
                        <img src={helpImage} alt="" />
                    </Col>
                    <Col lg={12} className='mt-5 text-center'>
                        <span className='text-uppercase'>Helpline Number</span>
                    </Col>
                    <Col lg={12} className='mt-3 d-flex'>
                        <Link to={"#!"} className='myBtn primary w-100 py-3'>
                            +91 9987654321
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Page>
    )
}
