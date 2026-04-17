import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from "../assets/profile.png";
import sidebarToggle from './sidebarToggler';

export default function Sidebar({ teacher = false }) {
  const handleSidebarToggle = () => {
    sidebarToggle();
  }
  const prefix = teacher ? "/teacher" : "/admin";

  return (
    <div className='sidebar'>
      <div className="top" onClick={handleSidebarToggle}>
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div className="profileContent">
        <div className="profileImage">
          <img src={profileImage} alt="user's profile image" />
        </div>
        <div className="name">
          <p>Jhon seggale</p>
          <span>lorem ipsum</span>
        </div>
      </div>
      <div className="sidebarMenu">
        <Link to={`${prefix}/account-settings`} className='link active'>
          <i class="fa-solid fa-gear"></i>
          <span>My Account Setting</span>
        </Link>
        <Link to={`${prefix}/notifications`} className='link'>
          <i class="fa-solid fa-bell"></i>
          <span>notification</span>
        </Link>
        {
          !teacher &&
          <>
            <Link to={`${prefix}/help`} className='link'>
              <i class="fa-solid fa-circle-question"></i>
              <span>help</span>
            </Link>
            <Link to={`${prefix}/manage-keys`} className='link'>
              <i class="fa-brands fa-keycdn"></i>
              <span>manage keys</span>
            </Link>
          </>
        }
        <Link to={`${prefix}/privacy-policy`} className='link'>
          <i class="fa-solid fa-user-shield"></i>
          <span>privacy policy</span>
        </Link>
        <Link to={`${prefix}/terms-of-use`} className='link'>
          <i class="fa-solid fa-newspaper"></i>
          <span>terms of use</span>
        </Link>
      </div>
      <div className="logoutItem">
        <Link to={`#!`} className='link'>
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  )
}
