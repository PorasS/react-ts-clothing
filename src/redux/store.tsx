import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

// middlewares is an array
const middlewares = [logger];

//to create a store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;