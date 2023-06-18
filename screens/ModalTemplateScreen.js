import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalTemplateScreen = (props) => {
  return (
    <View style={styles.modalBg}>
      <View style={styles.modalContainer}>
        {props.children}
      </View>
    </View>
  )
}

export default ModalTemplateScreen

const styles = StyleSheet.create({
    modalBg:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.75)'
    },
    modalContainer:{
        width:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        padding:20,
        borderRadius:25,
        position:'relative',
        zIndex: 2
    }
})