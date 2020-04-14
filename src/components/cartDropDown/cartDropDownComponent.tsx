import React from 'react';
import CustomButton from '../customButton/customButtonComponent';
import './cartDropDownStyles.scss';

const CartDropDown = () => {

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>Go to CheckOut</CustomButton>
        </div>
    );
}

export default CartDropDown;

