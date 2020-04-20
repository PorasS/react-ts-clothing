import React from 'react';
import { connect } from 'react-redux';
import './checkoutStyles.scss';
import CheckOutItem from '../../components/checkoutItem/checkoutItemComponent';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector';
import StripeCheckoutButton from '../../components/stripe-button/stripeButtonComponent';


class CheckOutPage extends React.Component<any>{


    render() {
        const { cartItems, totalCost } = this.props;
        return (
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map((cartItem: any) => <CheckOutItem key={cartItem.id} item={cartItem} />)
                }
                <div className="total">
                    <span>Total: ${totalCost}</span>
                </div>
                <StripeCheckoutButton price={totalCost} />
            </div>
        );
    }


}

const mapStateToProps = (state: any) => {
    return {
        cartItems: selectCartItems(state),
        totalCost: selectCartTotal(state)
    }
}


export default connect(mapStateToProps)(CheckOutPage);