import React, { useState, useEffect } from 'react';

export default function StudentDeleteModal({ showModal, closeModal }) {
    const [isVisible, setisVisible] = useState(showModal);

    useEffect(() => {
        setisVisible(showModal);
    }, [showModal]);

    return (
        <div className={`myModal ${isVisible ? 'show' : ''}`}>
            <div className="myModalBody">
                <div className="myModalText">Are you sure you want to remove the student from the list?</div>
                <div className="myModalButtons mt-3">
                    <div className="myBtn primary" onClick={() => closeModal(true)}>
                        Yes
                    </div>
                    <div className="myBtn primary" onClick={() => closeModal(false)}>
                        No
                    </div>
                </div>
            </div>
        </div>
    );
}
