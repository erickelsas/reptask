import { KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageTitle from '../components/PageTitle'
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import Menu from '../components/Menu'
import { UserContext } from '../contexts/UserContext'
import { AuthContext } from '../contexts/AuthContext'
import { RepContext } from '../contexts/RepContext'

const AddTaskScreen = ({route, navigation}) => {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const userState = useContext(UserContext);
  const authState = useContext(AuthContext);
  const repState = useContext(RepContext);


  const onChangeTitleHandle = (e) => {
    setTitle(e);
  } 

  const onChangePointsHandle = (e) => {
    setPoints(e);
  } 

  const onChangeDescriptionHandle = (e) => {
    setDescription(e);
  } 

  const onPressAdd = async (e) => {
    if(title == '' && points == ''){
      setError(true);
      return;
    }

    const obj = {
      name:title,
      description,
      chorePoints:parseInt(points),
      houseId:userState[0].houseId,
    }

    await fetch('https://reptaskbackapi.azurewebsites.net/api/Chores', {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${authState[0]}`
      },
      body: JSON.stringify(obj),
    });

    setError(false);
    setTitle('');
    setPoints('');
    setDescription('');
  }

  return (
    <>
      <SafeAreaView style={styles.screen}>
          <ProfileHeader  navigation={navigation} user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
          <ScreenBoard style={styles.board}>
            <PageTitle text={{title:`Adicionar tarefa`, subtitle:repState[0].name}}/>
            <KeyboardAvoidingView                
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{flex:1, width:'100%'}}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.formContainer}>
                  <View style={styles.form}>
                    <InputText inputConfig={{secure:false, onChange:onChangeTitleHandle, value:title}}>Título</InputText>
                    <InputText inputConfig={{secure:false, onChange:onChangePointsHandle, keyboardType:'numeric', value:points}}>Pontuação</InputText>
                    <InputText inputConfig={{secure:false, onChange:onChangeDescriptionHandle, lines:3, multiline:true, value:description}}>Descrição</InputText>
                    <View style={styles.buttonContainer}>
                      <PatternButton buttonConfig={{title:'Adicionar tarefa', onPress:onPressAdd}}/>
                    </View>
                    {error && <Text style={{fontSize:16, color:'#FF0000', marginTop:'5%', textAlign:'center'}}>Título e pontuação são campos obrigatórios!</Text>}
                    {!error && <Text style={{fontSize:16, color:'#FF0000', marginTop:'5%', textAlign:'center'}}></Text>}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

          </ScreenBoard>
      </SafeAreaView>
    </>

  )
}

export default AddTaskScreen

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