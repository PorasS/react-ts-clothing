import React from 'react';

import './cartItemStyles.scss';

class CartItem extends React.Component<any> {
    render() {
        console.log("CartItem component: ", this.props);
        const { name, imageUrl, price, quantity } = this.props.item;
        return (
            <div className='cart-item'>
                <img src={imageUrl} alt='item'></img>
                <div className='item-details'>
                    <span className='name'>{name}</span>
                    <span>{quantity} * ${price}</span>
                </div>
            </div>
        );
    }
}

export default CartItem;