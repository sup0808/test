import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import {View,Platform} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './HomeComponent';
import About from './AboutComponent';

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: {
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: "#fff"            
    }
}
}
);

const AboutNavigator = createStackNavigator({
  Home: { screen: About }

});

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
}
);
   
const MainNavigtor  = createDrawerNavigator({
  Home: {
      screen : HomeNavigator,
      navigationOptions:{
        title: 'Home',
      }
  },
  About :{
    screen : AboutNavigator,
    navigationOptions:{
      title  : 'About Us'
    }
  },
  Menu :{
    screen : MenuNavigator,
    navigationOptions:{
      title  : 'Menu'
    }
  }
  },
  {
    drawerBackgroundColor: '#D1C4E9'
  });


const Main = createAppContainer(MainNavigtor);
  
export default Main;