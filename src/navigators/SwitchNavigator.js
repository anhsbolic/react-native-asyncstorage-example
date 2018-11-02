import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import LoginStackNavigator from './LoginStackNavigator';
import HomeScreen from '../screens/HomeScreen';

const SwitchNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Login: LoginStackNavigator,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
  }
);

export default SwitchNavigator;