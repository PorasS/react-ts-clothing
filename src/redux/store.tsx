import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import rootReducer from './rootReducer';

// middlewares is an array
const middlewares = [logger];

//to create a store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

