import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard  } from 'react-native'
import React from 'react'

const ScreenBoard = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            {props.children}
        </View>
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
    },
    content:{
        width:'100%',
        height:'97%',
        paddingTop:'7.5%',
        paddingBottom: '5%',
        paddingHorizontal: '7.5%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    }
})