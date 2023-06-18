import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import PageTitle from '../components/PageTitle'
import { CheckBox } from 'react-native-web'
import ParticipantPhotoBubble from '../components/ParticipantPhotoBubble'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AssignTaskModalScreen = () => {
    const [moradores, setMoradores] = useState([{id:0, name: 'Manu', points: 50, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}, {id:1, name: 'Maria Luísa', points: 40, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:2, name: 'Maria Luísa', points: 30, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:3, name: 'Maria Luísa', points: 20, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:4, name: 'Maria Luísa', points: 35, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:5, name: 'Maria Luísa', points: 5, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}]);
    const [checked,setChecked] = useState(0);

    const onPressCheckbox = (e) => {
        setChecked(e.id);
        console.log(checked);
    }
  return (
    <ModalTemplateScreen>
        <PageTitle text={{title:'Moradores', subtitle:'Selecione um morador para atribuir a tarefa'}}/>
        <View>
            {moradores && moradores.map((user) => (            <View key={user.id}>
                <View>
                    <ParticipantPhotoBubble participant={user} index={0}/>
                    <Text>
                        {user.name}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => {setChecked(user.id); console.log(user.id)}}>
                    <View style={styles.checkbox}>
                        {checked == user.id && <View style={styles.marked}/>}
                    </View>
                </TouchableOpacity>
            </View>))}
        </View>
    </ModalTemplateScreen>
  )
}

export default AssignTaskModalScreen

const styles = StyleSheet.create({
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