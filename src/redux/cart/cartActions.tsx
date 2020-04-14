import { cartActionTypes } from './cartTypes';
import { IAction } from '../../interfaces/interface';

const toggleCartHidden = (): IAction => {

    return {
        type: cartActionTypes.TOGGLE_CART_HIDDEN,
        payload: ''
    }


}

export default toggleCartHidden;