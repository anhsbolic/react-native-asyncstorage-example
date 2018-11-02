import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const LoginStackNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default LoginStackNavigator;