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
import Contactus from './ContactComponent';

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
});

const AboutNavigator = createStackNavigator({
  Home: { screen: About }
  });


const ContactusNavigator = createStackNavigator({
  Contactus: { screen: Contactus }
});

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
});
   
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
  Contactus :{
    screen : ContactusNavigator,
    navigationOptions:{
      title  : 'Contact us'
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