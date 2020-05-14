import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableHighlight
} from "react-native";
import ImageSlider from 'react-native-image-slider';
import INTRO_SLIDES from '../shared/intro'

class ImageSliderCom extends Component {

  constructor(props){
    super(props);
    this.state={
     // datasource: [{INTRO_SLIDES}]
     datasource : INTRO_SLIDES

    }
  }

    render() {          
        return (
            <View style={styles.container}>         
        <View style={{alignItems: 'center'}}>                   
            <ImageSlider
                    loopBothSides
                autoPlayWithInterval={1000}
                images={[
                   require('../assets/img1.jpg'),
                   require('../assets/img2.jpg'),
                    require('../assets/img3.jpg'),       
                ]}
               // images ={this.state.datasource} 
               style={{width:400, height: 200}}
            />              
        </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    justifyContent: 'center'
    }
});

export default ImageSliderCom;