import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import loginasImage from "../assets/svg/loginas-vector.svg"
import BGVectors from '../components/BGVectors';
import Logo from '../components/logo';
import { Link } from 'react-router-dom';


export default function SplashScreen2() {
  return (
    <>
    <BGVectors />
    <Logo />
    <Container>
      <Row className='py-5'>
        <Col sm={"12"} className='text-center'>
          <img src={loginasImage} alt="" />
        </Col>
      </Row>
      <Row>
        <Col sm={"12"}>
            <Link to="/teacher/login" className="myBtn white d-block">Login as a teacher</Link>
        </Col>
        <Col sm={"12"}>
            <Link to="/admin/login" className="myBtn white d-block mt-4">Login as a admin</Link>
        </Col>
      </Row>
    </Container>
    </>

  )
}
