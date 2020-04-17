import React from 'react';
import './collectionItemStyles.scss';
import CustomButton from '../customButton/customButtonComponent';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import { selectCartItems } from '../../redux/cart/cartSelector';



class CollectionItem extends React.Component<any> {

    addCartItem = (): void => {
        this.props.addItem(this.props.item)
    }
    render() {
        const { name, imageUrl, price } = this.props.item;
        console.log("collection Items: ", this.props);
        return (
            <div className='collection-item'>
                <div className='image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
                </div>
                <CustomButton type='' value='' onClick={this.addCartItem} isGoogleSignIn='' inverted='true' >ADD TO CART</CustomButton>
            </div >
        );
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        addItem: (item: any) => { dispatch(addItem(item)) }
    }
}

const mapStateToProps = (state: any): any => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);