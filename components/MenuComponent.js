import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

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
    
    

        return (
            <FlatList 
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
    
    }

   
}


export default connect(mapStoeToProps)(Menu);