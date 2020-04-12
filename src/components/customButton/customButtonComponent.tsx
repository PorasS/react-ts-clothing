import React from 'react';

import './customButtonStyles.scss';

const CustomButton = ({ children, type, value, onClick, isGoogleSignIn }) => {

    return (
        <button className={`${isGoogleSignIn === 'true' ? 'google-sign-in' : ''} custom-button`} type={type} value={value} onClick={onClick} >
            {children}
        </button >
    );
}

export default CustomButton;