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
import { View,StyleSheet , Text, Image, ToastAnsrois, NetInfo} from 'react-native';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent';
import Login from './LoginComponent';

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})

const LoginNavigator = createStackNavigator({
  Login : { screen : Login,
    navigationOptions :({navigation}) =>({
      headerLeft :<Icon
      name = 'menu' size= {24} color= 'white'
      onPress={()=>navigation.toggleDrawer()}
      />
    })

  }
});

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

const FavoritesNavigator = createStackNavigator({
  Favorites: { screen: Favorites ,
navigationOptions :({navigation}) =>({
  headerLeft : <Icon
  name = 'menu' size ={24}
  color ='white'
  onPress={() =>navigation.toggleDrawer()}
  />
})
}});



const ReservationNavigator = createStackNavigator({
  Reservation: { screen: Reservation,
     navigationOptions :({navigation}) =>({
    headerLeft : <Icon
    name = 'menu' size ={24}
    color ='white'
    onPress={() =>navigation.toggleDrawer()}
    />
  })
 }

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

  Login: {
    screen : LoginNavigator,
    navigationOptions:{
      title: 'Login',
      drawerLabel : 'Login',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='sign-in'
          type='font-awesome'            
          size={24}
          color={tintColor}
        />
      )
    }
},

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
  },
  Reservation:{
    screen: ReservationNavigator,
     navigationOptions: {
       title: 'Reserve Table',
       drawerLabel: 'Reserve Table',
       drawerIcon: ({ tintColor, focused }) => (
         <Icon
           name='cutlery'
           type='font-awesome'            
           size={24}
           iconStyle={{ color: tintColor }}
         />
       ),
     }
 },
  Favorites:
  { screen: FavoritesNavigator,
    navigationOptions: {
      title: 'My Favorites',
      drawerLabel: 'My Favorites',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='heart'
          type='font-awesome'            
          size={24}
          iconStyle={{ color: tintColor }}
        />
      ),
    }
  }
  },
  {
    initialRouteName: 'Home',
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
    this.props.fetchDishes();
    this.props.fetchComments();
     this.props.fetchPromos();
    this.props.fetchLeaders();

    NetInfo.getConnectionInfo()
    .then((connectionInfo) => {
        ToastAndroid.show('Initial Network Connectivity Type: '
            + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType,
            ToastAndroid.LONG)
    });

    NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
      
  }

  componentWillMount(){
    NetInfo.removeEventListener('connectionChange',this.handleConnectivityChange);
  }  

  handleConnectivityChange = (connectionInfo) =>{
    switch(connectionInfo.type){
    
        case 'none':
          ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
          break;
        case 'wifi':
          ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
          break;
        case 'cellular':
          ToastAndroid.show('You are now connected to Cellular!', ToastAndroid.LONG);
          break;
        case 'unknown':
          ToastAndroid.show('You now have unknown connection!', ToastAndroid.LONG);
          break;
        default:
          break;
      }


    }
  }

  render() {
    const Navigator = createAppContainer(MainNavigtor);
    return <Navigator />
 }
}
  


//const Main = createAppContainer(MainNavigtor);
export default connect(mapStateToProps, mapDispatchToProps)(Main);
