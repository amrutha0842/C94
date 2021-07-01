import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import StartEarTestScreen from './screens/StartEarTestScreen';
import AppDrawerNavigator from './components/AppDrawerNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';
import db from './config';

export default class App extends Component {
  render(){
  return (
     
      <AppContainer/>
    
  );
       }
   }

  var AppNavigator = createSwitchNavigator({
    WelcomeScreen: {screen: WelcomeScreen},
    StartEarTestScreen: {screen: StartEarTestScreen},
    Drawer: {screen: AppDrawerNavigator}
  })

  const AppContainer = createAppContainer(AppNavigator)
  
  