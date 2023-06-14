import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenBoard = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

export default ScreenBoard

const styles = StyleSheet.create({
    container:{
        elevation:20,
        shadowColor:'#000',
        backgroundColor:'#FAFAFF',
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        width:'100%',
        height:'90%',
        marginBottom: '-5%',
        marginTop: '15%'
    }
})