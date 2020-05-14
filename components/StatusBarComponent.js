import React from 'react';
import {View, StatusBar, StyleSheet}  from 'react-native';
import Constants from 'expo-constants';

function GetStatusBar(){
    return(
        <View>
            <StatusBar backgroundColor = "C2185B" barStyle ="default" translucent ={true}  />
         </View>
    );
}

const styles = StyleSheet.create({
    statusBar :  {
        backgroundColor : "#C2185B",
        height : Constants.statusBarHeight
    }

}) ;

export default GetStatusBar;