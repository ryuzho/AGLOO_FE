import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert, Modal,Pressable} from 'react-native'
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

export default class MyClubMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club_name : '',
      sort : '',
      locate : '',
      time : '',
      phone : '',
      insta : '',
      intro : '',
      isLoading : true,
      modalVisible: false
    }
  }

    componentDidMount(){
      const club_id = this.props.club_id;

      fetch(`http://115.85.183.157:3000/club/${club_id}`,{
      method:'GET',
      headers:{
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      },
      })
      .then((response) => response.json())
      .then((response) =>{
        this.setState({club_name:response.club_name})
        this.setState({sort:response.sort})
        this.setState({locate:response.locate})
        this.setState({time:response.time})
        this.setState({phone:response.phone})
        this.setState({insta:response.insta})
        this.setState({intro:response.intro})
        
      })
      .catch((error) => Alert.alert("error"))
      .finally(() => {
        this.setState({ isLoading : false });
      });
    }

    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
  
    
    render() {
      const { modalVisible } = this.state;
        return(
        <View style={styles.container}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style = {{fontSize : 25, fontWeight : "800"}}>{this.state.club_name}</Text>
              <View style = {styles.header}></View>
              <Text style={styles.modalText}>{this.state.intro}</Text>
              <Pressable
                style={[styles.modalbutton, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <AntDesign name = 'closesquareo' size = {30} />
              </Pressable>
            </View>
          </View>
        </Modal>
          <View style = {{flexDirection : "row"}}>
            <View style={{marginTop : 33}}>
            <Image source={{ uri: this.props.club_img }} style={styles.image}/>
            </View>
            <View style={{marginTop : 33, justifyContent : 'space-between', marginLeft : 5}}>
              <View style = {{flexDirection : 'row', marginTop : 10}}>
              <Ionicons name = 'ios-people' size = {20}/> 
              <Text style = {{fontSize : 22, fontWeight : '700',marginLeft : 3}}>{this.state.sort}</Text>
              </View>
              <View style = {{flexDirection : 'row'}}>
              <Ionicons name = 'ios-location' size = {15}/> 
              <Text style = {{fontSize : 18, fontWeight : '600',marginLeft : 3}}>{this.state.locate}</Text>
              </View>
              <View style = {{flexDirection : 'row'}}>
              <AntDesign name = 'clockcircle' size = {15}/> 
              <Text style = {{width : '60%', fontWeight : '600',marginLeft : 3}}>{this.state.time}</Text>
              </View>
              <View style = {{flexDirection : 'row'}}>
              <Entypo name = 'old-phone' size = {15}/>
              <Text style = {{fontSize : 15, fontWeight : '600',marginLeft : 3}}>{this.state.phone}</Text>
              </View>
              <View style = {{flexDirection : 'row', marginBottom : 10}}>
              <Entypo name = 'instagram' size = {15}/>
              <Text style = {{fontSize : 18, fontWeight : '600',marginLeft : 3}}>{this.state.insta}</Text>
              </View>
            </View>
            </View>
            <View style = {{shadowOffset: { width: 1,height: 2},shadowOpacity: 0.7, shadowRadius: 4}}>
            <Text style={styles.text}>{this.state.club_name}</Text>
            </View>
            <View style = {{flexDirection : 'row', marginTop : 10, justifyContent:'space-evenly'}}>
              <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>가입신청</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.button} onPress = {()=>this.setModalVisible(true)}>
                <Text style = {styles.buttonText}>동아리소개</Text>
              </TouchableOpacity>
            </View>
           <View> 
            <View style = {{flexDirection : 'row', justifyContent : 'space-evenly'}}>
              <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>공지사항</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.button} onPress={()=>{this.props.navigation.navigate("BoardScreen")}}>
                <Text style = {styles.buttonText}>자유게시판</Text>
              </TouchableOpacity>
            </View>
            <View style = {{flexDirection : 'row', justifyContent : 'space-evenly'}}>
              <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>사진갤러리</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>활동게시판</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {{justifyContent : 'center', alignItems: 'center'}}>
          <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>공강시간표</Text>
          </TouchableOpacity>
          </View>

            
          
          

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#aaced7"
      
    },
    image: {
      width: 200,
      height: 200,
    },
    text: {
      opacity : 1,
      color: "white",
      fontSize: 50,
      fontWeight: "600",
      textAlign: "center",
      backgroundColor: "#4f96a7",
      
    },
    button:{
      opacity : 0.7,
      borderColor : "#3A445D",
      backgroundColor: "#3A445D",
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
      width:'40%',
      height: 50,
      marginTop: 10
    },
    buttonText: {
      fontWeight : "700",
      fontSize : 14,
      color : "white"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalbutton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "white",
      },
      modalText: {
        marginBottom: 15,
        fontSize : 15,
        fontWeight : "600",
        textAlign: "center"
      },
      header : {
        alignSelf : 'stretch', 
        justifyContent : 'flex-end', 
        borderBottomWidth : 3.5,
        borderBottomColor : "#3e91b5",
        marginVertical : 5,
        marginHorizontal : 10
    }
    
  });
