import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonAtribuirTask = (props) => {

  return (
    <View>
      <TouchableOpacity onPress={props.buttonConfig.onPress}>
        <View style={styles.button}>
          {props.children}
          <Text style={styles.text}>
            {props.buttonConfig.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonAtribuirTask

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#E4E4E4',
        shadowColor: '#CCCC',
        marginTop: '2.5%',
      
    },
    text:{
      color: '#36457D',
      fontFamily: 'Inter-Bold',
      fontSize: 12,
    }
})