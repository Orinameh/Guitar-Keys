import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import MainNavigator from './src/config/navigation';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}


// Banner placementID: 2009957729266899_2009971822598823
// Insterstitial placementID: 2009957729266899_2009974189265253
