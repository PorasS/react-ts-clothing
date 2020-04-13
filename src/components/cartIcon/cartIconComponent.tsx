import React from 'react';
import ShoppingLogo from '../../assets/shopping-bag.svg';
import './cartIconStyles.scss';

const CartIcon = () => {
    return (
        <div className='cart-icon'>
            <ShoppingLogo className='shopping-icon' />
            <span className='item-count'> 0 </span>
        </div>
    );
}

export default CartIcon;