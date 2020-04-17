import React from 'react';
import { View, FlatList, Button,Text } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from './LoadingComponent';

const mapStoeToProps = state =>{
    return{
        dishes : state.dishes
       
    }
}


class Menu extends React.Component{
    
    state ={avatar:""}

    get avatarImage() {}


    static navigationOptions= {
        title : 'Menu',
        headerStyle: { backgroundColor: '#fc8019' },
        headerTitleStyle: { color: '#fff' },
    };


    
    render(){

        const renderMenuItem = ({item, index}) => {
            const { navigate } = this.props.navigation;
            return (
                    <Tile
                        key={index}
                        title={item.name}
                        caption={item.description}
                        featured
                         onPress={() => navigate('Dishdetail', { dishId: item.id })}
                       //  leftAvatar ={item.image}
                       imageSrc={{ uri: baseUrl + item.image}}
                      />
            );
        };
    
        if(this.props.dishes.isLoading){
            return(
                <Loading/>
            );
        }
        else if (this.props.dishes.errMess) {
            return(
                <View>            
                    <Text>{this.props.dishes.errMess}</Text>
                </View>            
            );
        }
        else{
            return (
                <FlatList 
                    data={this.props.dishes.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    />
        );
        }

        
    
    }

   
}


export default connect(mapStoeToProps)(Menu);