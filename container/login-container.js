import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Login from '../component/login';
import store from '../store';

class LoginContainer extends Component {
  render(){
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

export default LoginContainer;