import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NumberPhotoBubble = (props) => {
  return (
    <View style={props.index != 0 ? {...styles.container, position:'relative', zIndex:props.index, right:props.index*10}:styles.container}>
      <Text style={styles.text}>{`+${props.number}`}</Text>
    </View>
  )
}

export default NumberPhotoBubble

const styles = StyleSheet.create({
    container:{
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#BBBBBB',
        backgroundColor:'#36457D',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        elevation:80,
    },
    text:{
        color:'#FFF',
        fontFamily:'Inter-SemiBold',
        fontSize:16,
    }
})