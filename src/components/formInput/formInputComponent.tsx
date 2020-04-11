import React, { FormHTMLAttributes } from 'react';
import './formInputStyle.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {

    // { name, type, value, handleChange, label }
    // 
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}></input>
            {
                label ? (
                    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label  `}>
                        {label}
                    </label>
                ) : null
            }
        </div>
    );
}

export default FormInput;