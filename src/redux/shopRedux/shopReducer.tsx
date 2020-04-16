import { IAction, collection } from "../../interfaces/interface";
import shopstate from "./shopState";

const INITIAL_STATE = {
    collections: shopstate
};

const shopDataReducer = (state = INITIAL_STATE, action: IAction) => {

    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default shopDataReducer;