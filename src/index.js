import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import bibleReducer from './reducer';
import { fetchAllPosts } from './action';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  bibleReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchAllPosts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
