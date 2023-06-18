import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import PageTitle from '../components/PageTitle'
import AssignTaskLine from '../components/AssignTaskLine'
import { ScrollView } from 'react-native-gesture-handler'
import PatternModalButton from '../components/PatternModalButton'

const AssignTaskModalScreen = (props) => {
    const [moradores, setMoradores] = useState([{id:0, name: 'Manu', points: 50, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}, {id:1, name: 'Maria Luísa', points: 40, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:2, name: 'Maria Luísa', points: 30, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:3, name: 'Maria Luísa', points: 20, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:4, name: 'Maria Luísa', points: 35, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:5, name: 'Maria Luísa', points: 5, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}]);
    const [checked,setChecked] = useState(0);

    const onPressHandle = () => {

    }
  return (
    <ModalTemplateScreen modalConfig={props.modalConfig}>
        <PageTitle text={{title:'Moradores', subtitle:'Selecione um morador para atribuir a tarefa'}}/>
        <ScrollView style={{width:'80%', height:'50%', marginVertical:'7.5%'}}>
            {moradores && moradores.map((user) => (<AssignTaskLine data={{checked, setChecked, user}}/>))}
        </ScrollView>
        <PatternModalButton buttonConfig={{onPress:onPressHandle, title:'Atribuir tarefa'}}/>
    </ModalTemplateScreen>
  )
}

export default AssignTaskModalScreen

const styles = StyleSheet.create({

})