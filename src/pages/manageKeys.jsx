import React, { useState } from 'react'
import Page from './Page'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ManageKeys() {
    const [show, setShow] = useState(false);
    function ToggleVisibility() {
        setShow(!show);
    }
    return (
        <Page roundedLG={true} pageTitle={"manage keys"} showProfileImage={false}>
            <Container className='manageKeysSection'>
                <Tabs
                    defaultActiveKey="generateKeys"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="generateKeys" title="Generate Keys">
                        <div className="py-2">
                            {
                                !show &&
                                <>
                                    <div className="numberOfKeys">
                                        <input type="text" value={30} />
                                        <div className="text" >
                                            Total number of keys
                                        </div>
                                        <div className="opButtons">
                                            <Link to={"#!"}>+</Link>
                                            <span></span>
                                            <Link to={"#!"}>-</Link>
                                        </div>
                                    </div>
                                    <div className="bottomSection">
                                        <div to={"#!"} className="subTotal">
                                            Subtotal: 5000
                                        </div>
                                        <Link to={"#!"} className='myBtn primary py-3 w-100' onClick={ToggleVisibility}>next</Link>
                                    </div>
                                </>
                            }

                            {show &&
                                <>
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <td className='text-uppercase'>
                                                    no. of keys
                                                </td>
                                                <td className='fw-medium text-uppercase text-end'>
                                                    4000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='text-uppercase'>
                                                    gst
                                                </td>
                                                <td className='fw-medium text-uppercase text-end'>
                                                    1000
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th className='text-uppercase'>
                                                    Total
                                                </th>
                                                <th className='text-uppercase text-end'>
                                                    5000
                                                </th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div className="mt-4 d-flex flex-column align-items-center gap-3">
                                        <Link to={'#!'} className='myBtnOutline primary w-100'>
                                            Discount Code
                                        </Link>
                                        <Link to={'#!'} className='myBtn primary py-3 w-50' onClick={ToggleVisibility}>
                                            apply
                                        </Link>
                                    </div>
                                    <div className="bottomSection">
                                        <Link to={"#!"} className='myBtn primary py-3 w-100' onClick={ToggleVisibility}>Pay</Link>
                                    </div>
                                </>
                            }
                        </div>

                    </Tab>
                    <Tab eventKey="purchasedKeys" title="Purchased Keys">
                        <div className="py-2 scrollY" style={{maxHeight:"70vh"}}>
                            <table className='table border tableMD'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='text-uppercase'>
                                            Keys
                                        </th>
                                        <th className='text-uppercase'>
                                            Purchased on
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [...Array(16)].map((e) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td className='text-uppercase'>
                                                        45224524
                                                    </td>
                                                    <td className='fw-medium text-uppercase'>
                                                        10/05/2023
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className="bottomSection">
                                <Link to={"#!"} className='myBtn primary py-3 w-100'>Next</Link>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </Page>
    )
}
