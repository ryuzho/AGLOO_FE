import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';


export default class login extends Component {

  constructor(props){
		super(props)
		this.state={
			userId:'',
			userPassword:''
		}
	}
	
	login = () =>{
		const {userId,userPassword} = this.state;
	
		if(userId==""){
			
		  this.setState({id:'Please enter ID'})
			
		}
		else if(userPassword==""){
		this.setState({id:'Please enter password'})
		}
		else{
		fetch('http://115.85.183.157:3000/login',{
			method:'POST',
			headers:{
				 'Accept' : 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id : this.state.userId,
				pw : this.state.userPassword
			}),
		})
		.then((response) => response.json())
		 .then((response)=>{
			 if(response.success){
				 this.props.navigation.navigate("main");
			 }else{
				alert(response.msg);
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		Keyboard.dismiss();
	}
  
  render(){
    return (
      
      <KeyboardAvoidingView style = {styles.container} behavior = "padding">
      
          <View>
          <Text style = {styles.title}>Dong Dong</Text>
          <Text style={{padding:10,margin:10,color:'red',alignSelf: 'center'}}>{this.state.id}</Text>
          </View>
          <View style = {styles.inputForm}>
          <TextInput style = {styles.input} placeholder = "ID" onChangeText={userId => this.setState({userId})} /> 
          <TextInput style = {styles.input} placeholder = "PASSWORD" onChangeText={userPassword => this.setState({userPassword})} /> 
            </View>
          <View style = {styles.buttonArea}>
          <TouchableOpacity
            style ={styles.button}
            onPress = {this.login}
            >
            <Text style = {styles.buttonText}>Login</Text>
          </TouchableOpacity>
          </View>
          
        
      </KeyboardAvoidingView>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 50,
    fontWeight: "800",
    color:"#2D3436",
    alignSelf: "center",
    marginBottom: 20

  },
  inputForm:{
    width: '100%',
    alignItems: "center"
  },
  input:{
    borderWidth: 1,
    borderColor: "#24A6D9",
    borderRadius: 6,
    width: '70%',
    height: 50,
    marginTop: 8,
    paddingHorizontal: 20,
    fontSize: 18
  },
  buttonArea:{
    width : '100%',
    alignItems :"center"
  },
  button:{
    borderWidth: 2,
    backgroundColor: "#004ba0",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: '70%',
    height: 50,
    marginTop: 8
  },
  buttonText: {
    fontSize : 20,
    color : "white"
  }
});
