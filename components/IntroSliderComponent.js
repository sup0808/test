import React from 'react';
import Slideshow from 'react-native-image-slider-show';
import {Dimensions,View,Text} from 'react-native';
import {Card} from 'react-native-elements';
import INTRO_SLIDES from '../shared/intro'



export default class IntroSlider extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          {
            url: require('../assets/img1.jpg'),
          }, {
            url: require('../assets/img2.jpg'),
          }, {
            //title: 'Where Its',
           // caption: 'all about you',
           url: require('../assets/img3.jpg'),
          },
        ],

        // dataSource: [{INTRO_SLIDES}]
      };
    }
  
    componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 2000)
      });
    }
  
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
  
    render() {
        
      return (
        <View >

        <View style={{height: 130, backgroundColor:'#e41420'}}/>

       
        <View style={{marginTop:-90,marginLeft:20,marginRight:20,
          borderColor:"#fff",borderWidth:1}}>
           
      
      <Slideshow 
      
          arrowSize = {0}
          indicatorSize ={0}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />

          
        <View style={{flexDirection:'row', flex:1,borderRadius:5}}>
        <View style={{margin:5,
           width: 5, height:40, backgroundColor: '#e41420'}}/>
 <View style={{justifyContent:'center',alignItems:'center'}}>        
 <Text >Create business value by collaborating</Text>  
        </View>

      
        </View>
        
     
        </View>
        
        </View>

      );
    }
  }