import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


const CardPendentTask = (props) => {
  return (
    <View style={styles.containter}>
      <LinearGradient colors={['#24305F', '#202A4C']} start={{x:1, y:1}} end={{x:1, y:0}} locations={[.2,0.7]} style={styles.background}/>
      <View style={styles.content}>
      <Text style={styles.title}>{props.children}</Text>
      </View>
    </View>
  )
}

export default CardPendentTask

const styles = StyleSheet.create({
    containter:{
        width: '100%',
        height:'25%',
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    background:{
        width:'100%',
        height:'100%',
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    content:{
      width: '100%',
      height: '100%'
    },
    title:{
      fontFamily:'Roboto-Bold',
      textAlign:'center',
      fontSize:20,
      color:'#fff'
  },

})