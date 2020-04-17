import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Card } from "react-native-elements";

class Contactus extends React.Component{

    static navigationOptions = {
        title: 'Contact Us',
        headerStyle: { backgroundColor: '#fc8019' },
        headerTitleStyle: { color: '#fff' },
      }
    render(){
        return(
            <Card>

                <Text style ={styles.headLine}>Contact Information</Text>
                <View style={{borderBottomColor : '#e9e1f4', borderBottomWidth :1}}/>
                <Text style ={styles.textStyle}>121, Clear Water Bay Road</Text>
                <Text style ={styles.textStyle}>Clear Water Bay, Kowloon</Text>
                <Text style ={styles.textStyle}>HONG KONG</Text>
                <Text style ={styles.textStyle}>Tel: +852 1234 5678</Text>
                <Text style ={styles.textStyle}>Fax: +852 8765 4321</Text>
                <Text style ={styles.textStyle}>Email:confusion@food.net</Text>



            </Card>
        );
    }

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



export default Contactus;