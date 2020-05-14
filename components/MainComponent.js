
import React from  'react';
import {Text,View,TouchableOpacity,Image,Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator ,DrawerItems} from 'react-navigation-drawer';
import Dashboard from './DashboardComponent';
import Directory from './DirectoryComponent';
import Product from './ProductComponent';


//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';
import CeoSpeak from './CeospeakComponent';
import SaleEnable from './SalesEnableComponent';
import Collobration from './CollobrationComponent';

global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen

class NavigationDrawerStructure extends React.Component {
    //Top Navigation Header with Donute Button
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Image
              source={require('../assets/list-view-icon.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }

  
const DashboardStackNavigator = createStackNavigator({
    Dashboard:{
        screen : Dashboard,
        navigationOptions:({navigation }) =>({
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle :{
              backgroundColor :'#e41420'
          },
          headerTintColor: '#fff',
        
        })
   } ,
   
   Directory: { screen: Directory },

});

const SaleEnableStackNavigator = createStackNavigator({
  SaleEnable:{
      screen : SaleEnable,
      navigationOptions:({navigation }) =>({
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle :{
            backgroundColor :'#e41420'
        },
        headerTintColor: '#fff',
      
      })
 } ,


});

const CeoSpeakStackNavigator = createStackNavigator({
  CeoSpeak:{
      screen : CeoSpeak,
      navigationOptions:({navigation }) =>({
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle :{
            backgroundColor :'#e41420'
        },
        headerTintColor: '#fff',
      
      })
 } ,
});


const CollobrationStackNavigator = createStackNavigator({
  Collobration:{
      screen : Collobration,
      navigationOptions:({navigation }) =>({
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle :{
            backgroundColor :'#e41420'
        },
        headerTintColor: '#fff',
      
      })
 } ,
});

const MainNavigtor  = createDrawerNavigator({

    NavDashboard: {
      screen : DashboardStackNavigator,
      navigationOptions:{
        title: 'Home',
       
      },
  }, 
  NavCeoSpeak:{
    screen: CeoSpeakStackNavigator,
    navigationOptions:{

    }
  },
  NavSaleEnable:{
    screen: SaleEnableStackNavigator,
    navigationOptions:{

    }
  },

  NavCollobration:{
    screen: CollobrationStackNavigator,
    navigationOptions:{

    }
  },
  
},
{
  //For the Custom sidebar menu we have to provide our CustomSidebarMenu
  contentComponent: CustomSidebarMenu,
  //Sidebar width
 // drawerWidth: Dimensions.get('window').width - 130,
});




class Main extends React.Component{

    render(){
        const Navigator = createAppContainer(MainNavigtor);
        return(
            <Navigator/>
        );
    }
}

export default Main;