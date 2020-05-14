import React from 'react';
import { StyleSheet,FlatList, Text, View,Image,TextInput, ImageBackground,StatusBar,Modal,
  TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Card,ListItem} from 'react-native-elements';
import {DIRECTORY_LIST} from '../shared/DirectoryData';



//import {GetStatusBar} from './components/StatusBarComponent';

 class Directory extends React.Component {

  constructor(props){
    super(props);
    this.state= {
        directoryData : DIRECTORY_LIST,
        showModal : false,
        selected:false
    }


    
   
}

static navigationOptions= {
  
  header:null
};

toggleModal(){
  this.setState({showModal : !this.state.showModal})
  this.setState({selected:false})
}




  render(){

    const   FlatListItemSeparator = () => {
      return (
        //Item Separator
        <View style={{height: 0.1,marginTop:8,marginBottom:8, width: '100%', backgroundColor: '#C8C8C8'}}/>
      );
    };

    const eventItem = ({item, index}) =>{
      return(
        <View>
          <TouchableOpacity onPress={()=>this.toggleModal()}>

         
          <View style={{flex:1,flexDirection : 'row'}}>
           
            <Image style={{width : 50,height:50,overflow:"hidden",
            borderRadius:25,borderColor:'#e41420', borderWidth:3}}
            source={item.image}/>
           
          
          <View style={{justifyContent:'center', }}>
            <Text style ={{fontSize: 15,marginLeft:10, color:'#e41420', fontWeight:'600'}}>{item.name}</Text>
            <Text style={{fontSize:12,marginLeft:10}}>{item.degination}</Text>
          </View>

          <View style={{flex:1,justifyContent:'center',}}>
                
              {this.state.selected ?  <Image style={{width : 15,height:15,alignSelf:'flex-end'}}
                 source={require('../assets/button.png')}/> : null}
                 </View>

          <Modal
          style={styles.modal}
          transparent = {true}
                    visible ={this.state.showModal}
                     onDismiss ={ () => this.toggleModal()}
                    onRequestClose = {() => this.toggleModal()}>
                      <View style={{justifyContent:'flex-end', flex:1}}>
                        <Card>
                          
         <View style={{marginBottom:0}}>
         <View style={{flex:1,flexDirection : 'row',marginLeft:20,marginRight:20}}>
                <Image style={{width : 50,height:50,borderRadius:25}}
               source={require('../assets/aao.jpg')}/>
                <View style ={{marginTop:10}}>
            <Text style ={{fontSize: 15,marginLeft:10,}}>{item.name}</Text>
           
                </View>
                <View style={{flex:1,marginTop:10}}>
                <Text style ={{color : '#e41420',fontSize : 14, textAlign: 'right',   }}>Clear</Text>
                </View>
            </View>

            <View style={{height: 0.5,marginTop:55,marginBottom:0, width: '100%', backgroundColor: '#C8C8C8'}}/>
 


 <View style={styles.container}>
    
    <View style={styles.buttonContainer} >
    <Image style= {{width:30, height:30}} source={require('../assets/email_Inactive.png')} />
    <Text style ={{fontSize: 15,marginLeft:10, color:'#000', fontWeight:'600'}}>
     Email</Text>
    </View>

   
    <View style={styles.buttonContainer}>
    <Image style= {{flex:1,width:30, height:30}} source={require('../assets/chat_inactive.png')} />
    <Text style ={{fontSize: 15,marginLeft:10, color:'#000', fontWeight:'600'}}>
     Message</Text>
    </View>

    <View style={styles.buttonContainer} >
    <Image style= {{flex:1,width:40, height:40}} source={require('../assets/chatbot_icon-new.png')} />
    <Text style ={{fontSize: 15,marginLeft:10, color:'#000', fontWeight:'600'}}>
     Chat</Text>
    </View>

   
    <View style={styles.buttonContainer}>
    <Image style= {{flex:1,width:30, height:30}} source={require('../assets/iconGrayCall.png')} />
    <Text style ={{fontSize: 15,marginLeft:10, color:'#000', fontWeight:'600'}}>
     Call</Text>
    </View>
    </View>
                          </View>
                        </Card>
                      </View>

       
    
                </Modal> 
          
      </View>
      </TouchableOpacity>

</View>
      );
  };


  /*
 <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center",
              marginRight:10,
              marginLeft:10
            }
          }}
        >
            <View style={{flex:1,flexDirection : 'row',margin:20}}>
                <Image style={{width : 30,height:30}}
               source={require('../assets/aao.jpg')}/>
                <View>
            <Text style ={{fontSize: 15,marginLeft:10}}>{item.name}</Text>
           
                </View>
                <View style={{flex:1}}>
                 <Image style={{width : 40,height:40,alignSelf:'flex-end'}}
                 source={require('../assets/salesicon.png')}/>
                </View>
            </View>
    
                      </RBSheet>*/

  /*
     <View style={{ flex:1,marginLeft:5,marginRight:5,padding:20,backgroundColor:"#fff", borderRadius : 10,borderWidth:1,
          justifyContent:'center',position:'absolute',bottom:0,borderColor:'#e41420'}}>


            <View style={{flex:1,flexDirection : 'row',}}>
           
           <Image style={{width : 50,height:50,overflow:"hidden",
           borderRadius:25,borderColor:'#e41420', borderWidth:3}}
           source={item.image}/>
          
         
          <View style={{justifyContent:'center'}}>
           <Text style ={{fontSize: 15,marginLeft:10, color:'#e41420', fontWeight:'600'}}>
             Supriya Gupta</Text>
            
           
         </View>
         <View style={{justifyContent:'center'}}>
                         <Text style ={{color : '#e41420',fontSize : 14, textAlign: 'right',   }}>See All</Text>
                     </View>
         </View>
         <View style={{height: 0.5,marginTop:8,marginBottom:8, width: '100%', backgroundColor: '#C8C8C8'}}/>
 


         <View style={styles.container}>
            
            <View style={styles.buttonContainer} >
            <Image style= {{flex:1,width:25, height:25}} source={require('../assets/comment_icon.png')} />
            <Text style ={{fontSize: 15,marginLeft:10, color:'#000', fontWeight:'600'}}>
             Supriya</Text>
            </View>

           
            <View style={styles.buttonContainer}>
            <Image style= {{flex:1,width:25, height:25}} source={require('../assets/comment_icon.png')} />
            <Text style ={{fontSize: 15,marginLeft:10, color:'#000', fontWeight:'600'}}>
             Supriya</Text>
            </View>

            <View style={styles.buttonContainer} >
            <Image style= {{flex:1,width:25, height:25}} source={require('../assets/comment_icon.png')} />
            <Text style ={{fontSize: 15,marginLeft:10, color:'#000', fontWeight:'600'}}>
             Supriya</Text>
            </View>

           
            <View style={styles.buttonContainer}>
            <Image style= {{flex:1,width:25, height:25}} source={require('../assets/comment_icon.png')} />
            <Text style ={{fontSize: 15,marginLeft:10, color:'#000', fontWeight:'600'}}>
             Supriya</Text>
            </View>
          
          </View>
          
         
        
         
                  

          </View>
  */ 
    
    return(
      <Animatable.View animation="fadeInRight" duration={100} delay={100}>
     <View style={{margin:20}}>
       <Image style={{width : 25,height:25}}
                 source={require('../assets/backIcon.png')}/>

       <Text style ={{fontSize : 20,marginTop:5 }}>Directory</Text>
       <Text style ={{fontSize : 18, }}>TOP SUGGESTIONS</Text>
       <View style={{height: 0.5,marginTop:10,marginBottom:10, width: '100%', backgroundColor: '#C8C8C8'}}/>
     
       <FlatList
        data={this.state.directoryData}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={eventItem}
        keyExtractor={item => item.id.toString()}
        />
    </View>
      </Animatable.View>
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
  modal: {
    backgroundColor: 'white',
    margin: 0, 
    alignItems: undefined,
    justifyContent: undefined,
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
  },container: {
    
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


 

 export default Directory;