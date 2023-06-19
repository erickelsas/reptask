import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const PatternModalButton = (props) => {
  return (
    <View style={{marginBottom:'2%'}}>
      <TouchableOpacity onPress={props.buttonConfig.onPress}>
        {<LinearGradient colors={props.buttonConfig.isRed != undefined ? ['#EF4343', '#EF4343']:['#D5D5D5', '#F0F0F0']} start={{x:0, y:1}} end={{x:1, y:0}} style={{width:'100%', height:'100%', borderRadius:20, position:'absolute', zIndex:-1}}/>}
        <View style={styles.button}>
          {props.children}
          <Text style={props.buttonConfig.isRed != undefined ? styles.whiteText:styles.text}>
            {props.buttonConfig.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PatternModalButton

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 60,
        paddingVertical: 8,
        borderRadius: 8,
        shadowColor: '#CCCC',
        elevation:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
      color: '#36457D',
      fontFamily: 'Inter-Bold',
      fontSize: 13,
    },
    whiteText:{
        color: '#FFFFFF',
        fontFamily: 'Inter-Bold',
        fontSize: 13,
      }
})