import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../customButton/customButtonComponent';
import './cartDropDownStyles.scss';
import CartItem from '../cartItem/cartItemComponent';
import { selectCartItems } from '../../redux/cart/cartSelector';

class CartDropDown extends React.Component<any>{
    render() {
        console.log("cartItems in CartDropDown: ", this.props)
        const { cartItems } = this.props;
        return (
            <div className='cart-dropdown'>
                <div className='cart-items'>
                    {
                        cartItems.map((item: any) => {
                            return (
                                <CartItem key={item.id} item={item} />
                            );

                        })
                    }
                </div>
                <CustomButton>Go to CheckOut</CustomButton>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropDown);

