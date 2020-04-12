import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { ScrollView } from 'react-native-gesture-handler';




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
                image={require('./images/uthappizza.png')}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
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
            dishes : DISHES,
            comments : COMMENTS
        }
    };

    static navigationOptions= {
        title : 'Dish Details',
        headerStyle: { backgroundColor: '#fc8019' },
        headerTitleStyle: { color: '#fff' },
    };

    render(){
        const dishId = this.props.navigation.getParam('dishId','')
        return(
        <ScrollView>
            <RenderDish dish={this.state.dishes[+dishId]} /> 
            <RenderComments comments ={this.state.comments.
                filter((comment) => comment.dishId ===dishId)} />
        </ScrollView>
        
        
        );

    }
    
        
    
}

export default Dishdetail;