import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Ensure this is installed: npm install redux-thunk
import loremReducer from './reducer';

// Thunk middleware is required to handle the function returned by fetchData
const store = createStore(loremReducer, applyMiddleware(thunk));

export default store;