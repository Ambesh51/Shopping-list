import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';
// import store from '../src/redux/store'
import Rootreducer from  './redux/reducers/index'
import {Provider} from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// console.log(store);
import {  compose } from 'redux';  //use applymiddleware so, we actually bind this middleware to redux
import { applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root', 
  storage,
}
 






const persistedReducer = persistReducer(persistConfig, Rootreducer)
// let store = createStore(persistedReducer)


 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer, 
  composeEnhancers( applyMiddleware(thunk))
  // we have integrated a store with redux & redux-thunk
);

let persistor = persistStore(store)






ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store} >
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

