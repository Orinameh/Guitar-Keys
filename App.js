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

