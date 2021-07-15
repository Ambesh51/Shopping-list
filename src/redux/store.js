import { createStore, applymiddleware, compose } from 'redux';  //use applymiddleware so, we actually bind this middleware to redux

import reducers from './reducers/index';
import thunk from 'redux-thunk';

//compose we are using middleware so we need modification
 // Advanced store setup 
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, 
  composeEnhancers(applymiddleware(thunk))
  // we have integrated a store with redux & redux-thunk
);

export default store