import { KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageTitle from '../components/PageTitle'
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton'

const EditTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState(0);
  const [description, setDescription] = useState('');

  const onChangeTitleHandle = (e) => {
    setTitle(e.value);
  } 

  const onChangePointsHandle = (e) => {
    setPoints(e.value);
  } 

  const onChangeDescriptionHandle = (e) => {
    setDescription(e.value);
  } 

  const onPressEdit = (e) => {

  }

  const onPressDelete = (e) => {

  }

  return (
    <View style={styles.screen}>
        <ProfileHeader user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <ScreenBoard style={styles.board}>
          <PageTitle text={{title:`Editar tarefa`, subtitle:`República 01`}}/>
          <KeyboardAvoidingView                
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex:1, width:'100%'}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.formContainer}>
                <View style={styles.form}>
                  <InputText inputConfig={{secure:false, onChange:onChangeTitleHandle}}>Título</InputText>
                  <InputText inputConfig={{secure:false, onChange:onChangePointsHandle, keyboardType:'numeric'}}>Pontuação</InputText>
                  <InputText inputConfig={{secure:false, onChange:onChangeTitleHandle, lines:3, multiline:true}}>Descrição</InputText>
                  <View style={styles.buttonContainer}>
                    <PatternButton buttonConfig={{title:'Editar tarefa', onPressButton:onPressEdit}}/>
                    <PatternButton buttonConfig={{title:'Apagar tarefa', onPressButton:onPressDelete, isRed: true}}/>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ScreenBoard>
    </View>
  )
}

export default EditTaskScreen

const styles = StyleSheet.create({
    screen:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        height:'100%',
        width:'100%',
        flex: 1,
    },
    formContainer:{
      width:'100%',
      height:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'-7.5%'
    },
    form:{
      width:'75%',
      gap: 8,
    },
    buttonContainer:{
      width:'90%',
      marginLeft:'5%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      gap:8
    }
})