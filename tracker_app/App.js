import React from 'react';

import ProfileScreen from './src/screens/ProfileScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/contexts/AuthContext';

import { setNavigator } from './src/navigationRef';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';

const loginFlow = createStackNavigator({
  // SignUp: {
  //   screen: SignupScreen,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  SignUp: SignupScreen,
  SignIn: SigninScreen,
});

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

const mainFlow = createBottomTabNavigator({
  trackListFlow,
  TrackCreate: TrackCreateScreen,
  Profile: ProfileScreen,
});

const switchContainer = createSwitchNavigator({
  Splash: SplashScreen,
  loginFlow,
  mainFlow
});

const App = createAppContainer(switchContainer);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
  )

}
