import React, {Component} from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
  } from "react-native";
  import Icon from 'react-native-vector-icons/Ionicons'
  import Category from './Category'
  import MyClub from './MyClub'
  import tempData from '../../../tempData'
  import AsyncStorage from '@react-native-community/async-storage';
  
  


export default class HomeMain extends Component {
  
  UNSAFE_componentWillMount(){
    this.starHeaderHeight = 80
    if(Platform.OS == 'android')
    {
      this.starHeaderHeight = 100 + StatusBar.currentHeight
    }
  }
  constructor(props) {
    
    super(props);
    this.state = {
      my_token : '',
      userID : ''
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
        this.setState({userID:response.id})
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
      <SafeAreaView style = {{ flex : 1}}>
        <View style={{ flex: 1}}>
          <View style = {{ height : this.starHeaderHeight, backgroundColor : 'white',
          borderBottomWidth : 1, borderBottomColor : '#dddddd'}}>
            <View style = {{flexDirection: 'row', padding:10,backgroundColor: 'white', marginHorizontal:20, 
                            shadowOffset : { width : 0, height : 0}, shadowColor: 'black', shadowOpacity: 0.2,elevation : 1, marginTop: Platform.OS == 'android' ? 30 : null}}>
              <Icon name = "ios-search" size = {20} />
              <TextInput
              underlineColorAndroid = "transparent"
                placeholder = " 동아리를 검색하세요"
                placeholderTextColor="grey"
                style = {{ flex : 1, fontWeight: '700',
                backgroundColor : 'white'}}/>
            </View>
          </View>
          <ScrollView scrollEventThrottle = {16}>
            <View style = {{flex:1, backgroundColor:'white', paddingTop : 20}}>
              <Text style = {{fontSize:24, fontWeight: '700', paddingHorizontal: 20}}>
                {`${this.state.userID}님의 동아리`}
              </Text>

              <View style = {{height : 280, marginTop: 20}}>
              <FlatList 
                data={tempData} 
                keyExtractor={item => item.id.toString()} 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("MyClub")}>
                 <Category imageUri = {{uri : item.imageUri}}
                name = {item.name}
                /> 
                </TouchableOpacity>
                }
                keyboardShouldPersistTaps = "always"
                />

              </View>
              </View>


          </ScrollView>

        </View>
      </SafeAreaView>
    );
  }
}
