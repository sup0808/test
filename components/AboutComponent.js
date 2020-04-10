import React from 'react';
import { Text, View } from 'react-native';

class About extends React.Component{

    static navigationOptions ={
        title : 'About Us'
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