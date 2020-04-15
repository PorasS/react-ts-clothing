import { IAction } from '../../interfaces/interface';
import { cartActionTypes } from './cartTypes';

import { addItemToCart } from './cartUtil';
import { addItem } from './cartActions';

const INITIAL_STATE: any = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action: IAction) => {
    console.log("cart Reducer payload: ", action.payload);
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                // cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}

export default cartReducer;