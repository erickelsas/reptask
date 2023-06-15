import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BodyTextWithTittle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.text.title}</Text>
      <Text style={styles.subtitle}>{props.text.subtitle}</Text>
    </View>
  )
}

export default BodyTextWithTittle

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontFamily:'Roboto-Bold',
        fontWeight: '800',
        textAlign:'center',
        fontSize: 16,
        color:'#000',
        marginTop:'10%'
    },
    subtitle:{
        fontFamily:'Inter-Regular',
        fontWeight: '400',
        textAlign:'center',
        fontSize:12,
        marginTop: 4,
        color:'#1E1E1E'
    }
})