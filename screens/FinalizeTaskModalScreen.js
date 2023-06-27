import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import PatternModalButton from '../components/PatternModalButton'
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'

const FinalizeTaskModalScreen = (props) => {
    const authState = useContext(AuthContext);
    const userState = useContext(UserContext);

    const onPressConcluirHandle = async () => {
        const obj = {
            choreId:props.task.id,
            userId:userState[0].id
        }

        await fetch('https://reptaskbackapi.azurewebsites.net/api/Chores/completeChore', {
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${authState[0]}`
            },
            body: JSON.stringify(obj)
        });

        props.flag[1](props.flag[0] == true ? false:true);

        props.modalConfig.setModalVisible(false);
    }

  return (
    <ModalTemplateScreen modalConfig={props.modalConfig}>
        <View>
            <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {props.task.name}
                    </Text>
                    <View style={styles.points}>
                        <IconCommunity name={'star-four-points'} size={14} color={'#5A5A5A'}/>
                        <Text style={styles.pointsText}>
                            {props.task.chorePoints}
                        </Text>
                    </View>
                </View>
                <PatternModalButton buttonConfig={{title:'Concluir tarefa', onPress:onPressConcluirHandle}}/>
        </View>
    </ModalTemplateScreen>
  )
}

export default FinalizeTaskModalScreen

const styles = StyleSheet.create({
    textContaier:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
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
        paddingBottom:10
    },
})