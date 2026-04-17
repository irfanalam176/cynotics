import React from 'react'
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar'

export default function Page({ pageTitle, roundedLG=false, children }) {
    return (
        <>
            <Sidebar teacher={true} />
            <div className="page">
                <Navbar pageTitle={pageTitle} />
                <div className={`mainSection ${roundedLG && "roundedLG"}`}>
                    {children}
                </div>
            </div>
        </>
    )
}
