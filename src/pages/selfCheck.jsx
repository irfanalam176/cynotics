import React, { useState } from 'react'
import Page from './Page'
import { Col, Row } from 'react-bootstrap'
import doneIcon from "../assets/svg/done.svg"
import closeIcon from "../assets/svg/close-icon.svg"
import CommentModal from '../components/commentModal'

export default function TeacherSelfCheck() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = (confirmed) => {
        setShowModal(false);
        // Handle the confirmed value (true or false) here according to your logic
        if (confirmed) {
            // Perform action for "Yes" option
        } else {
            // Perform action for "No" option
        }
    };
    return (
        <>
            <CommentModal showModal={showModal} closeModal={closeModal} />
            <Page roundedLG={true} pageTitle={"002 Amy Smith"}>
                <div className="selfCheckSecion">
                    <div className="text-center fw-medium">
                        Experiment-1 Cl, Br, I ions
                    </div>
                    <div className="text-center">
                        Score of Experiment: <span className='fw-medium textPrimary'>35</span>
                    </div>
                    <div className='mt-4'>
                        1. Due to mitosis, the number of chromosomes in the cell
                        <br /><span className="blank red">reduces by half so</span>
                        therefore, this division occurs in
                        <br /><span className="blank green">parent</span> cells.
                    </div>
                    <div className="mt-3">
                        <div className="alert alert-success border-0">
                            Due to mitosis, the number of chromosomes in the cell <span>remains the same</span> therefore, this division occurs in <span>parent</span> cells.
                        </div>
                    </div>
                    <div className='mt-4'>
                        2.Due to mitosis, the number of chromosomes in the cell
                        <br /><span className="blank red">incorrect answer</span>
                        so this division occurs in
                        <br /><span className="blank red">incorrect answer</span> cells.
                    </div>
                    <div className="mt-3">
                        <div className="alert alert-success border-0">
                            Due to mitosis, the number of chromosomes in the cell <span>remains the same</span> therefore, this division occurs in <span>parent</span> cells.
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2 pb-5 mb-5">
                        <Row className='d-flex align-items-center'>
                            <Col xs="3">
                                Stage 1
                            </Col>
                            <Col xs="9">
                                <div className="alert alert-success bg-none p-2">
                                    <span>Interphase</span>
                                    <div className="ms-auto">
                                        <img src={doneIcon} alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='d-flex align-items-center'>
                            <Col xs="3">
                                Stage 2
                            </Col>
                            <Col xs="9">
                                <div className="alert alert-success bg-none p-2">
                                    <span>Prophase</span>
                                    <div className="ms-auto">
                                        <img src={doneIcon} alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='d-flex align-items-center'>
                            <Col xs="3">
                                Stage 3
                            </Col>
                            <Col xs="9">
                                <div className="alert alert-danger bg-none p-2">
                                    <span>Late</span>
                                    <div className="ms-auto">
                                        <img src={closeIcon} alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3"></Col>
                            <Col xs="9">
                                <div className="text-center mb-2" style={{ fontSize: "12px" }}>
                                    Your Correct answer  <span className='textGreen'>Late Prophase</span>
                                </div>
                            </Col>
                        </Row>
                        <Row className='d-flex align-items-center'>
                            <Col xs="3">
                                Stage 4
                            </Col>
                            <Col xs="9">
                                <div className="alert alert-success bg-none p-2">
                                    <span>Metaphase</span>
                                    <div className="ms-auto">
                                        <img src={doneIcon} alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Page>
        </>
    )
}
