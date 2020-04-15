import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../customButton/customButtonComponent';
import './cartDropDownStyles.scss';
import CartItem from '../cartItem/cartItemComponent';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cartActions';

class CartDropDown extends React.Component<any>{

    handleOnClick = () => {
        this.props.history.push("/checkout");
        this.props.dispatch(toggleCartHidden());
    }

    render() {
        console.log("cartItems in CartDropDown: ", this.props)
        const { cartItems } = this.props;
        return (
            <div className='cart-dropdown'>
                <div className='cart-items'>
                    {
                        cartItems.length ?
                            cartItems.map((item: any) => {
                                return (
                                    <CartItem key={item.id} item={item} />
                                );

                            }) :
                            <span className='empty-message'>Feed Your Cart</span>
                    }
                </div>
                <CustomButton onClick={this.handleOnClick} > Go to CheckOut</CustomButton>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        cartItems: selectCartItems(state)
    }
}


export default withRouter(connect(mapStateToProps)(CartDropDown));

