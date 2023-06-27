import { KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageTitle from '../components/PageTitle'
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import Menu from '../components/Menu'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserContext } from '../contexts/UserContext'
import { AuthContext } from '../contexts/AuthContext'
import RNRestart from 'react-native-restart';

const EditTaskScreen = ({route, navigation}) => {
  const userState = useContext(UserContext);
  const authState = useContext(AuthContext);

  const [name, setName] = useState(userState[0].nickname);
  const [url, setUrl] = useState(userState[0].url);

  const onChangeNome = (e) => {
    setName(e);
  } 

  const onChangeUrl = (e) => {
    setUrl(e);
  } 


  const onPressEdit = async () => {
    if(name != ''){
      const obj = {
        ...userState[0],
        url,
        nickname: name
      }
  
      await fetch(`https://reptaskbackapi.azurewebsites.net/api/Users`, {method:'PUT', headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${authState[0]}`
      },
        body: JSON.stringify(obj)
      });
    }

    navigation.goBack();
  }

  const onPressPass = async (e) => {
    await AsyncStorage.clear();

    setTimeout(() => {
      RNRestart.restart();
    }, 1000);
  }

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <ProfileHeader navigation={navigation} user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
          <ScreenBoard style={styles.board}>
            <PageTitle text={{title:`Configurar perfil`, subtitle:``}}/>
            <KeyboardAvoidingView                
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{flex:1, width:'100%'}}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.formContainer}>
                  <View style={styles.form}>
                    <InputText inputConfig={{secure:false, onChange:onChangeNome}}>Apelido/Nome</InputText>
                    <InputText inputConfig={{secure:false, onChange:onChangeUrl}}>URL da Foto</InputText>
                      <PatternButton buttonConfig={{title:'Editar perfil', onPress:onPressEdit}}/>
                      <PatternButton buttonConfig={{title:'Deslogar', onPress:onPressPass, isRed:true}}/>
                    </View>
                  </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </ScreenBoard>
      </SafeAreaView>
    </>

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