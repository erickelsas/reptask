import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function InputText(props) {
  return (
    <View style={styles.view}>
      <Text style={props.light != undefined ? styles.textLight:styles.text}>{props.children}</Text>
      {'keyboardType' in props.inputConfig && <TextInput secureTextEntry={props.inputConfig.secure} style={styles.input} onChange={(e) => {props.inputConfig.onChange(e)}} value={props.inputConfig.value} placeholder={props.inputConfig.placeholder} keyboardType={props.inputConfig.keyboardType} selectionColor={'#36457D'} numberOfLines={props.inputConfig.lines != undefined ? props.inputConfig.lines:1} multiline={props.inputConfig.multiline != undefined ? true:false}/>}
      
      {!('keyboardType' in props.inputConfig) && <TextInput secureTextEntry={props.inputConfig.secure} style={styles.input} onChange={(e) => {props.inputConfig.onChange(e)}} value={props.inputConfig.value} placeholder={props.inputConfig.placeholder} selectionColor={'#36457D'} numberOfLines={props.inputConfig.lines != undefined ? props.inputConfig.lines:1} multiline={props.inputConfig.multiline != undefined ? true:false}/>}
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        lineHeight: 16,
        marginBottom: 5
    },
    textLight:{
      fontFamily: 'Roboto-Bold',
      fontSize: 16,
      lineHeight: 16,
      marginBottom: 5,
      color:'#FFFFFF'
    },
    view:{
      marginBottom: 12
    },
    input:{
      backgroundColor: "#f1f2f3",
      width: '100%',
      borderRadius: 8,
      padding: 8,
      elevation:10,
      shadowColor:'#AAAA',
      fontFamily:'Roboto-Regular'
    }
})
