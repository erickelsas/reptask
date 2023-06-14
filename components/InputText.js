import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function InputText(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.children}</Text>
      <TextInput secureTextEntry={props.inputConfig.secure} style={styles.input} onChange={props.inputConfig.onChangeText} value={props.inputConfig.text} placeholder={props.inputConfig.placeholder}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 16,
        marginBottom: 5
    },
    view:{
      marginBottom: 12
    },
    input:{
      backgroundColor: "#f1f2f3",
      width: 60,
      border:'none',
      borderRadius: 8,
      padding: 6
    }
})
