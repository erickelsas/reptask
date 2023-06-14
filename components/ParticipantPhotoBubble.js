import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ParticipantPhotoBubble = (props) => {
  return (
    <View style={props.index != 0 ? {...styles.container, position:'relative', zIndex:props.index, right:props.index*10}:styles.container}>
      <Image source={{uri:props.participant.url}} style={{width:'100%', height:'100%'}}/>
    </View>
  )
}

export default ParticipantPhotoBubble

const styles = StyleSheet.create({
    container:{
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#36457D',
        shadowColor:'#000',
        elevation:20,
    }
})