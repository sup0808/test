
import React from  'react';
import {Text,View,StyleSheet,ScrollView,Button,Dimensions,
  Image,FlatList,TouchableOpacity} from 'react-native';
import ImageSliderCom from './ImageSliderComponent';
import {Card,ListItem} from 'react-native-elements';
import UpcomingEvent from './UpcomingeventComponent';
import Product from './ProductComponent';
import News from './NewsComponent';
import IntroSlider from './IntroSliderComponent';
import {EVENTS} from '../shared/events';
import {PRODUCT_SERVICE} from '../shared/product';
const fullHeight = Dimensions.get('window').height;

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    window.Dashboard = this;
    this.state = {
      events : EVENTS,
      products : PRODUCT_SERVICE,
    };
  }


    render(){
      const { navigate } = this.props.navigation;
      const productItem = ({item, index}) =>{
           
        return(
           <Card containerStyle={{elevation:2, }}>
             <TouchableOpacity onPress={()=>navigate('Directory')}>
                <View  >
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image style={{width : 40,height:40,}}
                  source={item.image}/>
                  </View>
                <Text style ={{fontSize: 15,marginLeft:10}} onPress={()=>navigate('Directory')}>{item.name}</Text>
                </View>
                </TouchableOpacity>
            </Card>

            );
        };

        return(

            <View style ={{flex:1,}}>
           <ScrollView>
         
              <IntroSlider/>
              <UpcomingEvent  />
              <FlatList
               horizontal={true}
                data={this.state.products}
              renderItem={productItem}
              keyExtractor={item => item.id.toString()}
             />
              <News/>
            
           </ScrollView>
           
           <View style={styles.container}>
            
             <View style={styles.buttonContainer} >
             <Image style= {{width:25, height:25}} 
             source={require('../assets/magnifying-glass.png')} />
             </View>

             <View style={ {
             backgroundColor:'#e41420',
                  marginBottom:10,
                  marginTop:10,
                  borderRadius:50,
                  marginTop:-30,
                  alignItems: 'center',
                  width:60, height:60,borderRadius:30,
                  justifyContent: 'center'}}>
             <Image style= {{width:35, height:35,borderRadius:0}} 
             source={require('../assets/app_icon.png')} />
             </View>
            
             <View style={styles.buttonContainer}>
             <Image style= {{width:25, height:25}} source={require('../assets/chatbotIcon.png')} />
             </View>
           
           </View>
           </View>

        );
    }

}

            
              const styles = StyleSheet.create({
                container: {
                  backgroundColor :'#888688',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  
                },
                buttonContainer: {
                  flex: 1,
                  marginBottom:10,
                  marginTop:10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              });
             

export default Dashboard;