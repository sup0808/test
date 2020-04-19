import React from 'react';
import { Text, View, FlatList,Alert,Modal , StyleSheet, Button, PanResponder} from 'react-native';
import { Card ,Icon, Rating, Input} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { postFavorite } from '../redux/ActionCreators';
import { postComment } from '../redux/ActionCreators';

import * as Animatable from 'react-native-animatable';


const mapStoeToProps = state =>{
    return{
        dishes : state.dishes,
        comments :state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId))
  //  postComment: (dishId) => dispatch(postComment(dishId))
});


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
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
        <Card>
            <FlatList
            data = {comments}
            renderItem= {renderCommentItem}
            keyExtractor = {item => item.id.toString()}>
            </FlatList>
        </Card>
        </Animatable.View>
    );

}

function RenderDish(props) {

    const dish = props.dish;
  // const dish =0;

 //  handleViewRef = ref =>this.View  = ref;

   const recognizeDrag = ({ moveX, moveY, dx, dy }) => {
    if ( dx < -200 )
        return true;
    else
        return false;
}

   const panResponder = PanResponder.create({
        onStartShouldSetPanResponder : (e, gestureState) =>{
            return true;
        },
       /* onPanResponderGrant : () =>{
            this.View.rubberBand(1000)
            .then(endState => console.log(endState.finished ? 'finished' : 'cancelled'));
        },*/
        onPanResponderEnd : (e,gestureState) =>{
            if(recognizeDrag(gestureState))

            Alert.alert(
                'Add Favorite',
                'Are you sure you wish to add ' + dish.name + ' to favorite?',
                [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {props.favorite ? console.log('Already favorite') : props.onPress()}},
                ],
                { cancelable: false }
            );
            return true;
        }
   });
    
        if (dish != null) {
            return(
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000} 
              //  ref={this.handleViewRef}
                {...panResponder.panHandlers}>
                <Card
                featuredTitle={dish.name}
                image={{ uri : baseUrl + dish.image}}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                    <View style ={{ flexDirection :"row", flex :1, justifyContent : 'center'}}>

                    <Icon
                        raised 
                        reverse
                        name = {props.favorite ? 'heart' :'heart-o'}
                        type = 'font-awesome'
                        color='#f50'
                        onPress = {() => props.favorite ? Alert.alert('Already favorite') : props.onPress()}
                    />
                     <Icon
                         name ='pencil'
                        raised
                        reverse
                        type = 'font-awesome'
                        color='#512DA8'
                        onPress = {() =>  window.DishDetails.handleAddComments()}
                    />
                     </View>

                </Card>
                </Animatable.View>
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
        window.DishDetails = this;
        this.state = {
            favorites :[],
            comments :[],
            rating : 0,
            author : '',
            comment  : '',
            showModal : false
        }
    };

    toggleModal(){
        this.setState({ showModal : !this.state.showModal})
    }

    handleAddComments = () =>{
        console.log(JSON.stringify(this.state));
       this.toggleModal();
    }

    markFavorite(dishId){
        console.log("ADd comment");
        this.props.postFavorite(dishId);
      //  this.setState({favorites: this.state.favorites.concat(dishId)});
    }

    AddComment(dishId){
       
        this.props.postComment(dishId);
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
                favorite={this.props.favorites.some(el => el === dishId)}
               // favorite={this.state.favorites.some(el => el === dishId)}
                onPress={() => this.markFavorite(dishId)} 
                />

                
                <Modal  animationType ={"slide"} transparent = {false}
                    visible ={this.state.showModal}
                     onDismiss ={ () => this.toggleModal()}
                    onRequestClose = {() => this.toggleModal()}>
                        
                <View style = {styles.modal}>
                 <Rating showRating fractions="1" startingValue="1"  />
                  <Input
                    placeholder='Author'
                    leftIcon={{ type: 'font-awesome', name: 'user'  }}  />


                    <Input
                    placeholder='Comments'
                    leftIcon={{ type: 'font-awesome', name: 'comment'  }}  />

                    <View style ={styles.formRow}>
                        <Button 
                        style ={{marginTop: 20}}
                            onPress = {() =>{this.toggleModal(); }}
                            color="#512DA8"
                            title="SUBMIT" 
                            />
                      </View>
                      <View style ={styles.formRow}>

                        <Button 
                        style ={{margin: 20}}
                            onPress = {() =>{this.toggleModal(); }}
                            color="#808080"
                            title="CANCEL" 
                            />
                            </View>
                    </View>
                </Modal>

                
            <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
        </ScrollView>
        
        
        );

    }
    
        
    
}

const styles = StyleSheet.create({
    modal :{
        justifyContent : 'center',
        margin : 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    },
    formRow :{
        alignItems : 'center',
        justifyContent : 'center',
        flex :1,
        flexDirection: 'row',
        margin : 25
    },
});

export default connect(mapStoeToProps,mapDispatchToProps)(Dishdetail);