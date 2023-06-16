import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


const CardPendetTask = () => {
  return (
    <View style={styles.containter}>
      <LinearGradient colors={['#24305F', '#202A4C']} start={{x:1, y:1}} end={{x:1, y:0}} locations={[.2,0.7]} style={styles.background}/>
    </View>
  )
}

export default CardPendetTask

const styles = StyleSheet.create({
    containter:{
        width: '100%',
        height: '50%',
        backgroundColor: 'red'
    },
    background:{
        width:'100%',
        height:'100%',
    },
})