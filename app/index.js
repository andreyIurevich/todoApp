import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { HashRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import mainReducer from './src/Welcome/redux/reducer'
import App from './Components/App/view/App.jsx'

let store = createStore(
  mainReducer,
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
