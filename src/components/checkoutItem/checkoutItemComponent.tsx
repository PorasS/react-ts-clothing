import React from 'react';

import './checkoutItemStyles.scss';

class CheckOutItem extends React.Component<any>{

    render() {
        console.log("checkOutItem props: ", this.props);
        const { name, imageUrl, price, quantity } = this.props.item;
        return (
            <div className="checkout-item">
                <div className="image-container">
                    <img src={imageUrl} alt='item'></img>
                </div>
                <span className="name">{name}</span>
                <span className="quantity">{quantity}</span>
                <span className="price">{price}</span>
                <div className="remove-button">&#10008;</div>
            </div>
        );
    }

}

export default CheckOutItem;