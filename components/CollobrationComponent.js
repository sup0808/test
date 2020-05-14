import React from 'react';
import Slideshow from 'react-native-image-slider-show';
import {Dimensions,View,Text,ScrollView,Image,FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import INTRO_SLIDES from '../shared/intro';
import {FORUM} from '../shared/forumData';




export default class Collobration extends React.Component {
    
  constructor(props){
    super(props);
    this.state= {
        directoryData : FORUM,
       
    }
  
  }


  static navigationOptions={
    title:'Collaborate',
    headerTitleStyle:{
        flex:0.8,
        textAlign: 'center',
        alignSelf: 'center',
  
  }
}

    render() {


      const   FlatListItemSeparator = () => {
        return (
          //Item Separator
          <View style={{height: 0.1,marginTop:8,marginBottom:8, width: '100%', backgroundColor: '#C8C8C8'}}/>
        );
      };


      const eventItem = ({item, index}) =>{
        return(
        
            <View style={{flex:1,flexDirection : 'row'}}>
             
              <Image style={{width : 35,height:35,overflow:"hidden",
              borderRadius:25,marginTop:20,marginBottom:20}}
              source={item.image}/>
             
            
            <View style={{justifyContent:'center', }}>
              <Text style={{fontSize:14,marginLeft:10}}>{item.degination}</Text>
            </View>
            </View>
  
        );
    };

        
      return (
        <ScrollView>
        <View >

        <View style={{height: 130, backgroundColor:'#e41420'}}/>
        <View style={{marginTop:-90,marginLeft:20,marginRight:20,
          backgroundColor:"#fff",borderRadius:5,height:'100%'}}>

            <View style={{margin:20}}>
            <Text style ={{fontSize : 17,marginTop:5 }}>Employee Community</Text>
            
            <View style={{flex:1, flexDirection:'row', backgroundColor:'white', marginTop:10, justifyContent:'center'}}>
              <View style={{flex:1, justifyContent:'center'}}>
                <Text style ={{fontSize : 17,marginTop:5, color:'#e41420' }}>234</Text>
                <Text style ={{fontSize : 14,marginTop:5 }}>Members</Text>
              </View>

              <View style={{flex:1, marginLeft:20}}>
              <Text style ={{fontSize : 17,marginTop:5, color:'#e41420' }}>24</Text>
                <Text style ={{fontSize : 14,marginTop:5 }}>Online</Text>
              </View>

              <View style={{flex:1, marginLeft:20}}>
              <Text style ={{fontSize : 17,marginTop:5, color:'#e41420' }}>45</Text>
                <Text style ={{fontSize : 14,marginTop:5 }}>Post</Text>
              </View>

            </View>
            
            <View style={{flex:1,flexDirection : 'row', marginTop:25}}>
            <Image style={{width : 25,height:25,overflow:"hidden",
            borderRadius:25,}}
            source={require('../assets/frd1.png')}/>
             <Image style={{width : 25,height:25,overflow:"hidden",
            borderRadius:25,borderColor:'#e41420'}}
            source={require('../assets/frd2.png')}/>
            <Image style={{width : 25,height:25,overflow:"hidden",
            borderRadius:25,}}
            source={require('../assets/frd3.png')}/>
             <Image style={{width : 25,height:25,overflow:"hidden",
            borderRadius:25,borderColor:'#e41420'}}
            source={require('../assets/frd4.png')}/>
             <Image style={{width : 25,height:25,overflow:"hidden",
            borderRadius:25,borderColor:'#e41420'}}
            source={require('../assets/frd5.png')}/>
             <View style={{width : 25,height:25,overflow:"hidden",
            borderRadius:25,backgroundColor:'#434e60'}}>
            <Text style={{justifyContent:'center',color:'white',alignItems:'center',marginLeft:5,
            marginTop:4,fontSize:10}}>+35</Text>
          </View>
          <View style={{flex:1,justifyContent:'flex-end',flexDirection:'row',marginTop:0}}>
                    <Image style={{width : 20,height:20,}}
                    source={require('../assets/chatIcon.png')}/>
                    <Text style ={{fontSize: 14,color:'#1d95c8',marginLeft:5,marginTop:0}}>Chat</Text>
                  
                </View>
            
            </View>
            
            <Text style ={{fontSize : 17,marginTop:20 }}>Forum</Text>

            <FlatList
              data={this.state.directoryData}
              renderItem={eventItem}
              keyExtractor={item => item.id.toString()}/>

            <View style={{flex:1,  flexDirection:'row', marginTop:30}}>
            <View style={{ width:'50%', alignItems:'center',justifyContent:'center', 
            borderRadius:5,backgroundColor:'white', borderColor:'#C8C8C8', borderWidth:.5,padding:20}}>
            <Image style={{width : 60,height:60}}
                 source={require('../assets/blogIcon.png')}/>
                  <Text style ={{fontSize : 17,marginTop:15 }}>Blog</Text>
            </View>
            <View style={{ width:'50%', alignItems:'center',justifyContent:'center', marginLeft:10,
            borderRadius:5,backgroundColor:'white', borderColor:'#C8C8C8', borderWidth:.5,padding:10}}>
            <Image style={{width : 60,height:60}}
                 source={require('../assets/postIcon.png')}/>
                  <Text style ={{fontSize : 17,marginTop:15 }}>Posts</Text>
            </View>
           </View>



            </View>
        </View>
        
        </View>
        </ScrollView>

      );
    }
  }

 /** <View style={{flex:1, flexDirection:'row'}}>
              <View style={{flex:1}}>
                <Text style ={{fontSize : 17,marginTop:5 }}>Employee Community</Text>
              </View>

            </View> */ 