import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import PatternButton from '../components/PatternButton'
import PatternModalButton from '../components/PatternModalButton'
import { UserContext } from '../contexts/UserContext'
import { AuthContext } from '../contexts/AuthContext'

const DeleteTaskModalScreen = (props) => {
    const userState = useContext(UserContext);
    const authState = useContext(AuthContext)

    const onPressApagarHandle = async() => {
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

    const onPressCancelarHandle = () => {
        props.modalConfig.setModalVisible(false);
    }
  return (
    <ModalTemplateScreen modalConfig={props.modalConfig}>
        <View style={{paddingBottom:12}}>
            <Text style={{fontSize:14, fontFamily:'Inter-Bold', textAlign:'center', paddingVertical:16}}>
                {`Tem certeza que deseja excluir a tarefa: ${props.task.name}`}?
            </Text>
            <PatternModalButton buttonConfig={{isRed:true, title:'Apagar tarefa', onPress:onPressApagarHandle}}/>
            <PatternModalButton buttonConfig={{title:'Cancelar', onPress:onPressCancelarHandle}}/>
        </View>
    </ModalTemplateScreen>
  )
}

export default DeleteTaskModalScreen

const styles = StyleSheet.create({})