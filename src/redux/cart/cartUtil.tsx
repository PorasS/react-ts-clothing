export const addItemToCart = (cartItems: Array<any>, cartItemToAdd: any): Array<any> => {

    // const existingCartItem = cartItems.find(cartItem => cartItem.id == cartItemToAdd.id)

    console.log("existingCartItem: ", cartItems);

    for (let i = 0; i < cartItems.length; i++) {

        if (cartItems[i].id == cartItemToAdd.id) {
            const updatedCartItem = { ...cartItems[i], quantity: cartItems[i].quantity + 1 }; //done working
            // //removing the existingCartItem from the array
            // console.log("Before splice: ", cartItems);
            cartItems.splice(i, 1);
            // console.log("After splice: ", cartItems);
            // console.log("updated cart Items: ", updatedCartItem);
            // console.log("cartItemToAdd: ", cartItemToAdd);
            // console.log("cartItems[i]: ", cartItems[i]);
            return [...cartItems, updatedCartItem];
        }
    }


    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

}