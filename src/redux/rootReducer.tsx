import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directoryRedux/directoryReducer';
import shopDataReducer from './shopRedux/shopReducer';

//here whitlist takes a array of reducer, which we want to persist, user is already persisted by firebase,
//therefore, we are only passing the cart which is cartReducer.
const persistconfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shopData: shopDataReducer
    }
);

export default persistReducer(persistconfig, rootReducer);
