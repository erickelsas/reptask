import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const PatternButton = (props) => {

  return (
    <View>
      <TouchableOpacity onPress={props.buttonConfig.onPressButton}>
        <View style={props.buttonConfig.isRed != undefined ? styles.redButton:styles.blueButton}>
          <Text style={styles.text}>
            {props.buttonConfig.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PatternButton

const styles = StyleSheet.create({
    blueButton: {
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#36457D',
        elevation: 20,
        shadowColor: '#000',
        marginTop: '2.5%'
    },
    redButton: {
      width: '100%',
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 8,
      fontSize: 16,
      backgroundColor: '#EF4343',
      elevation: 20,
      shadowColor: '#000',
      marginTop: '2.5%'
    },
    text:{
      color: '#f2f3f4',
      fontFamily: 'Roboto-Bold',
    }
})