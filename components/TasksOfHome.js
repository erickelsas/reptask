import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Star from   '../assets/images/star.svg'
import PatternButton from './PatternButton'
import ButtonAtribuirTask from './ButtonAtribuirTask'
import AssignTaskModalScreen from '../screens/AssignTaskModalScreen';

const TasksOfHome = (props) => {
    
    const onPressHandle = () => {
        setModalVisible(true);
    }

    const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
        <View style={styles.component}>
            <View style={styles.container}>
                <Text style={styles.titleTask}>{props.task.name}</Text>
                <View style={styles.points}>
                    <Star></Star>
                    <Text style={styles.textpoints}> {props.task.chorePoints} pontos</Text>
                </View>
                <ButtonAtribuirTask buttonConfig={{title:'Atribuir Task', onPress:onPressHandle}}/>
            </View>
            <View style={styles.linha}/>
        </View>
        <AssignTaskModalScreen task={props.task} modalConfig={{modalVisible, setModalVisible}} moradores={props.moradores} flag={props.flag}/>
    </>
  )
}

export default TasksOfHome

const styles = StyleSheet.create({
    component:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    container:{
        width: '100%',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '4%',
    },
    titleTask:{
        fontFamily:'Inter-Bold',
        fontSize:14,
        color: '#1E1E1E',
        width:'33.33%',
        overflow:'hidden'
    },
    points:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width:'30%'
    },
    textpoints:{
        fontFamily:'Inter-Medium',
        fontSize:14,
        color: '#474747',
        marginRight: '5%'
    },
    linha:{
        width: '85%',
        marginTop: '3%',
        backgroundColor: '#D9D9D9',
        height: '2%'
    }

})