import { shopDataActionTypes } from './shopDataActionTypes';

export const updateCollections = (collection: any) => {
    return {
        type: shopDataActionTypes.ADD_SHOP_DATA,
        payload: collection
    }
}