import React from 'react'
import profileImage from "../assets/profile.png";
import { useNavigate } from 'react-router-dom';
import sidebarToggle from './sidebarToggler';

export default function Navbar({ pageTitle, showProfileImage, isGoBack = false }) {
    const navigate = useNavigate();

    // const handleNavigation = ()=>{
    //     navigate(-1);
    // }
    const handleSidebarToggle = () => {
        sidebarToggle();
    }
    return (
        // adding props to navbar
        <div className='myNavbar'>
            <div className="menuIcon" onClick={handleSidebarToggle}>
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div className="navbarTitle">{pageTitle}</div>
            <div className={`profileImage ${showProfileImage?'opacity-1' :'opacity-0'}`}>
                <img src={profileImage} alt="" />
            </div>
        </div>
    )
}
