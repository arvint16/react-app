import React from 'react'
import { render } from 'react-dom'
import { Router,Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import LoginContainer from './container/login-container'
import DashboardContainer from '../src/container/dashboard-container'
import rootReducer from './reducer/index'
import './index.css';

const history = createBrowserHistory()
const store = createStore(rootReducer)

render(
  <Provider store={store}>
  <Router history={history}>
        <Route exact path="/" component={LoginContainer} />
        <Route  path="/dashboard" component={DashboardContainer} />
</Router>
  </Provider>,
  document.getElementById('root')
)
