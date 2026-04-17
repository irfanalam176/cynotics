import React from 'react'
import Page from './Page'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TeacherChemistry() {
    return (
        <Page roundedLG={true} pageTitle={"002 Amy Smith"}>
            <div className="chemistrySection">
                <div className="py-3 mb-3 fw-medium text-center text-uppercase">
                    Chemistry
                </div>
                <ListGroup>
                    <Link to={"/teacher/self-check"}>
                        <ListGroup.Item>1. Cl, Br, I ions</ListGroup.Item>
                    </Link>
                    <ListGroup.Item>2. Identify type of reactions</ListGroup.Item>
                    <ListGroup.Item>3. Observe the reaction and classify them</ListGroup.Item>
                    <ListGroup.Item>4. Reactivity of metals</ListGroup.Item>
                    <ListGroup.Item>5. Oxidation and additional reaction</ListGroup.Item>
                </ListGroup>
            </div>
        </Page>
    )
}
