import { View, Text, StyleSheet, Button, Alert} from "react-native";
import React, { Component, useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import TimetableScreen from './TimetableScreen';
import LoginScreen from './LoginScreen';
import SettingsScreen from './SettingsScreen';
import AsyncStorage from '@react-native-community/async-storage';



const Tab = createBottomTabNavigator();


export default class MainScreen extends Component{

  constructor(props) {
    
    super(props);
    this.state = {
      my_token : '',
      user_id : ''
    };
    
}


 async componentDidMount() {
  await AsyncStorage.getItem('user_token').then((value) => {
    if(value){
        this.setState({my_token:JSON.parse(value).token})
    }
  });

    fetch('http://115.85.183.157:3000/auth',{
			method:'POST',
			headers:{
				 'Accept' : 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				token :this.state.my_token
			}),
		})
		.then((response) => response.json())
		 .then((response)=>{
			 if(response.success){
         this.setState({user_id : response.id})
        Alert.alert(`안녕하세요 ! ${response.id}님`)
			 }else{
        this.props.navigation.navigate("Login");
			 }
		 })
		 .catch((error)=>{
		 //console.error(error);
		 });
  }


    
    

  render(){

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Timetable') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Timetable" component={TimetableScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

}
