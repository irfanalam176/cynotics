import React from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'

export default function AssignClass() {
    return (
        <>
            <Page roundedLG={false} pageTitle={"Assign Class"} showProfileImage={false}>
                <div className="tags flex-wrap gap-3">
                    <span className="tag py-3 active">10-A</span>
                    <span className="tag py-3">10-B</span>
                    <span className="tag py-3">10-c</span>
                    <span className="tag py-3">10-d</span>
                    <span className="tag py-3">10-e</span>
                    <span className="tag py-3">10-f</span>
                    <span className="tag py-3">10-g</span>
                    <span className="tag py-3">10-h</span>
                </div>
                <div className="bottomSection">
                    <Link to={"#!"} className='myBtn primary py-3 w-100'>Next</Link>
                </div>
            </Page>
        </>
    )
}
