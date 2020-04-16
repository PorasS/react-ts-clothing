import React from 'react';

import './checkoutItemStyles.scss';
import { connect } from 'react-redux';
import { removeItem, reduceQuantity, addItem } from '../../redux/cart/cartActions';

class CheckOutItem extends React.Component<any>{

    render() {
        console.log("checkOutItem props: ", this.props);
        const { name, imageUrl, price, quantity } = this.props.item;
        const { item, reduceQuantity, addItem, removeItem } = this.props;
        return (
            <div className="checkout-item">
                <div className="image-container">
                    <img src={imageUrl} alt='item'></img>
                </div>
                <span className="name">{name}</span>
                <span className="quantity">
                    <div className="arrow" onClick={() => reduceQuantity(item)}>&#10094;</div>
                    {quantity}
                    <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
                </span>
                <span className="price">{price}</span>
                <div className="remove-button" onClick={() => removeItem(item)}>&#10008;</div>
            </div >
        );
    }

}

const mapDispatchToProps = (dispatch: any) => {

    return {
        removeItem: (cartItem: any) => dispatch(removeItem(cartItem)),
        reduceQuantity: (cartItem: any) => dispatch(reduceQuantity(cartItem)),
        addItem: (cartItem: any) => dispatch(addItem(cartItem))
    }
}

export default connect(null, mapDispatchToProps)(CheckOutItem);