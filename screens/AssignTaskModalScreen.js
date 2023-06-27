import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import PageTitle from '../components/PageTitle'
import AssignTaskLine from '../components/AssignTaskLine'
import { ScrollView } from 'react-native-gesture-handler'
import PatternModalButton from '../components/PatternModalButton'
import { AuthContext } from '../contexts/AuthContext'

const AssignTaskModalScreen = (props) => {
    const authState = useContext(AuthContext);

    const [moradores, setMoradores] = useState([]);
    const [checked,setChecked] = useState(0);

    useEffect(() => {
      setMoradores(props.moradores);
    }, [])

    const onPressHandle = async () => {
      const obj = {
        choreId:props.task.id,
        userId:checked
      }

      await fetch('https://reptaskbackapi.azurewebsites.net/api/Chores/assignChore', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization':`Bearer ${authState[0]}`
        },
        body: JSON.stringify(obj),
      });

      props.flag[1](!props.flag[0]);
      
      props.modalConfig.setModalVisible(false);
    }
  return (
    <ModalTemplateScreen modalConfig={props.modalConfig}>
        <PageTitle text={{title:'Moradores', subtitle:'Selecione um morador para atribuir a tarefa'}}/>
        <ScrollView style={{width:'80%', height:'50%', marginVertical:'7.5%'}} showsVerticalScrollIndicator={false}>
            {moradores && moradores.map((user) => (<AssignTaskLine key={user.id} data={{checked, setChecked, user}}/>))}
        </ScrollView>
        <PatternModalButton buttonConfig={{onPress:onPressHandle, title:'Atribuir tarefa'}}/>
    </ModalTemplateScreen>
  )
}

export default AssignTaskModalScreen

const styles = StyleSheet.create({

})