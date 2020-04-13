import { IAction } from "../../interfaces/interface";
import { userActionTypes } from "./userTypes";



export const setCurrentUser = (user: any): IAction => {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: user
    }
}
