import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageTitle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.text.title}</Text>
      <Text style={styles.subtitle}>{props.text.subtitle}</Text>
    </View>
  )
}

export default PageTitle

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
    subtitle:{
        fontFamily:'Inter-Regular',
        textAlign:'center',
        fontSize:14,
        marginTop: 4,
        color:'#1E1E1E'
    }
})