// import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';

const MainNavigator = StackNavigator({
  Main: { screen: MainScreen }
});

export default MainNavigator;
