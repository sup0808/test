import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Card , Button, Icon} from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import {MailComposer} from 'expo-mail-composer';


class Contactus extends React.Component{

    static navigationOptions = {
        title: 'Contact Us',
        headerStyle: { backgroundColor: '#fc8019' },
        headerTitleStyle: { color: '#fff' },
      }

      sendMail(){
          MailComposer.composeAsync({
              recipients : 'supriyag75@gmail.com',
              subject : "Enquiry",
                body : 'To whom it may concern'
          });
      }

    render(){
        return(
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <Card>
                <Text style ={styles.headLine}>Contact Information</Text>
                <View style={{borderBottomColor : '#e9e1f4', borderBottomWidth :1}}/>
                <Text style ={styles.textStyle}>121, Clear Water Bay Road</Text>
                <Text style ={styles.textStyle}>Clear Water Bay, Kowloon</Text>
                <Text style ={styles.textStyle}>HONG KONG</Text>
                <Text style ={styles.textStyle}>Tel: +852 1234 5678</Text>
                <Text style ={styles.textStyle}>Fax: +852 8765 4321</Text>
                <Text style ={styles.textStyle}>Email:confusion@food.net</Text>
                <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: "#512DA8"}}
                        icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                        onPress={this.sendMail}
                        />
            </Card>
            </Animatable.View>
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