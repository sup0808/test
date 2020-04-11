import React from 'react';
import { Text, View } from 'react-native';

class About extends React.Component{

    static navigationOptions ={
        title : 'About Us',
        headerStyle: { backgroundColor: '#fc8019' },
        headerTitleStyle: { color: '#fff' },
    };
    render(){
        return(
            <View>
                <Text>About Us Component</Text>
            </View>
        );
    }
}

export default About;