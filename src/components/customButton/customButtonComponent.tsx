import React from 'react';

import './customButtonStyles.scss';

const CustomButton = ({ children, type, value, onClick, isGoogleSignIn, inverted }) => {
    return (
        <button className={`${inverted === 'true' ? 'inverted' : ''} ${isGoogleSignIn === 'true' ? 'google-sign-in' : ''} custom-button`} type={type} value={value} onClick={onClick} >
            {children}
        </button >
    );
}

export default CustomButton;