import React from 'react';
import { Text, View } from 'react-native';

class Home extends React.Component{

    static navigationOptions ={
        title : 'Home'
    };

    render(){
        return(
            <View style={{flex:1}}>
                <Text>Home Component</Text>
            </View>
        );
    }
}

export default Home;