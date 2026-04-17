import React, { useState, useEffect } from 'react';


export default function MyModal({ children, showModal, className=NaN }) {
    const [isShow, setIsShow] = useState(showModal);

    useEffect(() => {
        setIsShow(showModal);
    }, [showModal]);
    return (
        <div className={`myModal ${isShow ? 'show' : ''}`}>
            <div className={`myModalBody w-75 ${className}`}>
                {children}
            </div>
        </div>
    );
}
export const MyModalTitle = ({ title, className }) => {
    return (
        <div className={`myModalText ${className}`}>{title}</div>
    )

}
export const MyModalButtons = ({children, className}) => {
    return (
        <div className={`myModalButtons mt-3 ${className}`}>
            {children}
        </div>
    )
}
