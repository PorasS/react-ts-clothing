import { IAction, collection } from "../../interfaces/interface";
import shopstate from "./shopState";
import { shopDataActionTypes } from './shopDataActionTypes';

const INITIAL_STATE = {
    collections: shopstate
};

const shopDataReducer = (state = INITIAL_STATE, action: IAction) => {

    switch (action.type) {
        case shopDataActionTypes.ADD_SHOP_DATA:
            return {
                ...state,
                collections: action.payload
            }
        default: {
            return state;
        }
    }
}

export default shopDataReducer;