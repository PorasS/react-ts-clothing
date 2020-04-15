import { createSelector } from 'reselect';


//takes the whole state (rootReducer) and return a slice of it
//we call it input selector
const selectCart = (state: any) => {
    return state.cart
}


export const selectCartItems = createSelector(
    [selectCart], //takes a array of input selectors, here we are having only one selector and it returns cart
    (cart) => cart.cartItems //passing cart from selectCart and returning a cartItems from it.
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], //returns cartItems from cart
    (cartItems) => {
        return cartItems.reduce((accumulatedQuantity: any, cartItem: any) =>
            accumulatedQuantity + cartItem.quantity, 0);
    }
)