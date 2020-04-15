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
