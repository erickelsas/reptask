import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Star from   '../assets/images/star.svg'
import TaskModalScreen from '../screens/TaskModalScreen';
import FinalizeTaskModalScreen from '../screens/FinalizeTaskModalScreen'
import DeleteTaskModalScreen from '../screens/DeleteTaskModalScreen'

const icon = (iconName, size, color) => {
    return <Icon name={iconName} size={size} color={color}/>
}

const Tasks = (props) => {
    const [checkbox, setCheckbox] = useState('');
    const onPressCheckbox = () => {
        setCheckbox(!checkbox);
    }

    const onLongPressHandle = () => {
        setModalVisible(true);
    }
    
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
        <View style={styles.component}>
            <TouchableWithoutFeedback onLongPress={onLongPressHandle}>
                <View style={styles.container}>
                    <View>
                        {icon('chess-king', 26, '#36457D')}
                    </View>
                    <Text style={checkbox ? styles.titleTaskCheck:styles.titleTask}>
                        {props.task.name}
                    </Text>
                    <View style={styles.points}>
                    <Star></Star>
                    <Text style={styles.textpoints}> {props.task.chorePoints} pontos</Text>
                    </View>
                    <TouchableOpacity onPress={onPressCheckbox}>
                        <View style={styles.checkbox}>
                            {checkbox && <View style={styles.marked}/>}
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.linha}/>
        </View>
        <TaskModalScreen modalConfig={{modalVisible, setModalVisible}} task={props.task} navigation={props.navigation} flag={props.flag}/>
    </>
  )
}

export default Tasks

const styles = StyleSheet.create({
    component:{
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    
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
        marginLeft:'2%',
        width: '50%',
        fontFamily:'Inter-Bold',
        fontSize:16,
        color: '#1E1E1E',
    },
    titleTaskCheck:{
        marginLeft:'2%',
        width: '50%',
        fontFamily:'Inter-Bold',
        fontSize:16,
        color: '#1E1E1E',
        textDecorationLine: 'line-through',

    },
    points:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textpoints:{
        fontFamily:'Inter-Medium',
        fontSize:14,
        color: '#474747',
        marginRight: '5%'
    },
    checkbox:{
        height:24,
        width:24,
        borderRadius:12,
        borderWidth:3,
        borderColor:'#878787',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    marked:{
        height:24,
        width:24,
        borderRadius:12,
        borderWidth:7,
        borderColor:'#36457D'
    },
    linha:{
        width: '85%',
        marginTop: '3%',
        backgroundColor: '#D9D9D9',
        height: '2%'
    }

})