import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import {DISHES} from '../shared/dishes'


class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            dishes : DISHES
        };
    }

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
                    <ListItem
                        key={index}
                        title={item.name}
                        subtitle={item.description}
                        hideChevron={true}
                         onPress={() => navigate('Dishdetail', { dishId: item.id })}
                       //  leftAvatar ={item.image}
                       leftAvatar={{ source: require('./images/uthappizza.png')}}
                      />
            );
        };
    
    

        return (
            <FlatList 
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
    
    }

   
}


export default Menu;