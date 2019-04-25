import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, 
         createStore, 
         applyMiddleware,
         combineReducers } from 'redux'
import { HashRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import app from './Containers/App/redux/reducer/index.js'
import menu from './Containers/Menu/redux/reducer/index.js'
import App from './Containers/App/view/App.jsx'

let rootReducer = combineReducers({
  app,
  menu
});

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
