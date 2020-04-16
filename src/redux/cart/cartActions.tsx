import { cartActionTypes } from './cartTypes';
import { IAction } from '../../interfaces/interface';

export const toggleCartHidden = (): IAction => {

    return {
        type: cartActionTypes.TOGGLE_CART_HIDDEN,
        payload: ''
    }


}

export const addItem = (item: any): IAction => {

    return {
        type: cartActionTypes.ADD_ITEM,
        payload: item
    }

}

export const removeItem = (cartItem: any): IAction => {
    return {
        type: cartActionTypes.REMOVE_ITEM,
        payload: cartItem
    }
}

export const reduceQuantity = (cartItem: any): IAction => {
    return {
        type: cartActionTypes.REDUCE_QUANTITY,
        payload: cartItem
    }
}