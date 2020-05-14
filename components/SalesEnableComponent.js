import React from 'react';
import Slideshow from 'react-native-image-slider-show';
import {Dimensions,View,Text,Image} from 'react-native';
import {Card} from 'react-native-elements';
import INTRO_SLIDES from '../shared/intro'



export default class SaleEnable extends React.Component {
  static navigationOptions={
    title:'Sales Enablement',
    headerTitleStyle:{
        flex:0.8,
        textAlign: 'center',
        alignSelf: 'center',
  
  }
}
  
    render() {
        
      return (
       

        <View style={{ flex: 1,}}>
 
        <View style={{height: 80, backgroundColor:'#e41420'}}/>
          <View style={{flex:1,  flexDirection:'row',marginTop:-30,}}>
            <View style={{ width:'40%', alignItems:'center',justifyContent:'center', borderRadius:10,
          backgroundColor:'white',marginLeft:25,marginRight:25}}>
            <Image style={{width : 60,height:60}}
                 source={require('../assets/leadsIcon.png')}/>
                  <Text style ={{fontSize : 17,marginTop:5 }}>Lead</Text>
            </View>
            <View style={{ width:'40%', alignItems:'center',justifyContent:'center', borderRadius:10,
          backgroundColor:'white',marginRight:25}}>
            <Image style={{width : 60,height:60}}
                 source={require('../assets/meetingsIcon.png')}/>
                  <Text style ={{fontSize : 17,marginTop:5 }}>Meetings</Text>
            </View>
           </View>

           <View style={{flex:1,  flexDirection:'row'}}>
            <View style={{ width:'50%', alignItems:'center',justifyContent:'center'}}>
            <Image style={{width : 60,height:60}}
                 source={require('../assets/collaborationIcon.png')}/>
                  <Text style ={{fontSize : 17,marginTop:5 }}>Collaboration</Text>
            </View>
            <View style={{ width:'50%',alignItems:'center', justifyContent:'center'}}>
            <Image style={{width : 60,height:60}}
                 source={require('../assets/notesIcon.png')}/>
                  <Text style ={{fontSize : 17,marginTop:5 }}>Notes</Text>
            </View>
           </View>

           <View style={{flex:1,  flexDirection:'row'}}>
            <View style={{ width:'50%', alignItems:'center',justifyContent:'center'}}>
            <Image style={{width : 60,height:60}}
                 source={require('../assets/crossIcon.png')}/>
                  <Text style ={{fontSize : 17,marginTop:5 }}>Cross Refrencing</Text>
            </View>
            <View style={{ width:'50%',alignItems:'center', justifyContent:'center'}}>
            <Image style={{width : 60,height:60}}
                 source={require('../assets/blogIcon.png')}/>
                  <Text style ={{fontSize : 17,marginTop:5 }}>Scan a Visiting Card</Text>
            </View>
           </View>

        
        </View>
        
       

      );
    }
  }