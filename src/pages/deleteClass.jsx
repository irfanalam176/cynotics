import React, { useState } from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'
import MyModal, { MyModalButtons, MyModalTitle } from '../components/myModal';

export default function DeleteClass() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const closeModal = (confirmed) => {
        setShowModal1(false);
        if (confirmed) {
            setShowModal2(true);
        } else {
            // alert("canceled")
        }
    };



    return (
        <>
            <MyModal showModal={showModal1} >
                <MyModalTitle className={"fw-medium"} title={"Are you sure to Delete Class?"} />
                <MyModalButtons>
                    <Link className="myBtn primary" onClick={() => closeModal(true)}>
                        yes
                    </Link>
                    <Link className="myBtn primary" onClick={() => closeModal(false)}>
                        no
                    </Link>
                </MyModalButtons>
            </MyModal>
            <MyModal showModal={showModal2} >
                <MyModalTitle className={"fw-medium mb-3"} title={"Admin Password"} />

                <form action="" onSubmit={(e) => { e.preventDefault(); }}>
                    <input type="password" className='form-control py-2' placeholder='Admin Password' />
                    <input className="mt-3 myBtn primary w-100" type="submit" value="submit"
                        onClick={
                            () => {
                                setShowModal2(false)
                            }
                        } />
                </form>
            </MyModal>
            <Page roundedLG={false} pageTitle={"Delete Class"} showProfileImage={false}>
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
                    <Link to={"#!"} className='myBtn primary py-3 w-100' onClick={()=>setShowModal1(true)}>
                        Delete Class
                    </Link>
                </div>
            </Page>
        </>
    )
}
