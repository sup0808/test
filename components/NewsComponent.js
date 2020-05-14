import React from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import {Card,ListItem} from 'react-native-elements';
import {NEWSDATA} from '../shared/newsData';


class News extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            news : NEWSDATA
        }

    }
    /* */

    render(){
            const   FlatListItemSeparator = () => {
            return (
              //Item Separator
              <View style={{height: 0.5,marginTop:8,marginBottom:8, width: '100%', backgroundColor: '#C8C8C8'}}/>
            );
          };

        const eventItem = ({item, index}) =>{
            return(
                <View style={{flex:1,flexDirection : 'row'}}>
                <Image style={{width : 30,height:30}}
                source={item.image}/>
                <View>
            <Text style ={{fontSize: 15,marginLeft:10,}}>{item.name}</Text>
            <Text style={{fontSize:12,marginLeft:10}}>{item.date}</Text>
                </View>
               
            </View>
            );
        };

        return(
            <Card containerStyle={{elevation:2, }}>
                <View>
                    <View style={{flexDirection :'row',flex:1}}>
                     <Text style ={{fontSize : 16, fontWeight:'bold'}}>News</Text>
                     <View style={{ flex:1}}>
                         <Text style ={{color : '#e41420',fontSize : 14, textAlign: 'right',   }}>See All</Text>
                     </View>
                    </View>
                    <View style={{marginTop:15}}>
                    <FlatList
                        data={this.state.news}
                        ItemSeparatorComponent={FlatListItemSeparator}
                        renderItem={eventItem}
                        keyExtractor={item => item.id.toString()}
                    />
                     </View>
                    
                 
                </View>
                
               
            </Card>
        );
    }
}

export default News;