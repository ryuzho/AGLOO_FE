import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Category extends Component {
    render() {
        return (
            <View style = {{height:180, width:150, marginLeft : 20, borderWidth:0.4, borderColor: '#dddddd', backgroundColor:"white"}}>
                    <View style = {{flex : 6}}>
                       <Image source = {this.props.imageUri}
                      style = {{flex:1, width:null,
                        height:null, resizeMode: 'cover'}}/> 
                    </View>
                    <View style = {{flex : 1, paddingTop:3, backgroundColor : 'black',justifyContent: 'center', alignItems: 'center'}}>
                      <Text style = {{color : 'white', fontSize : 15, fontWeight : "700"}}>{this.props.name}</Text>
                    </View>

                  </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})
