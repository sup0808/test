import React from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import {Card,ListItem} from 'react-native-elements';
import {PRODUCT_SERVICE} from '../shared/product';
import {CEOSPEAK_DATA} from '../shared/ceospeakData';

export default class CeoSpeak extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            ceoData : CEOSPEAK_DATA,
           
        }

    }

    static navigationOptions={
        title:'CEO Speaks',
        headerTitleStyle:{
            flex:0.8,
            textAlign: 'center',
            alignSelf: 'center',
      
      }
    }

    render(){
       

        const productItem = ({item, index}) =>{
           
            return(
            <Card containerStyle={{elevation:2, }}>
                <View>

              
            <View style={{flex:1,flexDirection : 'row'}}>
                    <Image style={{width : 30,height:30}}
                     source={require('../assets/chatlogo.png')}/>
                     <View>
                     <Text style ={{fontSize: 16,marginLeft:10}}>{item.name}</Text>
                </View>
                <View style={{flex:1,justifyContent:'flex-end',flexDirection:'row'}}>
                    <Image style={{width : 13,height:13,}}
                    source={require('../assets/time.png')}/>
                    <Text style ={{fontSize: 11,marginLeft:10}}>{item.date}</Text>
                </View>
            </View>
            <View style={{height: 0.5,marginTop:8,marginBottom:15, width: '100%', backgroundColor: '#C8C8C8'}}/>
            <View> 
            {item.image!=null ?   <Image style={{width : '100%',height:135,}}
                    source={item.image}/> : null}
               
            </View>
            <Text style ={{fontSize: 15,marginLeft:10,marginTop:10}}>{item.description}</Text>
            <View style={{flex:1,justifyContent:'flex-end',flexDirection:'row',
            backgroundColor: '#f7f3f3',marginTop:10}}>
                    <Image style={{width : 35,height:35,}}
                    source={require('../assets/like.png')}/>
                    <Text style ={{fontSize: 11,marginLeft:0,marginTop:10}}>{item.like}</Text>
                    <Image style={{width : 35,height:35,}}
                    source={require('../assets/comment.png')}/>
                    <Text style ={{fontSize: 11,marginRight:10,marginTop:10}}>{item.comment}</Text>
                </View>

            </View>

            </Card>

                );
            };

        return(
            <FlatList
            data={this.state.ceoData}
            renderItem={productItem}
            keyExtractor={item => item.id.toString()}
        />
        );
    }
}