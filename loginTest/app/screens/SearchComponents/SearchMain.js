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
    FlatList,
    Alert
  } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import ClubData from '../../../SearchClubData'


export default class SearchMain extends Component {
  
    render(){
    
        return (
          <SafeAreaView style = {{ flex : 1, backgroundColor : "white"}}>
            <View style={{ flex: 1, backgroundColor : "white"}}>
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
              <View style = {{paddingTop : 10}}>
              <Text style = {styles.headerText}>체육</Text>
              <View style = {[styles.header,{borderBottomColor : "#8B0000"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={ClubData.slice(0,4)} 
                    keyExtractor={item => item.id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("MyClub",{id : item.id})}>
                     <View style = {{height:200, width:120, marginLeft : 20, borderWidth:1, borderColor: '#8B0000'}}>
                    <View style = {{flex : 6}}>
                       <Image source = {{uri : item.imageUri}}
                      style = {{flex:1, width : null,
                        height:null, resizeMode: 'cover'}}/> 
                    </View>
                    <View style = {{flex : 1, paddingLeft:10, paddingTop:3, backgroundColor : '#8B0000',justifyContent: 'center', alignItems: 'center'}}>
                      <Text style = {{color : 'white', fontSize : 15, fontWeight : "700"}}>{item.name}</Text>
                    </View>

                  </View>
                    </TouchableOpacity>
                    }
                    keyboardShouldPersistTaps = "always"
                    />

                  </View>
                  </View>
                  
    
                  </View>
                  <View style = {{paddingTop : 10}}>
              <Text style = {styles.headerText}>과학기술</Text>
              <View style = {[styles.header,{borderBottomColor : "#FF8C00"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={ClubData.slice(4,7)} 
                    keyExtractor={item => item.id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>
                    <TouchableOpacity>
                     <View style = {{height:200, width:120, marginLeft : 20, borderWidth:1, borderColor: "#FF8C00"}}>
                    <View style = {{flex : 6}}>
                       <Image source = {{uri : item.imageUri}}
                      style = {{flex:1, width:null,
                        height:null, resizeMode: 'cover'}}/> 
                    </View>
                    <View style = {{flex : 1, paddingLeft:10, paddingTop:3, backgroundColor : '#FF8C00',justifyContent: 'center', alignItems: 'center'}}>
                      <Text style = {{color : 'white', fontSize : 15, fontWeight : "700"}}>{item.name}</Text>
                    </View>

                  </View>
                    </TouchableOpacity>
                    }
                    keyboardShouldPersistTaps = "always"
                    />

                  </View>
                  </View>
                  
    
                  </View>
                  <View style = {{paddingTop : 10}}>
              <Text style = {styles.headerText}>사회활동</Text>
              <View style = {[styles.header,{borderBottomColor : "#FFD700"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={ClubData.slice(7,10)} 
                    keyExtractor={item => item.id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>
                    <TouchableOpacity>
                     <View style = {{height:200, width:120, marginLeft : 20, borderWidth:1, borderColor: '#FFD700'}}>
                    <View style = {{flex : 6}}>
                       <Image source = {{uri : item.imageUri}}
                      style = {{flex:1, width:null,
                        height:null, resizeMode: 'cover'}}/> 
                    </View>
                    <View style = {{flex : 1, paddingLeft:10, paddingTop:3, backgroundColor : '#FFD700',justifyContent: 'center', alignItems: 'center'}}>
                      <Text style = {{color : 'white', fontSize : 15, fontWeight : "700"}}>{item.name}</Text>
                    </View>

                  </View>
                    </TouchableOpacity>
                    }
                    keyboardShouldPersistTaps = "always"
                    />

                  </View>
                  </View>
                  
    
                  </View>
                  <View style = {{paddingTop : 10}}>
              <Text style = {styles.headerText}>연행예술</Text>
              <View style = {[styles.header,{borderBottomColor : "#0000CD"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={ClubData.slice(10,14)} 
                    keyExtractor={item => item.id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>
                    <TouchableOpacity>
                     <View style = {{height:200, width:120, marginLeft : 20, borderWidth:1, borderColor: '#0000CD'}}>
                    <View style = {{flex : 6}}>
                       <Image source = {{uri : item.imageUri}}
                      style = {{flex:1, width:null,
                        height:null, resizeMode: 'cover'}}/> 
                    </View>
                    <View style = {{flex : 1, paddingLeft:10, paddingTop:3, backgroundColor : '#0000CD',justifyContent: 'center', alignItems: 'center'}}>
                      <Text style = {{color : 'white', fontSize : 15, fontWeight : "700"}}>{item.name}</Text>
                    </View>

                  </View>
                    </TouchableOpacity>
                    }
                    keyboardShouldPersistTaps = "always"
                    />

                  </View>
                  </View>
                  
    
                  </View>
              </ScrollView>
    
            </View>
          </SafeAreaView>
        );
      }
    }

const styles = StyleSheet.create({
    headerText : {
        flex : 1,
        fontSize : 22,
        fontWeight : '900',
        marginLeft : 20,
        marginBottom : 6
    },
    header : {
        flex : 1, 
        alignSelf : 'stretch', 
        justifyContent : 'flex-end', 
        marginRight: 150,
        marginLeft : 20, 
        borderBottomWidth : 3.5,
    }

})