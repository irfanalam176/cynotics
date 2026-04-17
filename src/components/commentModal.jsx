import React, { useState, useEffect } from 'react';


export default function CommentModal({ showModal, closeModal }) {
    const [isVisible, setisVisible] = useState(showModal);

    useEffect(() => {
        setisVisible(showModal);
    }, [showModal]);

    return (
        <div className={`myModal ${isVisible ? 'show' : ''}`}>
            <div className="myModalBody">
                <div className="myModalText">Comment</div>
                <form action=''>
                    <textarea name="" id="" rows="10"></textarea>
                </form>
                <div className="myModalButtons mt-3">
                    <div className="myBtn primary" onClick={() => closeModal(true)}>
                        submit
                    </div>
                </div>
            </div>
        </div>
    );
}
