import React from 'react'
import { render } from 'react-dom'
import {
  createStore,
  applyMiddleware,
  combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import App from './components/App'
import contacts from './reducers/contacts'

const reducer = combineReducers({ contacts })
const store = createStore(
  reducer,
  {},
  applyMiddleware(createLogger({})))

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('contents'))
