import React from 'react';
import { Text, View, FlatList,Alert } from 'react-native';
import { Card ,Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStoeToProps = state =>{
    return{
        dishes : state.dishes,
        comments :state.comments
    }
}




function RenderComments(props){
    const comments = props.comments;

    const renderCommentItem =({item,index}) => {
            return(
                <View key={index} style={{margin: 10}}>
                    <Text style={{fontSize :14}}>{item.comment}</Text>
                    <Text style={{fontSize :12}}>{item.rating} Stars</Text>
                    <Text style={{fontSize :12}}>{'-- '+item.author + ' , ' + item.date}</Text>
                </View>
            );

    };

    return(
        <Card>
            <FlatList
            data = {comments}
            renderItem= {renderCommentItem}
            keyExtractor = {item => item.id.toString()}>
            </FlatList>

        </Card>
    );

}

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={{ uri : baseUrl + dish.image}}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                    <Icon
                        raised 
                        reverse
                        name = {props.favorite ? 'heart' :'heart-o'}
                        type = 'font-awesome'
                        color='#f50'
                        onPress = {() => props.favorite ? Alert.alert('Already favorite') : props.onPress()}
                    />
                </Card>
            );

               return(<View>
                <Text>test</Text>
            </View>);

            
        }
        else {
            return(<View>
                <Text>Error</Text>
            </View>);
        }
}

class Dishdetail extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            favorites :[]
        }
    };

    markFavorite(dishId){
        this.setState({favorites: this.state.favorites.concat(dishId)});
    }

    static navigationOptions= {
        title : 'Dish Details',
        headerStyle: { backgroundColor: '#fc8019' },
        headerTitleStyle: { color: '#fff' },
    };

    render(){
        const dishId = this.props.navigation.getParam('dishId','')
        return(
        <ScrollView>
            <RenderDish dish={this.props.dishes.dishes[+dishId]}
            favorite ={this.props.dishes.favorites.some(el => el === dishId)}
            onPress= {() => this.markFavorite(dishId)}
            /> 
            <RenderComments comments ={this.props.comments.comments.
                filter((comment) => comment.dishId ===dishId)} />
        </ScrollView>
        
        
        );

    }
    
        
    
}

export default connect(mapStoeToProps)(Dishdetail);