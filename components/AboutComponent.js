import React from 'react';
import { Text, View,StyleSheet,FlatList ,ScrollView} from 'react-native';
import {Card,ListItem} from 'react-native-elements';
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = state => {
    return {
      leaders: state.leaders
    }
  }

class About extends React.Component{

    static navigationOptions ={
        title : 'About Us',
        headerStyle: { backgroundColor: '#fc8019' },
        headerTitleStyle: { color: '#fff' },
    };

   

    render(){
        return(
            <ScrollView>
            <View style ={{flex:1}}>
            <Card>
                <Text style ={styles.headLine}>Our History</Text>
                <View style={{borderBottomWidth :1,borderBottomColor : '#e9e1f4'}} />
                <Text style={styles.textStyle}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
                <Text style={styles.textStyle}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
</Text>
            </Card>

            <Card>
            <Text style ={styles.headLine}>Corporate Leadership</Text>
                <View style={{borderBottomWidth :1,borderBottomColor : '#e9e1f4'}} /> 
                <Leader leaders = {this.state.leaders} />
            </Card>
            </View>
            </ScrollView>
        );
    }
}

function Leader(props) {

    const renderMenuItem = ({item, index}) => {

        return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{source : {uri : baseUrl + item.image}}}
                   // leftAvatar={{ source: require('./images/uthappizza.png')}}
                  />
        );
    };

    return (
            <FlatList 
                //data={props.leaders}
                data ={this.props.leaders.leaders}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}

const styles = StyleSheet.create({
    headLine : {
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize :19,
        marginTop: 5,
        marginBottom : 5
    },
    textStyle :{
        textAlign : 'left',
        fontSize    : 16,
        marginTop : 20
    }

});

export default connect(mapStateToProps)(About);