import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TasksTittle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.text.title}</Text>
    </View>
  )
}

export default TasksTittle

const styles = StyleSheet.create({
    container:{
        width: '100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: '8%',
    },
    title:{
        fontFamily:'Roboto-Bold',
        textAlign:'center',
        fontSize:24,
        color:'#000000'
    },
})