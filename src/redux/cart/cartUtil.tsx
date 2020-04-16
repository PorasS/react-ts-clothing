export const addItemToCart = (cartItems: Array<any>, cartItemToAdd: any): Array<any> => {

    // const existingCartItem = cartItems.find(cartItem => cartItem.id == cartItemToAdd.id)

    console.log("existingCartItem: ", cartItems);

    for (let i = 0; i < cartItems.length; i++) {

        if (cartItems[i].id == cartItemToAdd.id) {

            return cartItems.map((cartItem) => cartItem.id == cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
        }
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

}

export const removeCartItem = (cartItems: Array<any>, itemToRemove: any) => {

    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id == itemToRemove.id) {
            if (cartItems[i].quantity > 1) {

                return cartItems.map((cartItem: any) =>
                    cartItem.id == itemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                )

            }
            cartItems.splice(i, 1);
            return [...cartItems];


        }
    }
    return [...cartItems];
}