import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ParticipantPhotoBubble = (props) => {
  return (
    <View style={props.index != 0 ? {...styles[props.isLight], position:'relative', zIndex:props.index, right:props.index*10, display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:"#CCC"}:styles.container}>
      {props.participant.url != '' && <Image source={{uri:props.participant.url}} style={{width:'100%', height:'100%'}}/>}
      {(props.participant.url == '' || props.participant.url == undefined) && <Text style={{fontSize:24, fontFamily:'Roboto-Bold', textAlign:'center'}}>{props.participant.nickname.substr(0,1)}</Text>}
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
        elevation:10,
    },
    containerLight:{
      height: 60,
      width: 60,
      borderRadius: 30,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: '#FFF',
      shadowColor:'#000',
      elevation:10,
  }
})