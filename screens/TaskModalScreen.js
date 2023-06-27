import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useContext} from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import { TouchableOpacity } from 'react-native'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import PatternModalButton from '../components/PatternModalButton'
import FinalizeTaskModalScreen from './FinalizeTaskModalScreen'
import DeleteTaskModalScreen from './DeleteTaskModalScreen'
import { UserContext } from '../contexts/UserContext'

const TaskModalScreen = (props) => {
    const userState = useContext(UserContext)
    const onPressConcluirHandle = () => {
        setModalVisibleConcluir(true);
        props.modalConfig.setModalVisible(false);
    }

    const onPressApagarHandle = () => {
        setModalVisibleApagar(true);
        props.modalConfig.setModalVisible(false);
    }

    const onPressEditarHandle = () => {
        props.navigation.navigate('Editar tarefa', {flag: props.flag, task:props.task});
        props.modalConfig.setModalVisible(false);
    }

    const [modalVisibleConcluir, setModalVisibleConcluir] = useState(false);
    const [modalVisibleApagar, setModalVisibleApagar] = useState(false);

  return (
    <>
        <ModalTemplateScreen modalConfig={props.modalConfig}>
            <View style={{width:'100%', position:'relative', paddingVertical:'7.5%'}}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            {props.task.name}
                        </Text>
                        <View style={styles.points}>
                            <IconCommunity name={'star-four-points'} size={14} color={'#5A5A5A'}/>
                            <Text style={styles.pointsText}>
                                {props.task.chorePoints} pontos
                            </Text>
                        </View>
                    </View>
                    <View>
                        <PatternModalButton buttonConfig={{title:'Concluir tarefa', onPress:onPressConcluirHandle}}/>
                        {userState[0].role == "ADMIN" && <PatternModalButton buttonConfig={{title:'Apagar tarefa', onPress:onPressApagarHandle, isRed:true}}/>}
                    </View>
                </View>
                {userState[0].role == "ADMIN" && <TouchableOpacity style={styles.editarBtn} onPress={onPressEditarHandle}>
                    <Text style={styles.editar}>
                        Editar
                    </Text>
                </TouchableOpacity>}
            </View>
        </ModalTemplateScreen>
        <FinalizeTaskModalScreen flag={props.flag} modalConfig={{modalVisible:modalVisibleConcluir, setModalVisible:setModalVisibleConcluir}} task={props.task} navigation={props.navigation}/>
        <DeleteTaskModalScreen flag={props.flag} modalConfig={{modalVisible:modalVisibleApagar, setModalVisible: setModalVisibleApagar}} task={props.task} navigation={props.navigation} />
    </>
  )
}

export default TaskModalScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center', 
        justifyContent:'center'
    },
    textContaier:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontFamily:'Inter-Bold',
        color:'#1E1E1E',
        textAlign:'center'
    },
    points:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:'5%'
    },
    editarBtn:{
        position:'absolute',
        zIndex:2,
        top:'0%',
        right:'2%'
    },
    editar:{
        fontSize:14,
        fontFamily:'Inter-Medium',
        color:'#212B54'
    }

})