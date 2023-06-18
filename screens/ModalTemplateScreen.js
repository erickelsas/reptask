import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'

const ModalTemplateScreen = (props) => {
  return (
    <Modal animationType="slide"
      transparent={true}
      visible={props.modalConfig.modalVisible}
      onRequestClose={() => {
        props.modalConfig.setModalVisible(!props.modalConfig.modalVisible);
      }}>
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          {props.children}
        </View>
      </View>
    </Modal>

  )
}

export default ModalTemplateScreen

const styles = StyleSheet.create({
    modalBg:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    modalContainer:{
        width:'90%',
        display:'flex',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        padding:20,
        borderRadius:25,
        position:'relative',
        zIndex: 2
    }
})