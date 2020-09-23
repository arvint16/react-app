import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Dashboard from '../component/dashboard';
import store from '../store';

class DashboardContainer extends Component {
  render(){
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

export default DashboardContainer;