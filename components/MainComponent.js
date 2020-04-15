import React, { Component } from 'react';
import Menu from './MenuComponent';

import Dishdetail from './DishdetailComponent';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,SafeAreaView} from 'react-navigation';
import { createDrawerNavigator ,DrawerItems} from 'react-navigation-drawer';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contactus from './ContactComponent';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { View,StyleSheet , Text, Image} from 'react-native';

import { connect } from "react-redux";
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStoeToProps = state =>{
    return{
        dishes : state.dishes,
        promotions :state.promotions,
        leaders : state.leaders
    }
}

const mapDispahToProps = dispatch => {
  return{
    fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  }
}

const HomeNavigator = createStackNavigator({
  Home: { screen: Home,
    navigationOptions :({navigation}) =>({
      headerLeft : <Icon
      name = 'menu' size ={24}
      color ='white'
      onPress={() =>navigation.toggleDrawer()}
      />
    }) }
});

const AboutNavigator = createStackNavigator({
  Home: { screen: About ,
    navigationOptions :({navigation}) =>({
      headerLeft : <Icon
      name = 'menu' size ={24}
      color ='white'
      onPress={() =>navigation.toggleDrawer()}
      />
    }) }
  });


const ContactusNavigator = createStackNavigator({
  Contactus: { screen: Contactus,
    navigationOptions :({navigation}) =>({
      headerLeft : <Icon
      name = 'menu' size ={24}
      color ='white'
      onPress={() =>navigation.toggleDrawer()}
      />
    }) }
});

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu,
    navigationOptions :({navigation}) =>({
      headerLeft : <Icon
      name = 'menu' size ={24}
      color ='white'
      onPress={() =>navigation.toggleDrawer()}
      />
    })
   },
  Dishdetail: { screen: Dishdetail }

});

const CustomDrawerContentComponent = (props) =>(
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style ={styles.drawerHeader}>
        <View style = {{flex :1}}>
        <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>

      </View>
      <DrawerItems {...props} />

    </SafeAreaView>
  </ScrollView>
);


   
const MainNavigtor  = createDrawerNavigator({
  Home: {
      screen : HomeNavigator,
      navigationOptions:{
        title: 'Home',
        drawerLabel : 'Home',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='home'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        )
      }
  },
  About :{
    screen : AboutNavigator,
    navigationOptions:{
      title  : 'About Us',
      drawerLabel : 'About Us',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='info-circle'
          type='font-awesome'            
          size={24}
          color={tintColor}
        />
      )
    }
  },
  Contactus :{
    screen : ContactusNavigator,
    navigationOptions:{
      title  : 'Contact us',
      drawerLabel : 'Contact us',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='address-card'
          type='font-awesome'            
          size={22}
          color={tintColor}
        />
      )
    }
  },
  Menu :{
    screen : MenuNavigator,
    navigationOptions:{
      title  : 'Menu',
      drawerLabel : 'Menu',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='list'
          type='font-awesome'            
          size={24}
          color={tintColor}
        />
      )
    }
  }
  },
  {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
  });

  const styles = StyleSheet.create({
    container :{
      flex: 1
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });

class Main extends React.Component{

  componentDidMount() {
    console.log("Main compoenent");
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

 

  render() {
    const Navigator = createAppContainer(MainNavigtor);
    return <Navigator />
 }
}
  


//const Main = createAppContainer(MainNavigtor);
  
export default connect(mapStoeToProps, mapDispahToProps)(Main);