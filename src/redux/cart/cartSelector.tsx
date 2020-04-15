import { createSelector } from 'reselect';


//takes the whole state (rootReducer) and return a slice of it
//we call it input selector
const selectCart = (state: any) => {
    return state.cart
}


export const selectCartItems = createSelector(
    [selectCart], //takes a array of input selectors, here we are having only one selector and it returns cart
    (cart) => cart.cartItems //passing cart from selectCart and returning a cartItems from it.
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], //returns cartItems from cart
    (cartItems) => {
        return cartItems.reduce((accumulatedQuantity: number, cartItem: any) =>
            accumulatedQuantity + cartItem.quantity, 0);
    }
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
            total = total + (cartItems[i].quantity * cartItems[i].price)
        }
        return total;
    }
);


