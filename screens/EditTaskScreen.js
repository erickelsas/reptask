import { KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, View, TouchableOpacity } from 'react-native'
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

const EditTaskScreen = ({navigation, route}) => {
  const { flag, task } = route.params;
  const userState = useContext(UserContext);
  const authState = useContext(AuthContext);
  const repState = useContext(RepContext);

  const [title, setTitle] = useState(`${task.name}`);
  const [points, setPoints] = useState(`${task.chorePoints}`);
  const [description, setDescription] = useState(`${task.description}`);

  const [checkbox, setCheckbox] = useState(false);



  const onChangeTitleHandle = (e) => {
    setTitle(e);
  } 

  const onChangePointsHandle = (e) => {
    setPoints(e);
  } 

  const onChangeDescriptionHandle = (e) => {
    setDescription(e);
  } 

  const onPressEdit = async () => {
    if(title.length == 0 || points.length == 0 || description.length == 0){
      return
    }

    let obj = {        
      id:task.id,
      name:title,
      userId:task.userId,
      description,
      chorePoints:parseInt(points),
      houseId:userState[0].houseId,};

    if(!checkbox){
      obj.userId = 0;
    }

    await fetch('https://reptaskbackapi.azurewebsites.net/api/Chores', {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${authState[0]}`
      },
      body: JSON.stringify(obj),
    });

    flag[1](!flag[0]);

    navigation.goBack();
  }

  const onPressCheckbox = () => {
    setCheckbox(!checkbox);
  }

  const onPressDelete = async() => {
    await fetch('https://reptaskbackapi.azurewebsites.net/api/Chores', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${authState[0]}`
            },
            body: JSON.stringify(props.task),
        });

        props.flag[1](!props.flag[0]);
    
    props.modalConfig.setModalVisible(false);
}

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <ProfileHeader navigation={navigation} user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
          <ScreenBoard style={styles.board}>
            <PageTitle text={{title:`Editar tarefa`, subtitle:repState[0].name}}/>
            <KeyboardAvoidingView                
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{flex:1, width:'100%'}}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.formContainer}>
                  <View style={styles.form}>
                    <InputText inputConfig={{secure:false, onChange:onChangeTitleHandle, value:title}}>Título</InputText>
                    <InputText inputConfig={{secure:false, onChange:onChangePointsHandle, keyboardType:'numeric', value:points}}>Pontuação</InputText>
                    <InputText inputConfig={{secure:false, onChange:onChangeDescriptionHandle, lines:3, multiline:true, value:description}}>Descrição</InputText>
                    <View style={{width:'100%', display:'flex', justifyContent:'center', alignItems:"center", flexDirection:'row', gap:8, marginBottom:'2%'}}>
                      <TouchableOpacity onPress={onPressCheckbox}>
                          <View style={styles.checkbox}>
                              {checkbox && <View style={styles.marked}/>}
                          </View>
                      </TouchableOpacity>
                      <Text style={{fontFamily:'Roboto-Regular', fontSize:12}}>Manter a atribuição da tarefa</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                      <PatternButton buttonConfig={{title:'Editar tarefa', onPress:onPressEdit}}/>
                      <PatternButton buttonConfig={{title:'Apagar tarefa', onPress:onPressDelete, isRed: true}}/>
                    </View>
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
    },
    checkbox:{
      height:24,
      width:24,
      borderRadius:12,
      borderWidth:3,
      borderColor:'#878787',
      elevation: 20,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  marked:{
      height:14,
      width:14,
      borderRadius:7,
      backgroundColor:'#36457D'
  }
})