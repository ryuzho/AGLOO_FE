import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ClubNoticeBoard extends Component {
    render() {
        return (
            <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <Text> 상훈님 이 페이지를 꾸며주시면 됩니다! </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
