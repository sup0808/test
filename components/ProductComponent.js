import React from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import {Card,ListItem} from 'react-native-elements';
import {PRODUCT_SERVICE} from '../shared/product';
import {EVENTS} from '../shared/events';

export default class Product extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            products : PRODUCT_SERVICE,
            events : EVENTS
        }

    }

    render(){
       

        const productItem = ({item, index}) =>{
           
            return(
               <Card containerStyle={{elevation:2, }}>
                    <View  >
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width : 40,height:40,}}
                      source={item.image}/>
                      </View>
                    <Text style ={{fontSize: 15,marginLeft:10}}>{item.name}</Text>
                    </View>
                </Card>

                );
            };

        return(
            <FlatList
            horizontal={true}
            data={this.state.products}
            renderItem={productItem}
            keyExtractor={item => item.id.toString()}
        />
        );
    }
}