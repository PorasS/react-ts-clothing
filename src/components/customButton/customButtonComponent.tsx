import React from 'react';

import './customButtonStyles.scss';

const CustomButton = ({ children, type, value }) => {
    return (
        <button className='custom-button' type={type} value={value}>
            {children}
        </button>
    );
}

export default CustomButton;