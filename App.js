import React from 'react';
import { StyleSheet, Text, View,Image,TextInput, ImageBackground,StatusBar,TouchableOpacity } from 'react-native';
import {Card,Input} from 'react-native-elements';
import Constants from 'expo-constants';
import Login from './components/LoginComponent';
import Main from './components/MainComponent';
import Dashboard from './components/DashboardComponent';
import {createAppContainer,SafeAreaView, createSwitchNavigator} from 'react-navigation';

//import {GetStatusBar} from './components/StatusBarComponent';

console.warn = () => {}
 class App extends React.Component {

  render(){
    const Navigator = createAppContainer(LoginStackNavigator);
    return(
      <Navigator/>
    );
  }
 }

 const LoginStackNavigator = createSwitchNavigator(
  {
    Login: { screen: Login },
    Main: { screen: Main },
   // Dashboard: { screen: Dashboard },
  },
  {
      initialRouteName: 'Login',
  }
  
  );

 export default App;