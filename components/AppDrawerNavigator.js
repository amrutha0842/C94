import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
//import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import WelcomeScreen from '../screens/WelcomeScreen';
import StartEarTestScreen from '../screens/StartEarTestScreen';
//import SettingScreen from '../screens/SettingScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : StartEarTestScreen,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  Feedback : {
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "feedback"
    }
  },
  Help : {
    //screen :InstructionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="bell" type ="font-awesome" />,
      drawerLabel : "Help"
    }
  },
 
  Setting : {
    //screen : SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })