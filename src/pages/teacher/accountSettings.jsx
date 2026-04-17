import React from 'react'
import Page from './Page'
import profileImage from "../../assets/profile.png";
import cameraImage from "../../assets/svg/camera-icon.svg";
import { Container } from 'react-bootstrap';

export default function TeacherAccountSettings() {
    return (
        <Page pageTitle={"My Account Settings"}>
            <Container>
                <form className='accountSettings' action="">
                    <div className="profileImage">
                        <img src={profileImage} alt="" className='img' />
                        <img src={cameraImage} alt="" className="stackIcon" />
                    </div>
                    <div className="d-flex flex-column gap-3" style={{paddingTop:"2.7em"}}>
                        <input className="form-control" type="text" placeholder='User Name' />
                        <input className="form-control" type="email" placeholder='Email Id' />
                        <input className="form-control" type="text" placeholder='Date of Birth' />
                        <input className="form-control" type="text" placeholder='Phone Number' />
                        <input className="myBtn primary" type="submit" value="save and change" />
                    </div>
                </form>
            </Container>
        </Page>
    )
}
