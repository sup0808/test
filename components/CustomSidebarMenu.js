//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';


export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: require('../assets/menuHomeIcon.png'),
        navOptionName: 'Home',
        screenToNavigate: 'NavDashboard',
      },
      {
        navOptionThumb: require('../assets/app_icon.png'),
        navOptionName: 'About Us',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: require('../assets/menuSpeakIcon.png'),
        navOptionName: 'CEO Speak',
        screenToNavigate: 'NavCeoSpeak',
      },
      {
        navOptionThumb: require('../assets/menuHomeIcon.png'),
        navOptionName: 'Core Values',
        screenToNavigate: 'NavScreen1',
      },
      {
        navOptionThumb: require('../assets/menuHomeIcon.png'),
        navOptionName: 'Sales Enablement',
        screenToNavigate: 'NavSaleEnable',
      },
      {
        navOptionThumb: require('../assets/menuCollaboration.png'),
        navOptionName: 'Collaboration',
        screenToNavigate: 'NavCollobration',
      },
      {
        navOptionThumb: require('../assets/menuTrainingIcon.png'),
        navOptionName: 'Training Calender',
        screenToNavigate: 'NavScreen1',
      },
      {
        navOptionThumb: require('../assets/menuFaqIcon.png'),
        navOptionName: 'Claim FAQ',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: require('../assets/menuTermsIcon.png'),
        navOptionName: 'Terms and Conditions',
        screenToNavigate: 'NavScreen3',
      },
      {
        navOptionThumb: require('../assets/menuContactIcon.png'),
        navOptionName: 'Contact Us',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: require('../assets/menuLogoutIcon.png'),
        navOptionName: 'Logout',
        screenToNavigate: 'NavScreen3',
      },
    ];
  }
  render() {
    return (
        <ScrollView>
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <View style ={styles.drawerHeader}>
        <View >
        <Image  source={require('../assets/aao.jpg')} style={{width:60,height:60,borderRadius:30}} />
        </View>
        
            <Text style={styles.drawerHeaderText}>Supriya Gupta</Text>
            <Text style={styles.drawerHeaderText}>supriyag75@gmail.com</Text>
         

      </View>
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
              <Image source={item.navOptionThumb}   style={{ width: 25, height: 25,}}/>
          
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    
    padding: 40,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
  drawerHeader: {
    
    height: 100,
   
    flex: 1,
    
  },
  drawerHeaderText: {
    color: 'black',
    fontSize: 16,
    
  },
});