import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

export default function Page({ pageTitle, roundedLG=false, showProfileImage=true, children }) {
    return (
        <>
            <Sidebar />
            <div className="page">
                <Navbar pageTitle={pageTitle} showProfileImage={showProfileImage} />
                <div className={`mainSection ${roundedLG && "roundedLG"}`}>
                    {children}
                </div>
            </div>
        </>
    )
}
