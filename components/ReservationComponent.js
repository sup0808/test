import React ,{Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal,Alert, Animated, Easing} from 'react-native';
import {  Card} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import {  Notifications} from 'expo';
import * as Permissions from 'expo-permissions';



class Reservation extends Component{

    constructor(props){
        super(props);

        this.state ={
            guests: 1,
            smoking : false,
            date :'',
            showModal : false
        }
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount(){
        this.handleAnimation();
    }


    handleAnimation = () => {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease
        }).start()
    }


    

    

    static navigationOptions= {
        title : 'Reserve Table',
        headerStyle: { backgroundColor: '#fc8019' },
        headerTitleStyle: { color: '#fff' },
    };

    toggleModal(){
        this.setState({showModal : !this.state.showModal})
    }

    handleReservation(){
        console.log(JSON.stringify(this.state));
       this.toggleModal();
    }

    resetForm() {
        this.setState({
            guests: 1,
            smoking: false,
            date: '',
            showModal: false
        });
    }

    async obtainNotificationPermission(){
        console.log("obtainNotificationPermission 1");
        let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
        if (permission.status !== 'granted') {
            console.log("obtainNotificationPermission 2");
            permission = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
            if (permission.status !== 'granted') {
                console.log("obtainNotificationPermission 3");
                Alert.alert('Permission not granted to show notifications');
            }
        }
        return permission;
    }

    async presentLocalNotification(date){
        console.log("presentLocalNotification 1");
        await this.obtainNotificationPermission();
        Notifications.presentLocalNotificationAsync({
            title : 'Your Reservation',
            body: 'Reservation for '+ date + ' requested',
            ios :{
                sound : true
            },
            android :{
                sound: true,
                vibrate: true,
                color: '#512DA8'
            }
        });
        console.log("presentLocalNotification 2");
    }
    

    render(){
        return(
            <Animated.View
            resizeMode='cover'
            style={{
                width : '100%',
                justifyContent : 'center',
                
                
                transform : [
                    {
                        translateX: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 10]
                        })
                    },
                    {
                        translateY: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 5]
                        })
                    },
                    {
                        scaleX: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1]
                        })
                    },
                    {
                        scaleY: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.25]
                        })
                    }
                ]
            }}
        >
            <View >

           
                <View style ={styles.formRow}>
                    <Text style ={styles.formLabel}>Number of Guests</Text>
                    <Picker
                    style= {styles.formItem}
                    selectedValue ={this.state.guests}
                    onValueChange={(itemValue,itemIndex) =>this.setState({guests : itemValue})} >
                        <Picker.Item label="1" value="1"/>
                        <Picker.Item label="2" value="2"/>
                        <Picker.Item label="3" value="3"/>
                        <Picker.Item label="4" value="4"/>
                        <Picker.Item label="5" value="5"/>
                        <Picker.Item label="6" value="6"/>
                        <Picker.Item label="7" value="7"/>
                        <Picker.Item label="8" value="8"/>
                    </Picker>
                </View>

                <View style = {styles.formRow}>
                <Text style ={styles.formLabel}>Smoking/Non-Smoking?</Text>
                <Switch
                style = {styles.formItem}
                value = {this.state.smoking}
                trackColor='#512DA8'
                onValueChange ={(value) => this.setState({smoking : value})} >
                     </Switch>

                </View>
              <View style={styles.formRow}>
                <Text style={styles.formLabel}>Date and Time</Text>
                <DatePicker
                    style={{flex: 2, marginRight: 20}}
                    date={this.state.date}
                    format=''
                    mode="datetime"
                    placeholder="select date and Time"
                    minDate="2017-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys. 
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
              
                </View>

                <View style={styles.formRow}>
                    <Button 
                        title ="Reserve"
                        color="#512DA8"
                        accessibilityLabel="Learn more about this purple button"
                          //  onPress = {() =>{this.toggleModal(); this.resetForm();}}
                          onPress ={() =>  {
                              Alert.alert(
                                  'Your Reservation?',
                                  'Number of Guests: '+ this.state.guests
                                     +"\n"+ 'Date and Time:'+ this.state.date
                                   + "\n" + 'Smoking?' + this.state.smoking ,
                                  [
                                      {text : 'Cancel', onPress : () =>
                                      this.resetForm(),
                                
                                        style : 'cancel'},
                                    
                                    {text : 'OK', onPress : () =>
                                    this.presentLocalNotification(this.state.date),
                                    style : 'cancel'},

                                  ],
                                  {cancelable : false}

                              );
                          }}
                            
                            />
               </View>
               </View>

              </Animated.View>

              /* <Modal  animationType ={"slide"} transparent = {false}
                    visible ={this.state.showModal}
                     onDismiss ={ () => this.toggleModal()}
                    onRequestClose = {() => this.toggleModal()}>

                <View style = {styles.modal}>
                        <Text style = {styles.modalTitle}>Your Reservation</Text>
                        <Text style = {styles.modalText}>Number of Guests: {this.state.guests}</Text>
                        <Text style = {styles.modalText}>Smoking?: {this.state.smoking ? 'Yes' : 'No'}</Text>
                        <Text style = {styles.modalText}>Date and Time: {this.state.date}</Text>
                        
                        <Button 
                           onPress = {() =>{this.toggleModal(); this.resetForm();}}
                            color="#512DA8"
                            title="Close" 
                            />
                    </View>
                </Modal> */


            
        );
    }
}

const styles = StyleSheet.create({
    formRow :{
        alignItems : 'center',
        justifyContent : 'center',
        flex :1,
        flexDirection: 'row',
        margin : 20
    },
    formLabel : {
        fontSize : 18,
        flexDirection : "row"
    },
    formItem :{
        flex:1 
    },
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
    }
});

export default Reservation;