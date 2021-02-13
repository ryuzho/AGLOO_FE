import React, { Component, useState} from 'react';
import {SafeAreaView, KeyboardAvoidingView, Text, StyleSheet, View, TouchableOpacity, Modal, Alert, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import {Ionicons} from '@expo/vector-icons';

export default class TimetableScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'Mon', 'Tue', 'Wed','Thu','Fri'],
      tableTitle: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      tableData: [
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','','']
      ],
      modalVisible: false,
      day : 'wed',
      class : 'c',
      userSub : ''
    
    }
  }
  addSubject(){
    let i = 0
    let j = 0
    this.setState({userSub:this.state.userSub})
    if(this.state.userSub !== ""){
      switch(this.state.day){
        case 'mon':
          i = 0
          switch(this.state.class){
            case 'a':
              j = 0
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'b':
              j = 1
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'c':
              j = 2
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'd':
              j = 3
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'e':
              j = 4
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'f':
              j = 5
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'g':
              j = 6
              this.state.tableData[j][i] = this.state.userSub
              break
          }
          Alert.alert(`[${this.state.userSub}]과목이 추가되었습니다.`)
          break      
        case 'tue':
          i = 1
          switch(this.state.class){
            case 'a':
              j = 0
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'b':
              j = 1
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'c':
              j = 2
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'd':
              j = 3
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'e':
              j = 4
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'f':
              j = 5
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'g':
              j = 6
              this.state.tableData[j][i] = this.state.userSub
              break
          }
          Alert.alert(`[${this.state.userSub}]과목이 추가되었습니다.`)
          break
        case 'wed':
          i = 2
          switch(this.state.class){
            case 'a':
              j = 0
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'b':
              j = 1
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'c':
              j = 2
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'd':
              j = 3
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'e':
              j = 4
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'f':
              j = 5
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'g':
              j = 6
              this.state.tableData[j][i] = this.state.userSub
              break
          }
          Alert.alert(`[${this.state.userSub}]과목이 추가되었습니다.`)
          break
        case 'thu':
          i = 3
          switch(this.state.class){
            case 'a':
              j = 0
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'b':
              j = 1
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'c':
              j = 2
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'd':
              j = 3
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'e':
              j = 4
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'f':
              j = 5
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'g':
              i = 6
              this.state.tableData[j][i] = this.state.userSub
              break
          }
          Alert.alert(`[${this.state.userSub}]과목이 추가되었습니다.`)
          break
        case 'fri':
          i = 4
          switch(this.state.class){
            case 'a':
              j = 0
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'b':
              j = 1
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'c':
              j = 2
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'd':
              j = 3
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'e':
              j = 4
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'f':
              j = 5
              this.state.tableData[j][i] = this.state.userSub
              break
            case 'g':
              j = 6
              this.state.tableData[j][i] = this.state.userSub
              break
          }
          Alert.alert(`[${this.state.userSub}]과목이 추가되었습니다.`)
          break
        }
    }
    else if(this.state.userSub === ""){
      switch(this.state.day){
        case 'mon':
          i = 0
          switch(this.state.class){
            case 'a':
              j = 0
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'b':
              j = 1
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'c':
              j = 2
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'd':
              j = 3
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'e':
              j = 4
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'f':
              j = 5
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'g':
              j = 6
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
          }
          this.state.tableData[j][i] = ""
          break      
        case 'tue':
          i = 1
          switch(this.state.class){
            case 'a':
              j = 0
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'b':
              j = 1
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'c':
              j = 2
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'd':
              j = 3
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'e':
              j = 4
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'f':
              j = 5
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'g':
              j = 6
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
          }
          this.state.tableData[j][i] = ""
          break      
        case 'wed':
          i = 2
          switch(this.state.class){
            case 'a':
              j = 0
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'b':
              j = 1
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'c':
              j = 2
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'd':
              j = 3
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'e':
              j = 4
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'f':
              j = 5
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'g':
              j = 6
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
          }
          this.state.tableData[j][i] = ""
          break      
        case 'thu':
          i = 3
          switch(this.state.class){
            case 'a':
              j = 0
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'b':
              j = 1
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'c':
              j = 2
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'd':
              j = 3
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'e':
              j = 4
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'f':
              j = 5
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'g':
              j = 6
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
          }
          this.state.tableData[j][i] = ""
          break      
        case 'fri':
          i = 4
          switch(this.state.class){
            case 'a':
              j = 0
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'b':
              j = 1
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'c':
              j = 2
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'd':
              j = 3
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'e':
              j = 4
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'f':
              j = 5
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
            case 'g':
              j = 6
              Alert.alert(`[${this.state.tableData[j][i]}]과목이 삭제되었습니다.`)
              break
          }
          this.state.tableData[j][i] = ""
          break      
        }
    }
  } 
    
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  save = () =>{
    fetch('http://115.85.183.157:3000/login',{
			method:'POST',
			headers:{
				 'Accept' : 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
        a0 : this.state.tableData[0][0], a1 : this.state.tableData[0][1], a2 : this.state.tableData[0][2], a3 : this.state.tableData[0][3], a4 : this.state.tableData[0][4],
        b0 : this.state.tableData[1][0], b1 : this.state.tableData[1][1], b2 : this.state.tableData[1][2], b3 : this.state.tableData[1][3], b4 : this.state.tableData[1][4],
        c0 : this.state.tableData[2][0], c1 : this.state.tableData[2][1], c2 : this.state.tableData[2][2], c3 : this.state.tableData[2][3], c4 : this.state.tableData[2][4],
        d0 : this.state.tableData[3][0], d1 : this.state.tableData[3][1], d2 : this.state.tableData[3][2], d3 : this.state.tableData[3][3], d4 : this.state.tableData[3][4],
        e0 : this.state.tableData[4][0], e1 : this.state.tableData[4][1], e2 : this.state.tableData[4][2], e3 : this.state.tableData[4][3], e4 : this.state.tableData[4][4],
        f0 : this.state.tableData[5][0], f1 : this.state.tableData[5][1], f2 : this.state.tableData[5][2], f3 : this.state.tableData[5][3], f4 : this.state.tableData[5][4],
        g0 : this.state.tableData[6][0], g1 : this.state.tableData[6][1], g2 : this.state.tableData[6][2], g3 : this.state.tableData[6][3], g4 : this.state.tableData[6][4]
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


  render() {
    const state = this.state;
    const { modalVisible } = this.state;

 
    
    return (
      <SafeAreaView style = {styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <KeyboardAvoidingView style = {{flex: 1}} behavior="padding">
          <View style={styles.centeredView}>
          <View style = {styles.section}>
          <TextInput style = {styles.input} placeholder = "미입력시 과목 제거" 
          onChangeText={(text) => this.setState({userSub : text})}/>
          
          <TouchableOpacity style = {styles.plusButton} onPress = {()=> this.addSubject()}>
              <Ionicons name = "add-circle" size={40} color = "#24A6D9" />
          </TouchableOpacity>
          </View>
          
            <View style = {styles.pickerView}>
            <Picker
            selectedValue={this.state.day}
            style={{height: 50, width: 150 }}
            onValueChange={(itemValue)=>this.setState({day:itemValue})}
          >
            <Picker.Item label="Monday" value="mon" />
            <Picker.Item label="Tuesday" value="tue" />
            <Picker.Item label="Wednesday" value="wed" />
            <Picker.Item label="Thursday" value="thu" />
            <Picker.Item label="Friday" value="fri" />
           </Picker>
           <Picker
            selectedValue={this.state.class}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue)=>this.setState({class:itemValue})}
          >
            <Picker.Item label="A" value="a" />
            <Picker.Item label="B" value="b" />
            <Picker.Item label="C" value="c" />
            <Picker.Item label="D" value="d" />
            <Picker.Item label="E" value="e" />
            <Picker.Item label="F" value="f" />
            <Picker.Item label="G" value="g" />
           </Picker>
           </View>
             <View style={styles.modalView}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>close</Text>
              </TouchableOpacity>
              </View>
            </View>
            </KeyboardAvoidingView>
        </Modal>
        <Table borderStyle={{borderWidth: 0.2}}>
          <Row data={state.tableHead} flexArr={[1,2,2,2,2,2]} style={styles.head} textStyle={styles.text}/>
          
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2,2,2,2,2]} style={styles.row} textStyle={styles.text}/>
            
          </TableWrapper>
        </Table>
        <View style = {styles.addbuttonArea}>
        <TouchableOpacity
            style ={styles.addbutton}
            onPress = {() => this.setModalVisible(true)}
            >
            <Text style = {styles.addbuttonText}>시간표에 과목 추가 / 제거</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style ={styles.savebutton}
            onPress = {() => this.save()}
            >
            <Text style = {styles.savebuttonText}>저장</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, paddingTop: 50, alignContent : "center", backgroundColor: '#fff' },
  head: {  height: 40, backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { backgroundColor: '#f6f8fa' },
  row: {  height: 80  },
  text: { textAlign: 'center' },
  centeredView: {
    alignItems: 'center',
    height: '50%',
    marginTop: 'auto',
    backgroundColor:'white'
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
  modalView: {
    margin: 100,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
  },
  section:{
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  plusButton:{

  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#24A6D9",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  pickerView:{
    flexDirection: "row",
  },
  addbuttonArea:{
    padding : 20,
    alignItems: "center",
    justifyContent : "space-between",
    flexDirection: "row"
  },
  addbutton:{
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: '70%',
    height: 50,
    marginTop: 8
  },
  addbuttonText: {
    fontSize : 15,
    color : "#004ba0"
  },
  savebutton:{
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: '20%',
    height: 50,
    marginTop: 8
  },
  savebuttonText: {
    fontSize : 15,
    color : "#004ba0"
  }
});