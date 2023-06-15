import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageJustTittle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.text.title}</Text>
    </View>
  )
}

export default PageJustTittle

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontFamily:'Roboto-Bold',
        textAlign:'center',
        fontSize:20,
        color:'#000'
    },
})