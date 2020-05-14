import React from 'react';
import { StyleSheet, Text, View,Image,TextInput, ImageBackground,StatusBar,TouchableOpacity,Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const fullwidth = Dimensions.get('window').width;


 class Login extends React.Component {

 
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : ''
    }
}

  render(){

    //const {navigate} = this.props.navigation;

  return (
    
    <View style ={{flex : 1}}>
     <StatusBar backgroundColor = "#e41420" barStyle ="default" translucent ={true}  />
        <ImageBackground source ={require("../assets/bg.png")} style={styles.backgroundImageStyle}>

        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
          <View style ={{ backgroundColor:"#ffffff", borderRadius : 15,width:fullwidth-80,marginTop:100} }>

            
              <View style = {{ margin: 20}} >
              <Text style ={styles.headLine}>Login</Text>

              <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/user.png')} //Change your icon image here
                style={styles.ImageStyle}
               />

              <TextInput
              style={{ flex: 1 }}
              placeholder="Email"
              underlineColorAndroid="transparent"
              />
              </View>
              <View style={{borderBottomColor : '#000000', borderBottomWidth :.5}}/>

              <View style={styles.SectionStyle}>
              <Image
                source={require('../assets/password.png')} //Change your icon image here
                style={styles.ImageStyle}
               />

              <TextInput
              style={{ flex: 1 }}
              placeholder="Password"
              underlineColorAndroid="transparent"
              />
              </View>

              <View style={{borderBottomColor : '#000000', borderBottomWidth :.5}}/>

              <TouchableOpacity
               style={styles.SubmitButtonStyle}
               activeOpacity = { .5 }
               onPress={() => this.props.navigation.navigate('Main')}
               //onPress={() => this.props.navigation.navigate('Dashboard')}
               
               >
 
                <Text style={styles.TextStyle}> SIGN IN </Text>
            
             </TouchableOpacity>
              </View> 
          </View>
          </Animatable.View>
         <Text style ={{color: '#ffffff', position : 'absolute', bottom : 0,marginBottom : 10}}>
           Marcarus Co-operative Limited. All Rights Reserved. </Text>
      
        </ImageBackground>
    </View>

  );
 }
}

function LoginForm(props){

}

const styles = StyleSheet.create({
  headLine : {
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize :19,
    marginTop: 10,
    marginBottom : 10
},
  
  backgroundImageStyle :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardStyle :{
    alignItems : 'center',
    margin : 20
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
   // borderWidth: 0.5,
    borderColor: '#000',
  
    borderRadius: 5,
    marginTop: 25,
},
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
},
SubmitButtonStyle: {
 
  marginTop:35,
  marginBottom: 30,
  paddingTop:10,
  paddingBottom:10,
  marginLeft:30,
  marginRight:30,
  backgroundColor:'#e41420',
  borderRadius:20,
  borderWidth: 1,
  borderColor: '#fff'
},

TextStyle:{
    color:'#fff',
    textAlign:'center',
}
});



export default Login;
