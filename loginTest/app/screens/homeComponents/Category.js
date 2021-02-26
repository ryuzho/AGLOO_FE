import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Category extends Component {
    render() {
        return (
            <View style = {{height:230, width:150, marginLeft : 20, borderWidth:0.4, borderColor: '#dddddd'}}>
                    <View style = {{flex : 8}}>
                       <Image source = {this.props.imageUri}
                      style = {{flex:1, width:null,
                        height:null, resizeMode: 'cover'}}/> 
                    </View>
                    <View style = {{flex : 1, paddingLeft:10, paddingTop:3, backgroundColor : 'black',justifyContent: 'center', alignItems: 'center'}}>
                      <Text style = {{color : 'white', fontSize : 20}}>{this.props.name}</Text>
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
