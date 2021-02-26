import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native'


export default class MyClub extends Component {
    
    render() {
        
        return(
        <View style={styles.container}>
            <View style={{flex : 2}}>
            <ImageBackground source={{ uri: "https://i.imgur.com/iJoeUAS.png" }} style={styles.image}>
                 <Text style={styles.text}>SOUL</Text>
            </ImageBackground>
            </View>
            <View style = {{flex : 1, justifyContent:'space-evenly', alignItems: 'center'}}>
                <TouchableOpacity style={styles.button}>
                <Text style = {styles.buttonText}>공지사항</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("ClubNoticeBoard")}>
                <Text style = {styles.buttonText}>자유게시판</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style = {styles.buttonText}>활동게시판</Text>
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
      backgroundColor: "#FFF5EE"
      
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
        opacity : 0.6,
      color: "black",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#FFF5EE"
    },
    button:{
        backgroundColor : "#F8F8FF",
        borderWidth: 2,
        borderRadius: 6,
        borderColor : '#696969',
        justifyContent: "center",
        alignItems: "center",
        width: '80%',
        height: 50,
        marginTop: 8
      },
      buttonText: {
        fontWeight : "800",
        fontSize : 15,
        color : "#000000"
      }
  });
