import React from 'react';
import ShoppingLogo from '../../assets/shopping-bag.svg';
import './cartIconStyles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';

class CartIcon extends React.Component<any> {

    render() {
        console.log("cartIcon: ", this.props);
        const { cartItemsCount } = this.props
        return (
            <div className='cart-icon' onClick={this.props.toggleCartHidden}>
                <ShoppingLogo className='shopping-icon' />
                <span className='item-count'> {cartItemsCount} </span>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }

}

const mapStateToProps = (state: any) => {
    return {
        cartItemsCount: selectCartItemsCount(state)

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);